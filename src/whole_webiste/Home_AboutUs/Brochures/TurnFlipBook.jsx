import React, { useEffect, useRef } from "react";
import FrontCover from "../../../assets/Certificates1.png";
import CenterPage1 from "../../../assets/Certificates2.png";
import CenterPage2 from "../../../assets/PhotoGl11.png";
import BackCover from "../../../assets/Certificates3.png";

const Flipbook = () => {
  const flipbookRef = useRef(null);

  useEffect(() => {
    if (window.$ && window.$.fn.turn) {
      $(flipbookRef.current).turn({
        width: 800,
        height: 600,
        autoCenter: true,
      });
    } else {
      console.error("Turn.js or jQuery is not loaded properly.");
    }

    return () => {
      if (flipbookRef.current && $(flipbookRef.current).data("turn")) {
        $(flipbookRef.current).turn("destroy");
      }
    };
  }, []);

  return (
    <div
      ref={flipbookRef}
      className="flipbook"
      style={{
        width: "800px",
        height: "600px",
        margin: "auto",
        background: "#f0f0f0",
        position: "relative",
      }}
    >
      {/* Front Cover */}
      <div
        className="page"
        style={{
          background: `url(${FrontCover}) center/cover no-repeat`,
        }}
      />
      {/* Center Pages */}
      <div
        className="page"
        style={{
          background: `url(${CenterPage1}) center/cover no-repeat`,
        }}
      />
      <div
        className="page"
        style={{
          background: `url(${CenterPage2}) center/cover no-repeat`,
        }}
      />
      {/* Back Cover */}
      <div
        className="page"
        style={{
          background: `url(${BackCover}) center/cover no-repeat`,
        }}
      />
    </div>
  );
};

export default Flipbook;

