import Button from "../../../components/Button";
import BookmarkButton from "./BookmarkButton/BookmarkButton";

import bookmarkIcon from "/images/icon-bookmark.svg";
import React from "react";

type productDetailsProps = {
    productName: string;
    productDetails: string;
    logo: string;
    onClick: React.MouseEventHandler;
    value: number;
}

export default function ProductDetails({productName, productDetails, logo, onClick}: productDetailsProps) {

    return (
        <section className="product__details">
            <img className="product__product-logo" src={`/images/${logo}`} alt=""/>

            <div className="product__details-text">
                <h1>{productName}</h1>
                <p>{productDetails}</p>
            </div>

            <div className="product__details-buttons">
                <Button variant="button--full-width button--cyan" onClick={onClick} value={0}>Back this project</Button>
                <BookmarkButton variant="">
                    <img src={bookmarkIcon} alt="" role="presentation"/>
                    <span>Bookmark</span>
                </BookmarkButton>
            </div>
        </section>
    );
}