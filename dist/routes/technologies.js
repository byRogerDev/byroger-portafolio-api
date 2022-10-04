"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const techService = __importStar(require("../services/technologyService"));
const router = express_1.default.Router();
router.get('', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const techs = yield techService.getEntries();
    res.send(techs);
}));
router.get('/:id', (req, res) => {
    console.log("router");
    const tec = techService.findById(parseInt(req.params.id));
    if (!tec)
        return res.status(404).send("Tecnologia no encontrada");
    else
        res.send(tec);
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5vbG9naWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy90ZWNobm9sb2dpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwyRUFBNkQ7QUFFN0QsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV6RCxJQUFHLENBQUMsR0FBRztRQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7UUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9