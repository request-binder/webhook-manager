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
exports.sendEventToClients = void 0;
const express_1 = __importDefault(require("express"));
const mongoAPI_1 = require("../mongoAPI");
const postgresAPI_1 = require("../postgresAPI");
let SecureRandom = require('securerandom');
const binsRouter = express_1.default.Router();
let clients = [];
binsRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield (0, postgresAPI_1.getAllEndpoints)());
}));
binsRouter.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = SecureRandom.hex(12);
    try {
        yield (0, postgresAPI_1.createEndpoint)(endpoint);
        res.json({ endpoint });
    }
    catch (error) {
        console.log("Failed to create endpoint: " + error);
        res.status(500).send();
    }
}));
binsRouter.get('/:endpoint_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield (0, mongoAPI_1.getBinRequests)(req.params.endpoint_id));
}));
binsRouter.get('/events/:endpoint_id', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    // Add the response object to the clients array
    clients.push({ endpoint: req.params.endpoint_id, connection: res });
    // Handle client disconnection
    req.on('close', () => {
        // Remove the response object from the clients array
        clients = clients.filter(({ connection }) => connection !== res);
    });
});
function sendEventToClients(eventData, endpoint) {
    const formattedEventData = `data: ${JSON.stringify(eventData)}\n\n`;
    clients.forEach(client => {
        if (client.endpoint === endpoint) {
            client.connection.write(formattedEventData);
        }
    });
}
exports.sendEventToClients = sendEventToClients;
exports.default = binsRouter;
