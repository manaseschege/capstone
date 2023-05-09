import React from 'react';
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <img id="img" src="https://images01.nicepagecdn.com/page/67/56/website-template-preview-67567.jpg" />

            <div className="hero-text">
                <h2>Welcome to Restaurant Name</h2>
                <Link to="BookTable">
                    <button>Book a Table</button>

                </Link>
            </div>

            <div className="about-section">
                <h2>About Us</h2>
                <p>Open day by day for lunch and dinner,’ Company Name’ offers a choice of naturally
                    arranged things utilizing just the best fixings accessible. Top picks incorporate Certified Angus Beef®,
                    crisp fish, rotisserie chicken, and infant back pork ribs.</p>
            </div>
        </>


    );
}

export default LandingPage;
