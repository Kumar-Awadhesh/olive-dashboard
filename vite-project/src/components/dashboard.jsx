import { useContext } from "react";
import { DashboardContext } from "../contexts/dashboardContext";



export const Dashboard = () => {

    const {navbarBtn, setNavbarbtn, downloadBtn, setDownloadBtn} = useContext(DashboardContext);



    return(
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
            </main>
        </>
    )
}