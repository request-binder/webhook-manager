"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoAPI_1 = require("../mongoAPI");
const binsRouter = express_1.default.Router();
binsRouter.get('/bins/:endpoint_id', (req, res) => {
    (0, mongoAPI_1.getBinRequests)(req.params.endpoint_id).then((webhookRequests) => res.json(webhookRequests));
});
exports.default = binsRouter;
