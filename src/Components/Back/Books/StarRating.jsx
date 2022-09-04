import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import BackContext from "../BackContext";

const StarRating = ({ book }) => {
  const { setRateNow } = useContext(BackContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        const rateIt = (e) => {
          setRating(ratingValue);
          setRateNow({
            rate: parseInt(ratingValue),
            id: book.id,
          });
        };

        return (
          <label key={i}>
            <input
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="radio"
              type="radio"
              name="rating"
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onChange={rateIt}
            />
          </label>
        );
      })}
      <small>Rating:{rating}</small>
    </div>
  );
};

export default StarRating;
