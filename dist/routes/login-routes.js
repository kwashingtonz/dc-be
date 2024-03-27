"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var loginController = require("../controllers/login-controller");
const auth = require("../middleware/auth-middleware");
const router = express_1.default.Router();
// add authentication middleware
// router.use(auth);
/**
 * @swagger
 * components:
 *   schemas:
 *     CommonResponse:
 *          type: object
 *          properties:
 *            status:
 *              type: boolean
 *              description: Indicates the status of the response.
 *            code:
 *              type: string
 *              description: The response code.
 *            extra:
 *              oneOf:
 *                - type: object
 *                - type: string
 *                - type: array
 *              description: Reponse object.
 *            count:
 *              type: integer
 *              description: Number of items in the response.
 *          example:
 *              status: true
 *              code: '200'
 *              extra: Success
 *              count: 0
 *     loginReq:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *              description: username
 *            password:
 *              type: string
 *              description: password
 *          example:
 *              username: abc@zxy.com
 *              password: 1234
 */
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login API
 */
/**
 * @swagger
 * /service/login/login:
 *    post:
 *      summary: Login
 *      tags: [Login]
 *      description: Login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/loginReq'
 *      security:
 *          - apiKeyAuth: []
 *      responses:
 *              200:
 *                  description: Successful
 *                  content:
 *                    application/json:
 *                      schema:
 *                        $ref: '#/components/schemas/CommonResponse'
 *              400:
 *                  description: Not Available
*/
router.post("/login", loginController.login);
module.exports = router;
