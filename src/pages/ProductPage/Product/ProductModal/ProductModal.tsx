import ProductModalRewards from "./ProductModalRewards";
import useDocumentDimensions from "../../../../hooks/useDocumentDimensions";

import closeModalIcon from "/images/icon-close-modal.svg";

import "./ProductModal.scss";
import React, {useEffect, useState} from "react";

type productModalProps = {
    productName: string;
    productRewards: productReward[];
    onClick: React.MouseEventHandler;
    value: number;
}

export default function ProductModal({productName, productRewards, onClick, value}: productModalProps) {
    const [selectedRewardLevel, setSelectedRewardLevel] = useState(value);
    const {height} = useDocumentDimensions()

    function onRewardLevelChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedRewardLevel(parseInt(event.target.value));
    }

    useEffect(() => {
        setSelectedRewardLevel(value);
    }, [value]);
    
    return (
        <section className="product-modal grid-bleed" style={{height: height}}>
            <div className="product-modal__container">
                <header className="product-modal__header">
                    <div className="product-modal__text">
                        <h2 className="product-modal__title">Back this project</h2>
                        <p>Want to support us in bringing {productName} out in the world? </p>
                    </div>

                    <img className='product-modal__close-icon' onClick={onClick} src={closeModalIcon} alt=""/>
                </header>

                <ul className="product-modal__rewards">
                    <ProductModalRewards
                        rewardName={"Pledge with no reward"}
                        rewardDetails={"Choose to support us without a reward if you simply believe in our project. " +
                            "As a backer, you will be signed up to receive product updates via email."}
                        pledgeAmount={0}
                        selectedRewardLevel={selectedRewardLevel}
                        onChange={onRewardLevelChange}
                    />

                    {productRewards.map((reward: productReward) => (
                        <ProductModalRewards
                            key={reward.rewardName}
                            rewardName={reward.rewardName}
                            rewardDetails={reward.rewardDetails}
                            pledgeAmount={reward.pledgeAmount}
                            stockRemaining={reward.stockRemaining}
                            selectedRewardLevel={selectedRewardLevel}
                            onChange={onRewardLevelChange}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}