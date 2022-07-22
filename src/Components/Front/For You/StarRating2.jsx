import React from "react";

import { useState } from "react";
import { FaStar } from "react-icons/fa";


const StarRating = ({book}) => {
 
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
              className="radio"
              type="radio"                                                                                                                                                                                                                                                
              name="rating"
             
              
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#fff"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              
            />
            
          </label>
          
         
        );
      })}
      
    </div>
  );
};

export default StarRating;
