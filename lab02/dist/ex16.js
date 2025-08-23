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
//16. Call multiple async functions in parallel using Promise.all().
function task1() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(() => resolve("task1"), 1000);
        });
    });
}
function task2() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(() => resolve("task2"), 1000);
        });
    });
}
function task3() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(() => resolve("task3"), 1000);
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.time("demo");
        // chạy cùng lúc 3 hàm async
        const [t1, t2, t3] = yield Promise.all([
            task1(),
            task2(),
            task3()
        ]);
        console.log(t1);
        console.log(t2);
        console.log(t3);
        console.timeEnd("demo");
    });
}
run();
