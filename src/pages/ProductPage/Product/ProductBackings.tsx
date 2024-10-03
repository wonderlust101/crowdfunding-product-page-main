type productBackingsProps = {
    amountBacked: number;
    amountRequired: number;
    totalBackers: number;
    daysRemaining: number;
}

export default function ProductBackings({
                                            amountBacked,
                                            amountRequired,
                                            totalBackers,
                                            daysRemaining
                                        }: productBackingsProps) {
    return (
        <section className="product__backings">
            <h2 className="sr-only">Some information on the backings, the project has currently have:</h2>
            
            <p className="product__backings-stat"><span className="product__backings-num">${amountBacked}</span> of
                ${amountRequired} backed</p>
            <hr className="product__backings-divider"/>
            <p className="product__backings-stat"><span className="product__backings-num">{totalBackers}</span> total
                backers
            </p>
            <hr className="product__backings-divider"/>
            <p className="product__backings-stat"><span className="product__backings-num">{daysRemaining}</span> days
                left</p>
        </section>
    );
}