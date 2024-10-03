import React from "react";

type productModalRewardsProps = {
    rewardName: string;
    rewardDetails: string;
    pledgeAmount: number;
    stockRemaining?: number;
    selectedRewardLevel: number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ProductModalRewards({
                                                rewardName,
                                                rewardDetails,
                                                pledgeAmount,
                                                stockRemaining,
                                                selectedRewardLevel,
                                                onChange
                                            }: productModalRewardsProps) {


    return (
        <li>
            <label className={`product-modal__reward ${stockRemaining === 0 ? "product-modal__reward--disabled" : ""}`}
                   htmlFor={`rewardCost${pledgeAmount}`}
            >
                <div className="product-modal__reward-title">
                    <input
                        type="radio"
                        name="rewardLevel"
                        id={`rewardCost${pledgeAmount}`}
                        value={pledgeAmount}
                        checked={selectedRewardLevel === pledgeAmount}
                        onChange={onChange}
                        disabled={stockRemaining === 0}
                    />

                    <div className="product-modal__reward-title-text">
                        <h3 className="product-modal__product-name">{rewardName}</h3>

                        {pledgeAmount ? (
                            <p className="product-modal__pledge">Pledge ${pledgeAmount} or more</p>
                        ) : (
                            <></>
                        )
                        }
                    </div>
                </div>

                <p className="product-modal__reward-details">{rewardDetails}</p>

                <div className="product-modal__reward-select">
                    {stockRemaining ? (
                        <p className="product-modal__reward-stock">
                            <span className="product-modal__reward-quantity">{stockRemaining}</span> left
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
            </label>
        </li>
    );
}