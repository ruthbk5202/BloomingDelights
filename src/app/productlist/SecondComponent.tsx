"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./second_component.css";
import AddToCart from "../components/reuseable/AddToCart";

interface Plant {
  id: number;
  common_name: string;
  default_image?: {
    original_url: string;
    license_name?: string;
  };
}

const Secondcomponent = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);

  async function fetchPlants() {
    try {
      const response = await fetch(
        `https://perenual.com/api/v2/species-list?key=sk-H4Cx681898c5673b910245`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && Array.isArray(result.data)) {
        setPlants(result.data);
        console.log(result.data);
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <div>Loading plants...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="second-component">
      <div className="grid-container">
        {plants.length > 0 ? (
          plants.slice(0, 6).map((plants) => (
            <div key={plants.id} className="grid-item">
              <div className="img-btn-group">
                <div className="img-btn">
                  <button className="img-btn-sale">sale!</button>
                </div>
                <div>
                  <a>
                    <MdOutlineShoppingCart />
                  </a>
                </div>
              </div>
              {plants.default_image ? (
                <>
                  <img
                    src={plants.default_image.original_url}
                    alt={plants.default_image.license_name}
                    onClick={() => router.push(`/product_details/${plants.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="bouquet-description">
                  
                    <p>{plants.common_name}</p>
                   
                    <p>Nrs:500</p>
                   <AddToCart>add to cart</AddToCart>
                  </div>
                </>
              ) : (
                <p>No Image Available</p>
              )}
            </div>
          ))
        ) : (
          <p>No plants found</p>
        )}
      </div>
    </div>
  );
};

export default Secondcomponent;