import React, { useState } from 'react';
import './Gallery.css';
import './phgr.css';
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';

import PhotoGlry1 from '../../../assets/PhotoGly1.png';
import PhotoGlry2 from '../../../assets/PhotoGly2.png';
import PhotoGlry3 from '../../../assets/Certificates1.png';
import PhotoGlry4 from '../../../assets/Certificates2.png';
import PhotoGlry5 from '../../../assets/Certificates3.png';
import PhotoGlry6 from '../../../assets/PhotoGly6.png';
import PhotoGlry7 from '../../../assets/PhotoGly7.png';
import PhotoGlry8 from '../../../assets/PhotoGly8.png';
import PhotoGlry9 from '../../../assets/PhotoGly9.png';
import PhotoGlry10 from '../../../assets/PhotoGly10.png';
import PhotoGlry11 from '../../../assets/PhotoGly11.jpg';
import PhotoGlry12 from '../../../assets/PhotoGly12.jpg';
import PhotoGlry13 from '../../../assets/PhotoGly13.jpg';
import PhotoGlry14 from '../../../assets/PhotoGly14.jpg';
import PhotoGlry15 from '../../../assets/PhotoGly15.jpg';
import PhotoGlry16 from '../../../assets/PhotoGly16.jpg';
import PhotoGlry17 from '../../../assets/PhotoGly17.jpg';
import PhotoGlry18 from '../../../assets/PhotoGly18.png';
import PhotoGlry19 from '../../../assets/PhotoGly19.jpg';
import PhotoGlry20 from '../../../assets/PhotoGly20.jpg';
import PhotoGlry21 from '../../../assets/PhotoGly21.png';
import PhotoGlry22 from '../../../assets/PhotoGly22.jpg';
import PhotoGlry23 from '../../../assets/PhotoGly23.jpg';
import PhotoGlry24 from '../../../assets/PhotoGly24.jpg';
import PhotoGlry25 from '../../../assets/PhotoGly25.jpg';
import PhotoGlry26 from '../../../assets/PhotoGly26.jpg';
import PhotoGlry27 from '../../../assets/PhotoGly27.jpg';
import PhotoGlry28 from '../../../assets/PhotoGly28.jpg';
import PhotoGlry29 from '../../../assets/PhotoGly29.jpg';
import PhotoGlry30 from '../../../assets/PhotoGly30.jpg';
import PhotoGlry31 from '../../../assets/PhotoGly31.jpg';
import PhotoGlry32 from '../../../assets/PhotoGly32.jpg';
import PhotoGlry33 from '../../../assets/PhotoGly33.jpg';
import PhotoGlry34 from '../../../assets/PhotoGly34.jpg';
import PhotoGlry35 from '../../../assets/PhotoGly35.jpg';
import PhotoGlry36 from '../../../assets/PhotoGly36.png';
import PhotoGlry37 from '../../../assets/PhotoGly37.jpg';
import { FaChevronLeft } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
const categories = [
  {
    id: 1,
    title: 'Infrastructure',
    images: [PhotoGlry11, PhotoGlry12, PhotoGlry13],
  },
  {
    id: 2,
    title: 'Team',
    images: [PhotoGlry2, PhotoGlry14, PhotoGlry15, PhotoGlry16, PhotoGlry17, PhotoGlry18, PhotoGlry19, PhotoGlry20, PhotoGlry21, PhotoGlry22, PhotoGlry23, PhotoGlry24, PhotoGlry25, PhotoGlry26, PhotoGlry28, PhotoGlry29, PhotoGlry30, PhotoGlry31, PhotoGlry32, PhotoGlry33, PhotoGlry34, PhotoGlry35, PhotoGlry36, PhotoGlry37],
  },
  {
    id: 3,
    title: 'Certificates',
    images: [PhotoGlry3, PhotoGlry4, PhotoGlry5],
  }
];

function PhotoGallery() {
  useEffect(() => {
    AOS.init({
      once: true, // Prevent animations from replaying
    });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="photo-gallery">
      <div className='container-xxl '>
        <div className='flex-column'>
          <div className='d-flex justify-content-center'>
            <img src={Single_BlackBol_Line} alt="" className='PhotoGlryTxtImg' loading='lazy' />
          </div>
          <div data-aos="zoom-out-up"
            data-aos-offset="200">
            <h1 className='text-center sans_bold mb-5'>Photo Gallery</h1>
          </div>
          <div className='PhotoBorder py-3 d-flex justify-content-between align-items-center'>
            <div data-aos="fade-right"
              data-aos-offset="200">
              <h2 className='sans_Medium mb-0'>Sona Extrusion</h2>
            </div>

            <div className={` subcategory-view d-flex justify-content-center   ${selectedCategory ? 'show' : ''}`}>
              <button
                className="back-button"
                onClick={() => setSelectedCategory(null)}
              >
                <FaChevronLeft className='mb-1 text-white' />
              </button>
            </div>
          </div>
          <div className='SonaTxtColor'>
            <h5 className={`mt-4 subcategory-view ${selectedCategory ? 'show' : ''}`}>{!selectedCategory ? "" : selectedCategory.title}</h5>
          </div>
        </div>
        <div className='container'>
          <div className='mt-5'>
            {!selectedCategory ? (
              <div className="row d-flex justify-content-center">
                {categories.map((category) => (
                  <div key={category.id} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                    <div
                      className="category-card"
                      onClick={() => setSelectedCategory(category)}
                      data-aos="fade-up"
                    >
                      <img
                        src={category.images[0]}
                        alt={category.title}
                        className="category-thumbnail"
                        loading='lazy'
                      />
                      <div className="category-title">{category.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`subcategory-view ${selectedCategory ? 'show' : ''}`}>
                <div className="row">
                  {selectedCategory.images.map((image, index) => (
                    <div key={index} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                      <div className="image-card" data-aos="fade-up">
                        <img src={image} alt={`Image ${index + 1}`} loading='lazy' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
