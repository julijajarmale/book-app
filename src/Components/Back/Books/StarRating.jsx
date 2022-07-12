import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => { 

        const ratingValue = i + 1;
        
        return (
          <label key={i}>
            <input
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className="radio"
              type="radio"
              name="rating"
              
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            />
            
          </label>
          
         
        );
      })}
       <p>the rating is {rating}</p>
    </div>
  );
};

export default StarRating;
