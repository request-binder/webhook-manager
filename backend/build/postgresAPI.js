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
exports.createEndpoint = exports.endpointExists = exports.getAllEndpoints = void 0;
const postgres_1 = __importDefault(require("postgres"));
const sql = (0, postgres_1.default)(process.env.POSTGRES_URI);
const getAllEndpoints = () => __awaiter(void 0, void 0, void 0, function* () {
    const endpoints = yield sql `
    SELECT * FROM endpoint;
  `;
    return endpoints.map(endpoint => endpoint.endpoint);
});
exports.getAllEndpoints = getAllEndpoints;
const endpointExists = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    const record = yield sql `
    SELECT endpoint FROM endpoint
    WHERE endpoint = ${endpoint}
  `;
    return record.length >= 1;
});
exports.endpointExists = endpointExists;
const createEndpoint = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sql `
    INSERT INTO endpoint (endpoint)
    VALUES (${endpoint})
  `;
});
exports.createEndpoint = createEndpoint;
