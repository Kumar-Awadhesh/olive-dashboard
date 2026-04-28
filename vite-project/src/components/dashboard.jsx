import { useContext, useState, useEffect, use } from "react";
import { DashboardContext } from "../contexts/dashboardContext";



export const Dashboard = () => {

    const { navbarBtn, setNavbarbtn, downloadBtn, setDownloadBtn } = useContext(DashboardContext);
    const [image, setImage] = useState(0);


    const images = [
        "/images/product.webp",
        "/images/product.webp",
        "/images/product.webp",
        "/images/product.webp",
        "/images/product.webp"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval);
    }, [])


    return (
        <>
            <main className="main-Container">
                <nav className="navbar">
                    <div className="logo-container"><img src="/images/olive-logo.png" alt="olive-logo" /></div>
                    <div className="nav-btn-container">
                        <p>Solutions v</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Blog v</p>
                        <p>Restaurants</p>
                        <p>Food v</p>
                    </div>
                    <div className="signin-btn-container">
                        <p>Sign in</p>
                        <p>Get Olive -</p>
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
                            <div className="product-img-container"
                                style={{ transform: `translateX(-${image * 100}px)` }}
                            >
                                {
                                    images.map((img, index) => (
                                        <img className={index-2 === image ? "main-product-img" : "product-img" } key={index} src={img} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}