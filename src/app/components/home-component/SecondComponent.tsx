"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./second_component.css";

const Secondcomponent = () => {
  const [speciesListResponse, setData] = useState<any[]>([]);
  const [rating, setRating] = useState<number>(0);
  async function fetchData() {
    try {
      const r = await fetch(
        "https://perenual.com/api/v2/species-list?key=sk-NLDI67c1e204dd7178890"
      );
      const s = await r.json();
      console.log("API Response:", s);
      if (s.data) {
        setData(s.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated speciesListResponse:", speciesListResponse);
  }, [speciesListResponse]);

  return (
    <div className="second-component">
      <div className="grid-container">
        {speciesListResponse.length > 0 ? (
          speciesListResponse.slice(0, 6).map((e, i) => (
            <div key={e.id} className="grid-item">
             
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
              {e.default_image ? (
                <>
                  <img
                    src={e.default_image.original_url}
                    alt={e.default_image.license_name}
                  />
                  <div className="bouquet-description">
                    <p className="">Bouquet</p>
                    <p>{e.common_name}</p>
                    <div style={{ display: "flex" }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={30}
                          color={star <= rating ? "#ffd700" : "#e4e5e9"}
                          onClick={() => setRating(star)}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </div>
                    <p>$500</p>
                  </div>
                </>
              ) : (
                <p>No Image Available</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Secondcomponent;
