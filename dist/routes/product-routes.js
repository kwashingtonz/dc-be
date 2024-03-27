"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var productController = require("../controllers/product-controller");
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
 *              code: 200
 *              extra: Success
 *              count: 0
 *     productsReq:
 *          type: object
 *          properties:
 *            searchText:
 *              type: string
 *              description: search text
 *            gender:
 *              type: number
 *              description: gender
 *            type:
 *              type: number
 *              description: type
 *            sortType:
 *              type: string
 *              description: sort type
 *          example:
 *              searchText: abc
 *              gender: 1
 *              type: 1
 *              sortType: low
 */
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products API
 */
/**
 * @swagger
 * /service/products/loadProducts:
 *    post:
 *      summary: Load products
 *      tags: [Products]
 *      description: load products
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/productsReq'
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
router.post("/loadProducts", auth, productController.loadProducts);
module.exports = router;
