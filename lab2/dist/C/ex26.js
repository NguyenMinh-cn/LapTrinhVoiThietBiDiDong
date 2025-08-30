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
// 26. Use async/await with setTimeout to simulate a 5-second wait
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function run26() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Bắt đầu');
        yield sleep(5000);
        console.log('Đã chờ 5 giây xong!');
    });
}
run26();
