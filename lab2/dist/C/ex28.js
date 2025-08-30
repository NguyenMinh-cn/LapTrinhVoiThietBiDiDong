'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.batchProcess = batchProcess;
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
const ex15_1 = require('../B/ex15');
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([
            (0, ex15_1.task1)(),
            (0, ex15_1.task2)(),
            (0, ex15_1.task3)(),
            (0, ex15_1.task1)(),
            (0, ex15_1.task2)(),
        ]);
        console.log('Xong 5 task', results);
    });
}
batchProcess();
