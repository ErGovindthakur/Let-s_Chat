import express from 'express'

import { getOtherUsers, login, logout, register } from '../controllers/user.controllers.js';

import isAuthenticated from '../middlewares/isAuthenticated.middlewares.js';

const router = express.Router();

router.route("/register").post((register))
router.route("/login").post((login))
router.route("/logout").get(logout)
router.route("/").get(isAuthenticated,getOtherUsers)

export default router