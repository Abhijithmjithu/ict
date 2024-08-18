import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div>
            <div className="firstoffer">
                <h1 className="ftext">New Arrivals <br /> Here</h1>
                <br />
                <h1><button className="buttonStyle">Let's Go</button></h1>
            </div>
            
            <div className="ltext-container">
                <Link className="ltext">Latest In Men's Collection</Link>
                <Link to="/mens-collection" className="exploreMoreLink">Explore More</Link>
            </div>

            <div className="latest">
                <Link to="/product/1"><img className="imageStyle" src="https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg" alt="Image 1" /></Link>
                <Link to="/product/2"><img className="imageStyle" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg" alt="Image 2" /></Link>
                <Link to="/product/3"><img className="imageStyle" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-model-sexy-stylish-man-dressed-red-checkered-shirt-jeans-fashion-hipster-male-posing-near-grey-studio-isolated_158538-25139.jpg" alt="Image 3" /></Link>
                <Link to="/product/4"><img className="imageStyle" src="https://img.freepik.com/free-photo/isolated-stylish-serious-young-man-with-thick-beard-wavy-hair-with-confident-look-holding-hand-his-waist-people-style-fashion-men-s-wear-concept_343059-1876.jpg" alt="Image 4" /></Link>
            </div>

            <div className="ltext-container">
                <Link className="ltext">Latest In Women's Collection</Link>
                <Link to="/womens-collection" className="exploreMoreLink">Explore More</Link>
            </div>

            <div className="latest">
                <Link to="/product/5"><img className="imageStyle" src="https://img.freepik.com/free-photo/young-smart-woman-cashmere-sweater-points-place-text-isolated-charming-girl-cap-poses-beige-background_197531-29364.jpg" alt="Image 1" /></Link>
                <Link to="/product/6"><img className="imageStyle" src="https://img.freepik.com/premium-photo/young-beautiful-girl-having-photoshoot-wearing-extra-large-clothes_1218867-32352.jpg" alt="Image 2" /></Link>
                <Link to="/product/7"><img className="imageStyle" src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-professional-makeup_23-2150165281.jpg" alt="Image 3" /></Link>
                <Link to="/product/8"><img className="imageStyle" src="https://img.freepik.com/free-photo/young-woman-beautiful-dress-hat_1303-17517.jpg" alt="Image 4" /></Link>
            </div>
            <div className="buttonWrapper">
                <Link to="/products">
                    <button className="buttonStyle">All Products</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
