import React, {useEffect, useState} from "react";

import ProductDetails from "./ProductDetails";
import ProductBackings from "./ProductBackings";
import ProductAbout from "./ProductAbout";
import ProductModal from "./ProductModal";

import "./Product.scss";

type productProps = {
    product: product;
}

export default function Product({product}: productProps) {
    const [openModal, setOpenModal] = useState(false);
    const [openModalValue, setOpenModalValue] = useState(0);
    
    function handleOpenModel() {
        setOpenModal(!openModal);
    }
    
    function handleModalValue(event: React.MouseEvent<HTMLButtonElement>){
        setOpenModalValue(parseInt(event.currentTarget.value))
        handleOpenModel()
    }

    useEffect(() => {
        if (openModal) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [openModal]);
    
    return (
        <section className="product">
            {openModal &&
                <ProductModal
                    productName={product.productName}
                    productRewards={product.projectRewards}
                    onClick={handleOpenModel}
                    value={openModalValue}
                />
            }

            <ProductDetails
                productName={product.productName}
                productDetails={product.productDetails}
                logo={product.manufactureLogo}
                onClick={handleModalValue}
                value={openModalValue}
            />

            <ProductBackings
                amountBacked={product.backings.dollarBacked}
                amountRequired={product.backings.dollarRequired}
                totalBackers={product.backings.totalBackers}
                daysRemaining={product.backings.daysRemaining}
            />

            <ProductAbout
                projectDetails={product.projectDetails}
                productRewards={product.projectRewards}
                onClick={handleModalValue}
            />
        </section>
    );
}