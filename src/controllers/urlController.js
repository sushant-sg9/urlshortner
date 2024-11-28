import Url from '../models/url.js';
import generateShortId from '../utiles/shorturl.js'; 

export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json({
        shortUrl: `${baseUrl}/${url.shortId}`,
        shortId: url.shortId,
      });
    }

    const shortId = generateShortId();

    url = new Url({
      originalUrl,
      shortId,
    });
    await url.save();

    res.status(201).json({
      shortUrl: `${baseUrl}/${shortId}`,
      shortId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


export const redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    url.clicks += 1;
    url.lastAccessed = new Date();
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


export const getUrlStats = async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    res.json({
      originalUrl: url.originalUrl,
      clicks: url.clicks,
      lastAccessed: url.lastAccessed || 'Never accessed',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
