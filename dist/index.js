"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const technologies_1 = __importDefault(require("./routes/technologies"));
const app = (0, express_1.default)();
const port = 3001;
const cors = require('cors');
app.use(express_1.default.json());
app.use(cors());
app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.get('/ping', (_, res) => {
    console.log("ping");
    res.send('pong');
});
app.use('/technologies', technologies_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIseUVBQXVEO0FBRXZELE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBR2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxzQkFBa0IsQ0FBQyxDQUFBO0FBRTVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0UsQ0FBQyxDQUFDLENBQUMifQ==