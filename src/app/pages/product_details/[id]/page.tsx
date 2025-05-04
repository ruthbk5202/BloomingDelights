"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  common_name: string;
  scientific_name: string;
  cycle: string;
  watering: string;
  default_image?: { original_url: string };
}

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No product ID found in URL");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://perenual.com/api/v2/species/details/${id}?key=sk-NLDI67c1e204dd7178890`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <h1>{product.common_name}</h1>
      <p>{product.scientific_name}</p>
      {product.default_image?.original_url ? (
        <img
          src={product.default_image.original_url}
          alt={product.common_name}
        />
      ) : (
        <p>No image available</p>
      )}
      <p>Watering: {product.watering}</p>
      <p>Cycle: {product.cycle}</p>
    </div>
  );
}
