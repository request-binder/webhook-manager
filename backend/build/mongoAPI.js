"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBinRequests = void 0;
const mongoose_1 = require("mongoose");
const models_1 = __importDefault(require("./models"));
const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/webhook-manager";
(0, mongoose_1.connect)(mongoDBUri)
    .then(() => {
    console.log('connected to MongoDB');
})
    .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
});
const getBinRequests = (endpoint) => {
    return models_1.default.find({ endpoint: endpoint }).sort({ createdAt: 'desc' });
};
exports.getBinRequests = getBinRequests;
