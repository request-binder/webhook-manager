"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const getBinRequests = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.default.find({ endpoint: endpoint });
});
exports.getBinRequests = getBinRequests;
