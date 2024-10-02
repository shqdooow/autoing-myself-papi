"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const Workers_1 = require("../Workers");
class Poll extends Workers_1.Workers {
    async doPoll(page) {
        this.bot.log('POLL', 'Trying to complete poll');
        try {
            const buttonId = `#btoption${Math.floor(this.bot.utils.randomNumber(0, 1))}`;
            await page.waitForSelector(buttonId, { state: 'visible', timeout: 10000 }).catch(() => { }); // We're gonna click regardless or not
            await this.bot.utils.wait(2000);
            await page.click(buttonId);
            await this.bot.utils.wait(4000);
            await page.close();
            this.bot.log('POLL', 'Completed the poll successfully');
        }
        catch (error) {
            await page.close();
            this.bot.log('POLL', 'An error occurred:' + error, 'error');
        }
    }
}
exports.Poll = Poll;
//# sourceMappingURL=Poll.js.map