import React from 'react';
import photos from '../utils/data';

const Featured = () => {
  const [img_1, img_2] = photos;
  return (
    <section className="featured_section">
      <div className="featured_row-layout">
        <h6>Green</h6>
        <img src={img_1} alt="" />
      </div>
      <div className="featured_column-layout">
        <h6>lily</h6>
        <img src={img_2} alt="" />
      </div>
    </section>
  );
};

export default Featured;
