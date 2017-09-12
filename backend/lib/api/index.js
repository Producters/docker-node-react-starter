import express from 'express';
import notes from './notes';
import users from './users';

const router = express.Router();
router.use(notes);
router.use(users);
export default router;
