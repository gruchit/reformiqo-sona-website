import React, { useState } from 'react';
import './Gallery.css';
import './phgr.css';
import PhotoGlry1 from '../../../assets/PhotoGly1.png';
import PhotoGlry2 from '../../../assets/PhotoGly2.png';
import PhotoGlry3 from '../../../assets/PhotoGly3.png';
import PhotoGlry4 from '../../../assets/PhotoGly4.png';
import PhotoGlry5 from '../../../assets/PhotoGly5.png';
import PhotoGlry6 from '../../../assets/PhotoGly6.png';
import PhotoGlry7 from '../../../assets/PhotoGly7.png';
import PhotoGlry8 from '../../../assets/PhotoGly8.png';
import PhotoGlry9 from '../../../assets/PhotoGly9.png';
import PhotoGlry10 from '../../../assets/PhotoGly10.png';

const categories = [
  {
    id: 1,
    title: 'Infrastructure',
    images: [PhotoGlry1, PhotoGlry2],
  },
  {
    id: 2,
    title: 'Team',
    images: [PhotoGlry3, PhotoGlry4],
  },
  {
    id: 3,
    title: 'Production',
    images: [PhotoGlry5, PhotoGlry6, PhotoGlry7],
  },
  {
    id: 4,
    title: 'Machinery',
    images: [PhotoGlry8, PhotoGlry9, PhotoGlry10],
  },
];

function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (

    <div className="photo-gallery">
      {!selectedCategory ? (
        <div className="row d-flex justify-content-center">
          {categories.map((category) => (
            <div key={category.id} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div
                className="category-card"
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={category.images[0]}
                  alt={category.title}
                  className="category-thumbnail"
                />
                <div className="category-title">{category.title}</div>
              </div>
            </div>
          ))}
        </div>

      ) : (
        <div className={`subcategory-view ${selectedCategory ? 'show' : ''}`}>
          <button
            className="back-button"
            onClick={() => setSelectedCategory(null)}
          >
            Back
          </button>
          <h2 className="subcategory-title">{selectedCategory.title}</h2>
          <div className="row">
            {selectedCategory.images.map((image, index) => (
              <div key={index} className="col-12 col-md-4 mb-4">
                <div className="image-card">
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
