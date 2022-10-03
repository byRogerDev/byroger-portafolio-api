"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.addEntry = exports.getEntries = void 0;
const technologies_json_1 = __importDefault(require("./technologies.json"));
const techs = technologies_json_1.default;
const getEntries = () => techs;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
const findById = (id) => {
    const tec = techs.find(c => c.id === id);
    return tec;
};
exports.findById = findById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5vbG9neVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdGVjaG5vbG9neVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsNEVBQTJDO0FBRTNDLE1BQU0sS0FBSyxHQUF3QiwyQkFBUSxDQUFDO0FBRXJDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUF6QixRQUFBLFVBQVUsY0FBZTtBQUUvQixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFBdEIsUUFBQSxRQUFRLFlBQWM7QUFFNUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtJQUNuQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUhXLFFBQUEsUUFBUSxZQUduQiJ9