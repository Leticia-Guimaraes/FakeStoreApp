import React, { useState, useEffect } from "react";
import axios from "axios";

const StarRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRating();
  }, []);

  const fetchRating = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/products/${productId}/rating`);
      const { rating } = response.data;
      setRating(rating);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleStarClick = async (newRating) => {
    try {
      setIsLoading(true);
      await axios.post(`/api/products/${productId}/rating`, {
        rating: newRating,
      });
      setRating(newRating);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasDecimal = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      let starClass = "star";

      if (i <= fullStars) {
        starClass += " full-star";
      } else if (i === fullStars + 1 && hasDecimal) {
        starClass += " half-star";
      } else {
        starClass += " empty-star";
      }

      stars.push(
        <span key={i} className={starClass} onClick={() => handleStarClick(i)}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="star-rating">
      {isLoading ? "Carregando..." : renderStars()}
    </div>
  );
};

export default StarRating;
