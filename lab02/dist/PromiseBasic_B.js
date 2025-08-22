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
// 12. Write an async function that calls simulateTask(2000) and logs the result
function simulateTask(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task se hoan thanh sau ${duration} ms`);
        }, duration);
    });
}
function runTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield simulateTask(2000);
        console.log(result);
    });
}
runTask();
