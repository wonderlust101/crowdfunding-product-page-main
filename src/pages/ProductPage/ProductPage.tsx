import Header from "../../components/Header";
import Product from "./Product";
import productDataJson from "/src/data/productData.json";

import "./ProductPage.scss";

const productData: product[] = productDataJson;

export default function ProductPage() {
    return (
        <div className="product-page">
            <Header/>

            <main className="grid-bleed">
                <Product product={productData[0]}/>
            </main>
        </div>
    );
}