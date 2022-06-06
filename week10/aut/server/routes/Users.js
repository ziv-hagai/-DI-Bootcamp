import { getUsers, register, login, logout } from '../controllers/Users.js'
import express from 'express'

const router = express.Router();

router.get('/users', getUsers);
router.get('/register', register);
router.get('/login', login);
router.get('/logout', logout);

export default router;