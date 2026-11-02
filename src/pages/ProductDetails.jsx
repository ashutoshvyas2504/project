
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, MapPin, User } from "lucide-react";
import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  // Temporary product data
  const products = [
    {
      id: 1,
      name: "Engineering Mathematics Book",
      category: "Books",
      price: 250,
      condition: "Good",
      description: "Engineering Mathematics book in good condition. Useful for first-year engineering students.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700",
      seller: "Rahul Sharma",
      location: "College Campus",
      phone: "919876543210"
    },
    {
      id: 2,
      name: "Mountain Bicycle",
      category: "Cycles",
      price: 3500,
      condition: "Used",
      description: "Well-maintained mountain bicycle. Suitable for daily college travel.",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700",
      seller: "Amit Verma",
      location: "College Campus",
      phone: "919876543210"
    },
    {
      id: 3,
      name: "HP Laptop",
      category: "Gadgets",
      price: 22000,
      condition: "Excellent",
      description: "HP laptop in excellent working condition. Suitable for programming and college work.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
      seller: "Priya Patel",
      location: "College Campus",
      phone: "919876543210"
    },
    {
      id: 4,
      name: "Programming Books",
      category: "Books",
      price: 400,
      condition: "Good",
      description: "Collection of programming books for students.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700",
      seller: "Rohit Singh",
      location: "College Campus",
      phone: "919876543210"
    },
    {
      id: 5,
      name: "Wireless Headphones",
      category: "Gadgets",
      price: 1200,
      condition: "Excellent",
      description: "Wireless headphones with good sound quality.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
      seller: "Karan",
      location: "College Campus",
      phone: "919876543210"
    },
    {
      id: 6,
      name: "College Bicycle",
      category: "Cycles",
      price: 2800,
      condition: "Good",
      description: "Affordable bicycle for everyday college use.",
      image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=700",
      seller: "Neha",
      location: "College Campus",
      phone: "919876543210"
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="details-container">

      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Back to Marketplace
      </Link>

      <div className="details-content">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <h2 className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p className="condition">
            Condition: <strong>{product.condition}</strong>
          </p>

          <div className="description">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="seller-card">
            <h3>Seller Information</h3>

            <p>
              <User size={18} />
              {product.seller}
            </p>

            <p>
              <MapPin size={18} />
              {product.location}
            </p>
          </div>

          <a
            href={`https://wa.me/${product.phone}?text=${encodeURIComponent(
              `Hello ${product.seller}, I am interested in your ${product.name} listed on CampusKart. Is it available?`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <MessageCircle size={20} />
            Contact Seller on WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
