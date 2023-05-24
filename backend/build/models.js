"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const listenerSchema = new mongoose_1.default.Schema({
    headers: Object,
    endpoint: String,
    body: Object,
}, {
    timestamps: true,
});
listenerSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        delete returnedObject.__v;
    }
});
exports.default = mongoose_1.default.model('Listener', listenerSchema);
