"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./product.css";

import QuantityButton from "@/app/components/reuseable/Quantity";
import { FaRegHeart } from "react-icons/fa";

import BuyNowButton from "@/app/components/reuseable/BuyNowButton";

interface Product {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name?: string[];
  family?: string | null;
  cycle?: string;
  watering?: string;
  sunlight?: string[];
  default_image?: {
    original_url: string;
    license_name?: string;
  };
}

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No product ID found in URL");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        console.log(`Fetching: https://perenual.com/api/species/details/${id}`);
        const response = await fetch(
          `https://perenual.com/api/species/details/${id}?key=sk-H4Cx681898c5673b910245`
        );
        
        console.log("Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch (Status: ${response.status})`);
        }

        const data = await response.json();
        console.log("API Response:", data);
        setProduct(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading plant details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
     <div className="add-to-cart-product-details">
      <div className="product-details-container"> 
        {product.default_image?.original_url ? (
          <div className="image-container">
            <img
              src={product.default_image.original_url}
              alt={product.common_name}
              className="plant-image"
              width={400}
              height={400}
            />
          </div>
        ) : (
          <div className="no-image">No image available</div>
        )}

        <div className="details-container">
          <FaRegHeart className="faregheart" />
          <h1>{product.common_name}</h1>
          
          <div className="scientific-name">
            <strong>Scientific Name:</strong> {product.scientific_name?.[0] || "Not available"}
          </div>
          
          {product.other_name && product.other_name.length > 0 && (
            <div className="other-names">
              <strong>Also known as:</strong> {product.other_name.join(", ")}
            </div>
          )}
          
          {product.family && (
            <div className="family">
              <strong>Family:</strong> {product.family}
            </div>
          )}

          <div className="care-info">
            {product.watering && (
              <p><strong>Watering:</strong> {product.watering}</p>
            )}
            
            {product.cycle && (
              <p><strong>Life Cycle:</strong> {product.cycle}</p>
            )}
            
            {product.sunlight && product.sunlight.length > 0 && (
              <p><strong>Sunlight:</strong> {product.sunlight.join(", ")}</p>
            )}
          </div>
          <QuantityButton />
          <div className="action-buttons">
           <BuyNowButton />
        
          </div>
        </div>
      </div>
    </div>
  );
}