"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controllers/users/user.controller");
const auth_user_1 = require("../../middlewares/auth.user");
exports.userRouter = express_1.default.Router();
/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user to the Rangurura system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amazina
 *               - intara
 *               - akarere
 *               - akagari
 *               - umudugudu
 *               - telephone
 *               - ijambobanga
 *               - indangamuntu
 *               - kwemezaIjambobanga
 *               - umurenge
 *             properties:
 *               amazina:
 *                 type: string
 *                 description: User's full name
 *               intara:
 *                 type: string
 *                 description: Province name
 *               akarere:
 *                 type: string
 *                 description: District name
 *               umurenge:
 *                 type: string
 *                 description: Sector name
 *               akagari:
 *                 type: string
 *                 description: Cell name
 *               umudugudu:
 *                 type: string
 *                 description: Village name
 *               telephone:
 *                 type: string
 *                 description: User's contact number
 *               ijambobanga:
 *                 type: string
 *                 description: Password in Kinyarwanda
 *               indangamuntu:
 *                 type: string
 *                 description: National ID number
 *               kwemezaIjambobanga:
 *                 type: string
 *                 description: Password confirmation in Kinyarwanda
 *     responses:
 *       200:
 *         description: Successful registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
exports.userRouter.post("/register", user_controller_1.registerUser);
/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: logg in the user
 *     description: Loggin user to the Rangurura system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ijambobanga
 *               - indangamuntu
 *             properties:
 *               ijambobanga:
 *                 type: string
 *                 description: Password in english
 *               indangamuntu:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
exports.userRouter.post("/login", user_controller_1.loginUser);
/**
 * @swagger
 * /api/v1/users/verify:
 *   post:
 *     summary: verify the user
 *     description: verify user to the Rangurura system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: # Add properties field here
 *               propertyName: # Add property name here
 *                 type: string
 *                 required: true
 *           # Add additional properties as needed
 *     responses:
 *       200:
 *         description: User verified successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
exports.userRouter.post("/verify", user_controller_1.verifyOtp);
/**
 * @swagger
 * /api/v1/users/resendOtp:
 *   post:
 *     summary: User reverify.
 *     description: This is to resend verification OTP to the user.
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: verification otp
 *         description: The user's verification OTP.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             number:
 *               required: true
 *               type: string
 *
 *     responses:
 *       200:
 *         description: Verification OTP sent successfully.
 *       401:
 *         description: Unauthorized - Invalid credentials.
 *       500:
 *         description: Internal server error.
 */
exports.userRouter.post("/resendOtp", user_controller_1.resendOtp);
//
// /**
//  * @swagger
//  * /api/v1/users/:id/passReset:
//  *   post:
//  *     summary: Reset password.
//  *     description: This is to reset password.
//  *     tags: [Users]
//  *     parameters:
//  *       - in: body
//  *         name: verification otp
//  *         description: This is to reset the password of the user if he or she forgets the password.
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             number:
//  *               type: string
//  *               required:true
//  *
//  *     responses:
//  *       200:
//  *         description: password reset successfully.
//  *       401:
//  *         description: Unauthorized - Invalid credentials.
//  *       500:
//  *         description: Internal server error.
//  */
// userRouter.put("/:id/passReset");
// /**
//  * @swagger
//  * /api/v1/users/leaders/add:
//  *   post:
//  *     summary: Add leader.
//  *     description: This is to grant or to add permission to the leader.
//  *     tags: [Users]
//  *     parameters:
//  *       - in: body
//  *         name: verification otp
//  *         description: The user's verification otp.
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             indangamuntu:
//  *               type: string
//  *               required: true
//  *             organizationLevel:
//  *               required: true
//  *               type: string
//  *             location:
//  *               required: true
//  *               type: string
//  *             category:
//  *               required: true
//  *               type: string
//  *             role:
//  *               required: true
//  *               type: string
//  *                required:true
//  *              organizationLevel:
//  *                 required:true
//  *                 type: string
//  *              location:
//  *                 required:true
//  *                 type: string
//  *
//  *              category:
//  *                  required:true
//  *                  type: string
//  *               role:
//  *                 required:true
//  *                 type: string
//  *
//  *
//  *     responses:
//  *       200:
//  *         description: leader added successfully.
//  *       401:
//  *         description: Unauthorized - Invalid credentials.
//  *       500:
//  *         description: Internal server error.
//  */
//
//this is to delete account
/**
 * @swagger
 * /api/v1/users/deleteAccount:
 *   post:
 *     summary: delete account.
 *     description: This is to delete your account.
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: Delete account
 *         description: Destroying account.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             indangamuntu:
 *               type: string
 *               required: true
 *
 *     responses:
 *       200:
 *         description: account deleted successfully.
 *       401:
 *         description: Unauthorized - Invalid credentials.
 *       500:
 *         description: Internal server error.
 */
exports.userRouter.delete("/deleteAccount", auth_user_1.protect, user_controller_1.destroyAccount);
