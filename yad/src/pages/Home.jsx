import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="badge">100% Organic & Fresh</span>
                        <h1>Pure & Natural <br /><span>Milk for Your Family</span></h1>
                        <p>Fresh from the farm to your doorstep. Experience the taste of purity with Yadav Milk.</p>
                        <div className="hero-btns">
                            <a href="#products" className="btn btn-primary">Order Now</a>
                            <a href="#about" className="btn btn-outline">Learn More</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* Placeholder for hero image - using a colored div for now if no image */}
                        <div className="image-placeholder">
                            <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fresh Milk" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="section products">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Premium Products</h2>
                        <p>Choose from our range of fresh dairy products</p>
                    </div>

                    <div className="product-grid">
                        {/* Product 1 */}
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Fresh Milk" />
                            </div>
                            <div className="product-info">
                                <h3>Fresh Milk</h3>
                                <p className="price">₹60.00 / Liter</p>
                                <button className="btn btn-sm">Add to Cart</button>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1626139576127-45229600856e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Pure Ghee" />
                            </div>
                            <div className="product-info">
                                <h3>Pure Ghee</h3>
                                <p className="price">₹600.00 / Kg</p>
                                <button className="btn btn-sm">Add to Cart</button>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card">
                            <div className="product-img">
                                <img src="https://images.unsplash.com/photo-1571212515416-f781d015f218?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Fresh Curd" />
                            </div>
                            <div className="product-info">
                                <h3>Fresh Curd</h3>
                                <p className="price">₹80.00 / Kg</p>
                                <button className="btn btn-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <div className="container about-container">
                    <div className="about-content">
                        <h2>Why Choose Yadav Milk?</h2>
                        <p>We are committed to providing the highest quality dairy products. Our milk is sourced directly from healthy, well-cared-for buffaloes and cows.</p>
                        <ul className="features-list">
                            <li><Star size={18} fill="#f1c40f" stroke="none" /> 100% Pure & Preservative Free</li>
                            <li><Star size={18} fill="#f1c40f" stroke="none" /> Hygienic Milking Process</li>
                            <li><Star size={18} fill="#f1c40f" stroke="none" /> Doorstep Delivery</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dairy Farm" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
