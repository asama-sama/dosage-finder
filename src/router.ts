import express from 'express';
import getDosagesForUser from './middleware/getDosagesForUser'
import healthCheck from './middleware/healthCheck';

const router = express.Router();

router.get('/', healthCheck);

router.get('/users/:userId/dosages', getDosagesForUser);

export default router;
