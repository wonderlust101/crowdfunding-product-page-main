import ProductReward from "./ProductReward";
import React, {MouseEventHandler} from "react";

type productAbout = {
    projectDetails: string;
    productRewards: productReward[];
    onClick: MouseEventHandler;
}

export default function ProductAbout({projectDetails, productRewards, onClick}: productAbout) {
    return (
        <section className="product__about">
            <div className="product__about-text">
                <h2>About this project</h2>
                <p className="product__about-body-text">{projectDetails}</p>
            </div>

            <ul className="product__rewards">
                {productRewards.map((reward: productReward) => (
                    <ProductReward
                        key={reward.rewardName}
                        rewardName={reward.rewardName}
                        rewardDetails={reward.rewardDetails}
                        pledgeAmount={reward.pledgeAmount}
                        stockRemaining={reward.stockRemaining}
                        onClick={onClick}
                    />
                ))}
            </ul>
        </section>
    );
}