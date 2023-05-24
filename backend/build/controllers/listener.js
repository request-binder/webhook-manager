"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listenerRouter = express_1.default.Router();
const models_1 = __importDefault(require("../models"));
// debug route
listenerRouter.get('/', (_req, res) => {
    models_1.default.find({}).then((requests) => {
        res.json(requests);
    });
});
listenerRouter.post('/:endpoint', (req, res) => {
    const body = req.body;
    const result = {
        headers: req.headers,
        endpoint: req.params.endpoint,
        body,
    };
    const request = new models_1.default(result);
    request.save();
    // console.log(result);
    res.send(request.toJSON());
});
exports.default = listenerRouter;
