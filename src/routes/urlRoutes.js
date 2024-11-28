import express from 'express';
import { shortenUrl, redirectUrl, getUrlStats } from '../controllers/urlController.js';
import validateUrl from '../middleware/validateurl.js';
import rateLimiter from '../middleware/rateLimiter.js';

const router = express.Router();

router.post(
  '/shorten',
  rateLimiter,
  validateUrl,
  shortenUrl
);

router.get('/:shortId', redirectUrl);

router.get('/stats/:shortId', getUrlStats);

export default router; 
