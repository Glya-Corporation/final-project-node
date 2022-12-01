const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *  post:
 *   tags: [Login]
 *   summary: Send user login data and get authentication token
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         $ref: '#/components/schemas/Login'
 *   responses:
 *    200:
 *     description: OK
 */

router.post("/auth/login", userLogin);

module.exports = router;