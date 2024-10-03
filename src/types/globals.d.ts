declare global {
    type productReward = {
        rewardName: string;
        rewardDetails: string;
        pledgeAmount: number;
        stockRemaining: number;
    }
    
    type backings = {
        dollarBacked: number;
        dollarRequired: number;
        totalBackers: number;
        daysRemaining: number;
    }

    type product = {
        productName: string;
        manufacture: string;
        manufactureLogo: string;
        productDetails: string;
        backings: backings;
        projectDetails: string;
        projectRewards: productReward[];
    }
}

export {};