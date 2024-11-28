import validUrl from 'valid-url';

const validateUrl = (req, res, next) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({
      error: 'URL is required',
    });
  }

  if (!validUrl.isWebUri(originalUrl)) {
    return res.status(400).json({
      error: 'Invalid URL format',
    });
  }

  next();
};

export default validateUrl;
