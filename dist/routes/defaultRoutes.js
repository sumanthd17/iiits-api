"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var defaultControllers_1 = require("../controllers/defaultControllers");
var router = new express_1.Router();
router.get('/', defaultControllers_1.defaultIndex);
router.post('/getToken', defaultControllers_1.getToken);
router.post('/login', defaultControllers_1.login);
exports.default = router;
//# sourceMappingURL=defaultRoutes.js.map