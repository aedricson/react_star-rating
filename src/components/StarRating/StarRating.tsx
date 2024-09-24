import React, { useState } from "react"
import { FaStar } from 'react-icons/fa';

import './StarRating.css';

type Props = {
  stars: number,
};

export const StarRating: React.FC<Props> = ({stars = 5}) => {
  const [ hoverCount, setHoverCount ] = useState<number>(0);
  const [ selectedCount, setSelectedCount ] = useState<number>(0);

  return (
    <div className="star-rating">
      {[ ...Array(stars) ].map((_, index) => (
        <FaStar
          className={index < (hoverCount || selectedCount)  ? 'active' : ''}
          key={index}
          onClick={() => setSelectedCount(index + 1)}
          onMouseEnter={() => setHoverCount(index + 1)}
          onMouseLeave={() => setHoverCount(selectedCount)}
        ></FaStar>
      ))}
    </div>
  )
}