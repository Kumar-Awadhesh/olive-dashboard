import { useContext, useState, useEffect, use } from "react";
import { DashboardContext } from "../contexts/dashboardContext";



export const Dashboard = () => {

    const { showProduct, setShowProduct } = useContext(DashboardContext);



    return (
        <>
            <main className="main-container">
                <nav className="navbar">
                    <div className="logo-container"><img src="/images/olive-logo.png" alt="olive-logo" /></div>
                    <div className="nav-btn-container">
                        <p>Solutions </p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Blog </p>
                        <p>Restaurants</p>
                        <p>Food </p>
                    </div>
                    <div className="signin-btn-container">
                        <p>Sign in</p>
                        <p>Get Olive</p>
                    </div>
                </nav>
                <div className="user-card">
                    <img src="/images/olive-user.webp" alt="olive-user" />
                    <img src="/images/olive-user.webp" alt="olive-user" />
                    <img src="/images/olive-user.webp" alt="olive-user" />
                    <img src="/images/olive-user.webp" alt="olive-user" />
                    <div>3k+</div>
                    <p>Trusted by thousands of healthy families</p>
                </div>
                <div className="shop-tag-container">
                    <h4>The Safest Way to</h4>
                    <h4>Shop for Groceries</h4>
                </div>
                <p className="olive-para">
                    Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
                    from Your Family's Diet and Get Expert-Backed Food Insights
                </p>
                <div className="downloadBtn-container">
                    <button>Download for iOS</button>
                    <button>Join the Olive Community</button>
                </div>
                <div className="mobile-grocery-container">
                    <div className="mobile-container">
                        <div className="camera-container">
                            <div></div>
                        </div>
                        <div className="grocery-container">

                            <div>
                                <div className="product-img-container"><img src="/images/product.webp" alt="product-img" /></div>
                                <div className="product-info-container">
                                    <img src="/images/product.webp" alt="product-img" />
                                    <h4>Larabar ChocolateChip Cookie Fruit & Nut</h4>
                                </div>
                                <div className="product-para-container">
                                    <p className="rating">
                                        92/100 <br />
                                        Excellent
                                    </p>
                                    <p>Oliver Says:</p>
                                    <p>
                                        "This product, which includes ingredients like cashews and dates,
                                        scored well mainly because it doesn't contain processed sugars,
                                        harmful additives, or seed oils, making it a healthier choice for your family,
                                        especially as an occasional treat. The slight deduction for processing indicates
                                        it's not entirely raw, but it's still a good option that aligns with your goals
                                        of avoiding overly processed foods."

                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="product-img-container"><img src="/images/product.webp" alt="product-img" /></div>
                                <div className="product-info-container">
                                    <img src="/images/product.webp" alt="product-img" />
                                    <h4>Larabar ChocolateChip Cookie Fruit & Nut</h4>
                                </div>
                                <div className="product-para-container">
                                    <p className="rating">
                                        92/100 <br />
                                        Excellent
                                    </p>
                                    <p>Oliver Says:</p>
                                    <p>
                                        "This product, which includes ingredients like cashews and dates,
                                        scored well mainly because it doesn't contain processed sugars,
                                        harmful additives, or seed oils, making it a healthier choice for your family,
                                        especially as an occasional treat. The slight deduction for processing indicates
                                        it's not entirely raw, but it's still a good option that aligns with your goals
                                        of avoiding overly processed foods."

                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="product-img-container"><img className="middle-img" src="/images/product.webp" alt="product-img" /></div>
                                <div className={showProduct ? "middle-info-container" : "product-info-container"}>
                                    <img src="/images/product.webp" alt="product-img" />
                                    <h4>Larabar ChocolateChip Cookie Fruit & Nut</h4>
                                </div>
                                <p className="rating">
                                    92/100 <br />
                                    Excellent
                                </p>
                                <div className={showProduct ? "highlight" : "product-img-container"}>
                                    <p>Oliver Says:</p>
                                    <p>
                                        "This product, which includes ingredients like cashews and dates,
                                        scored well mainly because it doesn't contain processed sugars,
                                        harmful additives, or seed oils, making it a healthier choice for your family,
                                        especially as an occasional treat. The slight deduction for processing indicates
                                        it's not entirely raw, but it's still a good option that aligns with your goals
                                        of avoiding overly processed foods."

                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="product-img-container"><img src="/images/product.webp" alt="product-img" /></div>
                                <div className="product-info-container">
                                    <img src="/images/product.webp" alt="product-img" />
                                    <h4>Larabar ChocolateChip Cookie Fruit & Nut</h4>
                                </div>
                                <div className="product-para-container">
                                    <p className="rating">
                                        92/100 <br />
                                        Excellent
                                    </p>
                                    <p>Oliver Says:</p>
                                    <p>
                                        "This product, which includes ingredients like cashews and dates,
                                        scored well mainly because it doesn't contain processed sugars,
                                        harmful additives, or seed oils, making it a healthier choice for your family,
                                        especially as an occasional treat. The slight deduction for processing indicates
                                        it's not entirely raw, but it's still a good option that aligns with your goals
                                        of avoiding overly processed foods."

                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="product-img-container"><img src="/images/product.webp" alt="product-img" /></div>
                                <div className="product-info-container">
                                    <img src="/images/product.webp" alt="product-img" />
                                    <h4>Larabar ChocolateChip Cookie Fruit & Nut</h4>
                                </div>
                                <div className="product-para-container">
                                    <p className="rating">
                                        92/100 <br />
                                        Excellent
                                    </p>
                                    <p>Oliver Says:</p>
                                    <p>
                                        "This product, which includes ingredients like cashews and dates,
                                        scored well mainly because it doesn't contain processed sugars,
                                        harmful additives, or seed oils, making it a healthier choice for your family,
                                        especially as an occasional treat. The slight deduction for processing indicates
                                        it's not entirely raw, but it's still a good option that aligns with your goals
                                        of avoiding overly processed foods."

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}