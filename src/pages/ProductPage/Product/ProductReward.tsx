import Button from "../../../components/Button";
import {MouseEventHandler} from "react";

type productRewardProps = {
    rewardName: string;
    rewardDetails: string;
    pledgeAmount: number;
    stockRemaining: number;
    onClick: MouseEventHandler;
}

export default function ProductReward({
                                          rewardName,
                                          rewardDetails,
                                          pledgeAmount,
                                          stockRemaining,
                                          onClick
                                      }: productRewardProps) {
    return (
        <li
            style={{opacity: (stockRemaining === 0 ? "0.5" : "1")}}
            className="product__reward"
        >
            <div className="product__reward-title">
                <h3>{rewardName}</h3>
                <p className="product__pledge">Pledge ${pledgeAmount} or more</p>
            </div>

            <p>{rewardDetails}</p>

            <div className="product__reward-select">
                <p className="product__reward-stock">
                    <span className="product__reward-quantity">{stockRemaining}</span> left
                </p>

                {stockRemaining === 0 ? (
                    <Button variant="button--cyan" disabled={true}>Out of stock</Button>
                ) : (
                    <Button variant="button--cyan" onClick={onClick} value={pledgeAmount}>Select Reward</Button>)
                }
            </div>
        </li>
    );
}