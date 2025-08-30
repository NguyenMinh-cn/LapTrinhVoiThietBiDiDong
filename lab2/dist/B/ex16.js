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
Object.defineProperty(exports, "__esModule", { value: true });
const ex15_1 = require("./ex15");
function runParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        console.time('parallel');
        const [t1, t2, t3] = yield Promise.all([(0, ex15_1.task1)(), (0, ex15_1.task2)(), (0, ex15_1.task3)()]);
        console.log(t1, t2, t3);
        console.timeEnd('parallel');
    });
}
runParallel();
