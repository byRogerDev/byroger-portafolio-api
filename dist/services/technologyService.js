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
exports.findById = exports.addEntry = exports.getEntries = void 0;
const technologies_json_1 = __importDefault(require("./technologies.json"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const techs = technologies_json_1.default;
const getEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getEntries");
    let tec = yield prisma.technologies.findMany();
    console.log(tec);
    return tec;
});
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
const findById = (id) => {
    const tec = techs.find(c => c.id === id);
    return tec;
};
exports.findById = findById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5vbG9neVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdGVjaG5vbG9neVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQTJDO0FBQzNDLDJDQUE2QztBQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQUNsQyxNQUFNLEtBQUssR0FBd0IsMkJBQVEsQ0FBQztBQUVyQyxNQUFNLFVBQVUsR0FBRyxHQUFTLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQSxDQUFDO0FBTFcsUUFBQSxVQUFVLGNBS3JCO0FBRUssTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQXRCLFFBQUEsUUFBUSxZQUFjO0FBRTVCLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7SUFDbkMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDdkMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFIVyxRQUFBLFFBQVEsWUFHbkIifQ==