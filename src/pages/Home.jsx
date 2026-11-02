
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Bike, Laptop, Package } from "lucide-react";
import "./Home.css";

function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const products = [
        {
            id: 1,
            name: "Engineering Mathematics Book",
            category: "Books",
            price: 250,
            condition: "Good",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
        },
        {
            id: 2,
            name: "Mountain Bicycle",
            category: "Cycles",
            price: 3500,
            condition: "Used",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500"
        },
        {
            id: 3,
            name: "HP Laptop",
            category: "Gadgets",
            price: 22000,
            condition: "Excellent",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        },
        {
            id: 4,
            name: "Programming Books",
            category: "Books",
            price: 400,
            condition: "Good",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
        },
        {
            id: 5,
            name: "Wireless Headphones",
            category: "Gadgets",
            price: 1200,
            condition: "Excellent",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            id: 6,
            name: "College Bicycle",
            category: "Cycles",
            price: 2800,
            condition: "Good",
            image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500"
        }
    ];

    const categories = [
        { name: "All", icon: Package },
        { name: "Books", icon: BookOpen },
        { name: "Cycles", icon: Bike },
        { name: "Gadgets", icon: Laptop }
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">WELCOME TO CAMPUSKART</span>

                    <h1>
                        Buy & Sell Within
                        <span> Your Campus</span>
                    </h1>

                    <p>
                        Give your unused items a second life.
                        Buy books, cycles and gadgets at affordable prices.
                    </p>

                    {/* Search Bar */}
                    <div className="search-box">
                        <Search size={22} />

                        <input
                            type="text"
                            placeholder="Search books, cycles, gadgets..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button
                            onClick={() =>
                                document.getElementById("products").scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <h2>Browse Categories</h2>
                <p>Find exactly what you are looking for.</p>

                <div className="categories">
                    {categories.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.name}
                                className={
                                    category === item.name
                                        ? "category-card active"
                                        : "category-card"
                                }
                                onClick={() => setCategory(item.name)}
                            >
                                <Icon size={28} />
                                <span>{item.name}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Products */}
            <section className="products-section" id="products">

                <div className="products-heading">
                    <div>
                        <h2>Recently Added Items</h2>
                        <p>Explore products listed by students.</p>
                    </div>

                    <span>{filteredProducts.length} Products</span>
                </div>

                <div className="products-grid">

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="product-card" key={product.id}>

                                <div className="product-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    <span>{product.condition}</span>
                                </div>

                                <div className="product-info">
                                    <p className="product-category">
                                        {product.category}
                                    </p>

                                    <h3>{product.name}</h3>

                                    <div className="product-bottom">
                                        <h3>₹{product.price.toLocaleString("en-IN")}</h3>
                                        <button
                                            onClick={() => navigate(`/product/${product.id}`)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="no-products">
                            No products found. Try another search!
                        </p>
                    )}

                </div>
            </section>

        </div>
    );
}

export default Home;
