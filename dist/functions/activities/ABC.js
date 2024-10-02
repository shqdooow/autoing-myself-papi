"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABC = void 0;
const Workers_1 = require("../Workers");
class ABC extends Workers_1.Workers {
    async doABC(page) {
        this.bot.log('ABC', 'Trying to complete poll');
        try {
            let $ = await this.bot.browser.func.refreshCheerio(page);
            // Don't loop more than 15 in case unable to solve, would lock otherwise
            const maxIterations = 15;
            let i;
            for (i = 0; i < maxIterations && !$('span.rw_icon').length; i++) {
                await page.waitForSelector('.wk_OptionClickClass', { state: 'visible', timeout: 10000 });
                const answers = $('.wk_OptionClickClass');
                const answer = answers[this.bot.utils.randomNumber(0, 2)]?.attribs['id'];
                await page.waitForSelector(`#${answer}`, { state: 'visible', timeout: 10000 });
                await this.bot.utils.wait(2000);
                await page.click(`#${answer}`); // Click answer
                await this.bot.utils.wait(4000);
                await page.waitForSelector('div.wk_button', { state: 'visible', timeout: 10000 });
                await page.click('div.wk_button'); // Click next question button
                page = await this.bot.browser.utils.getLatestTab(page);
                $ = await this.bot.browser.func.refreshCheerio(page);
                await this.bot.utils.wait(1000);
            }
            await this.bot.utils.wait(4000);
            await page.close();
            if (i === maxIterations) {
                this.bot.log('ABC', 'Failed to solve quiz, exceeded max iterations of 15', 'warn');
            }
            else {
                this.bot.log('ABC', 'Completed the ABC successfully');
            }
        }
        catch (error) {
            await page.close();
            this.bot.log('ABC', 'An error occurred:' + error, 'error');
        }
    }
}
exports.ABC = ABC;
//# sourceMappingURL=ABC.js.map