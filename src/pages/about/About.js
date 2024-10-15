import React from "react";

const About = () => {
  return (
    <div
      className="h-[90vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/imagenesdelabout/portada2.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1
          className="text-gray-800 text-8xl font-bold mt-20 ml-56 mr-auto h-60"
          style={{
            fontFamily: "Work Sans",
            transform: "rotate(33deg)",
            letterSpacing: "5px",
          }}
        >
          GoDrive
        </h1>
        <div className="bg-white bg-opacity-50 p-1 rounded-lg mx-20 mt-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
          <p
            className="text-gray-900 text-2xl font-semibold text-center"
            style={{
              fontFamily: "Playfair Display",
              lineHeight: "1.6",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            "El lugar en donde puedes encontrar y alquilar vehículos de manera
            rápida y sencilla, te ofrece una amplia variedad de opciones para
            satisfacer todas tus necesidades de transporte."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
