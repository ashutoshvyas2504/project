
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImagePlus, ArrowLeft } from "lucide-react";
import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Books",
    condition: "Good",
    description: "",
    image: ""
  });

  const [preview, setPreview] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image upload
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size must be less than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
      setFormData((prev) => ({
        ...prev,
        image: reader.result
      }));
    };

    reader.readAsDataURL(file);
  };

  // Submit product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload a product image.");
      return;
    }

    const newProduct = {
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      seller: "Campus Student",
      location: "College Campus",
      phone: "",
      createdAt: new Date().toISOString()
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("campuskartProducts") || "[]"
    );

    localStorage.setItem(
      "campuskartProducts",
      JSON.stringify([...existingProducts, newProduct])
    );

    alert("Product listed successfully!");

    navigate("/");
  };

  return (
    <div className="add-product-container">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} />
        Back to Home
      </button>

      <div className="form-wrapper">

        <div className="form-heading">
          <h1>Sell Your Item</h1>
          <p>Give your unused products a second life.</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Product Name */}
          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={80}
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label>Price (₹)</label>

            <input
              type="number"
              name="price"
              placeholder="Enter selling price"
              value={formData.price}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Books">Books</option>
              <option value="Cycles">Cycles</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Condition */}
          <div className="form-group">
            <label>Product Condition</label>

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Used">Used</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Describe your product..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
              maxLength={1000}
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label>Product Image</label>

            <label className="upload-box">
              {preview ? (
                <img
                  src={preview}
                  alt="Product preview"
                  className="image-preview"
                />
              ) : (
                <>
                  <ImagePlus size={35} />
                  <span>Click here to upload an image</span>
                  <small>PNG, JPG or WEBP (Maximum 2 MB)</small>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />
            </label>
          </div>

          <button type="submit" className="submit-product-btn">
            Publish Listing
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddProduct;
