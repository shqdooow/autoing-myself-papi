import { Page } from 'playwright';
import { MicrosoftRewardsBot } from '../index';
import { DashboardData } from '../interface/DashboardData';
export default class Activities {
    private bot;
    constructor(bot: MicrosoftRewardsBot);
    doSearch: (page: Page, data: DashboardData) => Promise<void>;
    doABC: (page: Page) => Promise<void>;
    doPoll: (page: Page) => Promise<void>;
    doThisOrThat: (page: Page) => Promise<void>;
    doQuiz: (page: Page) => Promise<void>;
    doUrlReward: (page: Page) => Promise<void>;
    doReadToEarn: (accessToken: string, data: DashboardData) => Promise<void>;
    doDailyCheckIn: (accessToken: string, data: DashboardData) => Promise<void>;
}
//# sourceMappingURL=Activities.d.ts.map