import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
  //Estados de mi aplicacion

  //TOAST NOTIFICATION
  const [showToast, setShowToast] = useState(false);
  const [textToast, setTextToast] = useState("");
  const [liscart, setLiscart] = useState([]);
  const [detailCar, setdetailCar] = useState({});

  const [cars, setCars] = useState([]);
  /*const [cars, setCars] = useState([
    {
      nombre: "Toyota Corolla 2020",
      precio: 50,
      img: [
        "/assets/carsImgenes/Toyota corolla 2020/Corolla Main.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 2.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 3.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 4.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 5.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 6.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 7.webp",
        "/assets/carsImgenes/Toyota corolla 2020/Corolla 8.webp",
      ],
      modelo: "Corolla",
      marca: "Toyota",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Este sedán compacto es sinónimo de confiabilidad y durabilidad. Ofrece un diseño moderno y elegante, eficiencia de combustible excepcional y tecnología avanzada en seguridad como el Toyota Safety Sense, ideal tanto para conducción en la ciudad como en carretera.",
    },
    {
      nombre: "Honda Civic 2021",
      precio: 55,
      img: ["/assets/carsImgenes/Honda civic 2021/Civic Main.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 2.webp",  
        "/assets/carsImgenes/Honda civic 2021/civic 3.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 4.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 5.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 6.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 7.webp",
        "/assets/carsImgenes/Honda civic 2021/civic 8.webp",
      ],
      modelo: "Civic",
      marca: "Honda",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Un sedán con un diseño renovado, tecnología de conectividad avanzada como Apple CarPlay y Android Auto, y un interior cómodo y espacioso. Su motor eficiente garantiza un rendimiento económico sin sacrificar la potencia.",
    },
    {
      nombre: "Honda Civic 2018",
      precio: 40,
      img: ["/assets/carsImgenes/Honda civic 2018/Civic 18 Main.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 2.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 2.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 3.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 4.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 5.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 6.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 7.webp",
        "/assets/carsImgenes/Honda civic 2018/Civic 18 8.webp",
      ],
      modelo: "Civic",
      marca: "Honda",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Compacto y deportivo, este modelo ofrece una experiencia de manejo ágil y segura. Su diseño moderno y su interior bien equipado lo convierten en una excelente opción para viajes diarios y largos trayectos.",
    },
    {
      nombre: "Kia K5 2021",
      precio: 55,
      img: ["/assets/carsImgenes/Kia k5 2021/K5 Main.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 2.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 3.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 4.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 5.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 6.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 7.webp",
        "/assets/carsImgenes/Kia k5 2021/K5 8.webp",
      ],
      modelo: "K5",
      marca: "Kia",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Este sedán de estilo futurista destaca por su diseño atrevido, tecnología de asistencia al conductor como control de crucero adaptativo, y un interior espacioso con acabados de alta calidad. Ideal para quienes buscan rendimiento y estilo.",
    },
    {
      nombre: "Mercedes Benz C300 2018",
      precio: 65,
      img: ["/assets/carsImgenes/Mercedes Benz C300 2018/C300 Main.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 2.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 3.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 4.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 5.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 6.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 7.webp",
        "/assets/carsImgenes/Mercedes Benz C300 2018/C300 8.webp",
      ],
      modelo: "C300",
      marca: "Mercedes Benz",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Un sedán de lujo que combina elegancia y potencia. Su interior premium, equipado con materiales de alta calidad, y su tecnología avanzada de asistencia hacen que la conducción sea cómoda y segura en cualquier condición.",
    },
    {
      nombre: "Lexus IS 350 2022",
      precio: 100,
      img: ["/assets/carsImgenes/Lexus IS 350 2022/IS 350 Main.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 2.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 3.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 4.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 5.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 6.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 7.webp",
        "/assets/carsImgenes/Lexus IS 350 2022/IS 350 8.webp",
      ],
      modelo: "IS 350",
      marca: "Lexus",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Un sedán deportivo de lujo diseñado para los amantes de la velocidad y el confort. Cuenta con un potente motor, un interior sofisticado con acabados de primera, y tecnología avanzada que mejora tanto el rendimiento como la seguridad.",
    },
    {
      nombre: "Ford Focus 2018",
      precio: 35,
      img: ["/assets/carsImgenes/Ford focus 2018/Focus Main.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 2.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 3.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 4.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 5.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 6.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 7.webp",
        "/assets/carsImgenes/Ford focus 2018/Focus 8.webp",
      ],
      modelo: "Focus",
      marca: "Ford",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Compacto y eficiente, el Ford Focus es perfecto para la conducción diaria en la ciudad. Ofrece un manejo dinámico, un diseño atractivo, y un interior práctico con tecnología moderna para mayor comodidad.",
    },
    {
      nombre: "Volkswagen Golf 2022",
      precio: 60,
      img: ["/assets/carsImgenes/Volkswagen golf 2022/Golf Main.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 2.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 3.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 4.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 5.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 6.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 7.webp",
        "/assets/carsImgenes/Volkswagen golf 2022/Golf 8.webp",
      ],
      modelo: "Golf",
      marca: "Volkswagen",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Este hatchback versátil combina un diseño elegante con tecnología innovadora. Ideal para la vida urbana, el Golf cuenta con una cabina espaciosa, un motor eficiente y sistemas avanzados de asistencia al conductor.",
    },
    {
      nombre: "Mazda 3 2019",
      precio: 45,
      img: ["/assets/carsImgenes/Mazda3 2019/Mazda3 Main.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 2.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 3.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 4.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 5.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 6.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 7.webp",
        "/assets/carsImgenes/Mazda3 2019/Mazda3 8.webp",
      ],
      modelo: "Mazda 3",
      marca: "Mazda",
      anio: 2019,
      combustible: "Gasolina",
      descripcion: "Compacto con diseño elegante y un manejo deportivo. Este modelo combina tecnología avanzada, materiales de alta calidad en su interior, y una experiencia de conducción emocionante.",
    },
    {
      nombre: "Honda Fit 2018",
      precio: 35,
      img: ["/assets/carsImgenes/Honda fit 2018/Fit Main.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 2.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 3.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 4.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 5.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 6.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 7.webp",
        "/assets/carsImgenes/Honda fit 2018/Fit 8.webp",
      ],
      modelo: "Fit",
      marca: "Honda",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Conocido por su practicidad y versatilidad, el Fit ofrece un diseño compacto pero espacioso, ideal para desplazamientos urbanos. Su eficiencia de combustible y flexibilidad interior lo hacen único en su segmento.",
    },
    {
      nombre: "Lexus CT 200H 2017",
      precio: 40,
      img: ["/assets/carsImgenes/Lexus CT200h 2017/Lexus CT200h Main1.webp",    
        "/assets/carsImgenes/Lexus CT200h 2017/CT 2.webp", 
        "/assets/carsImgenes/Lexus CT200h 2017/CT 3.webp", 
        "/assets/carsImgenes/Lexus CT200h 2017/CT 4.webp", 
        "/assets/carsImgenes/Lexus CT200h 2017/CT 5.webp", 
        "/assets/carsImgenes/Lexus CT200h 2017/CT 6.webp", 
        "/assets/carsImgenes/Lexus CT200h 2017/CT 7.webp",    
        "/assets/carsImgenes/Lexus CT200h 2017/CT 8.webp", 
      ],
      modelo: "CT 200h",
      marca: "Lexus",
      anio: 2017,
      combustible: "Gasolina",
      descripcion: "Este hatchback híbrido combina lujo y sostenibilidad. Su diseño elegante y su tecnología avanzada lo convierten en una opción ideal para quienes buscan eficiencia y comodidad.",
    },
    {
      nombre: "Nissan Note 2016",
      precio: 30,
      img: ["/assets/carsImgenes/Nissan Note 2016/Note Main.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 2.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 3.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 4.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 5.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 6.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 7.webp",
        "/assets/carsImgenes/Nissan Note 2016/Note 8.webp",
      ],
      modelo: "Note",
      marca: "Nissan",
      anio: 2016,
      combustible: "Gasolina",
      descripcion: "Un hatchback compacto con un diseño funcional y espacio interior sorprendente. Perfecto para familias pequeñas, el Note ofrece un rendimiento económico y un manejo ágil.",
    },
    {
      nombre: "Mercedez Benz GLE 350 2020",
      precio: 145,
      img: ["/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 Main.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 2.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 3.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 4.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 5.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 6.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 7.webp",
        "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 8.webp",
      ],
      modelo: "GLE 350",
      marca: "Mercedes Benz",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Este SUV de lujo ofrece un interior amplio y cómodo, tecnología innovadora como el sistema MBUX, y un rendimiento excepcional tanto en ciudad como en carretera.",
    },
    {
      nombre: "Audi Q7 2021",
      precio: 180,
      img: ["/assets/carsImgenes/Audi Q7 2021/Q7 Main.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 2.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 3.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 4.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 5.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 6.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 7.webp",
        "/assets/carsImgenes/Audi Q7 2021/Q7 8.webp",
      ],
      modelo: "Q7",
      marca: "Audi",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Un SUV premium con espacio para siete pasajeros, acabados de lujo y tecnología avanzada. Su diseño sofisticado y su motor potente lo convierten en una opción ideal para familias.",
    },
    {
      nombre: "Kia Sorento 2021",
      precio: 100,
      img: ["/assets/carsImgenes/Kia sorento 2021/Sorento Main.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 2.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 3.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 4.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 5.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 6.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 7.webp",
        "/assets/carsImgenes/Kia sorento 2021/Sorento 8.webp",
      ],
      modelo: "Sorento",
      marca: "Kia",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Un SUV versátil y espacioso con capacidad para toda la familia. Ofrece un diseño atractivo, tecnología avanzada, y motores eficientes para una experiencia de manejo cómoda y segura.",
    },
    {
      nombre: "Hyundai Santa Fe 2023",
      precio: 130,
      img: ["/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe Main.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 2.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 3.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 4.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 5.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 6.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 7.webp",
        "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe 8.webp",
      ],
      modelo: "Santa Fe",
      marca: "Hyundai",
      anio: 2023,
      combustible: "Gasolina",
      descripcion:
        "Un SUV elegante con interiores modernos y tecnología de conectividad avanzada. Su espacio interior y opciones de motorización eficientes lo hacen ideal para aventuras familiares.",
    },
    {
      nombre: "Mazda CX90 2024",
      precio: 200,
      img: ["/assets/carsImgenes/Mazda CX90 2024/CX 90 Main.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 2.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 3.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 4.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 5.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 6.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 7.webp",
        "/assets/carsImgenes/Mazda CX90 2024/CX 90 8.webp",
      ],
      modelo: "CX90",
      marca: "Mazda",
      anio: 2024,
      combustible: "Gasolina",
      descripcion: "Este SUV de lujo destaca por su diseño refinado y características tecnológicas avanzadas. Su manejo dinámico y su interior espacioso lo convierten en un vehículo premium ideal para cualquier ocasión.",
    },
    {
      nombre: "Toyota Land Cruiser Prado 2024",
      precio: 200,
      img: [
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser Main.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 2.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 3.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 4.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 5.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 6.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 7.webp",
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser 8.webp",
      ],
      modelo: "Land Cruiser Prado",
      marca: "Toyota",
      anio: 2024,
      combustible: "Gasolina",
      descripcion: "Este SUV todoterreno combina lujo y capacidades robustas. Perfecto para aventuras, su interior espacioso y su motor potente aseguran comodidad en cualquier tipo de terreno.",
    },
    {
      nombre: "Toyota Tundra 2020",
      precio: 110,
      img: ["/assets/carsImgenes/Toyota Tundra 2020/Tundra Main.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 2.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 3.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 4.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 5.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 6.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 7.webp",
        "/assets/carsImgenes/Toyota Tundra 2020/Tundra 8.webp",
      ],
      modelo: "Tundra",
      marca: "Toyota",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Una camioneta de tamaño completo diseñada para trabajos pesados y aventuras. Su capacidad de remolque, interior cómodo y diseño robusto son ideales para cualquier desafío.",
    },
    {
      nombre: "Ford Ranger 2022",
      precio: 85,
      img: ["/assets/carsImgenes/Ford Ranger 2022/Ranger Main.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 2.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 3.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 4.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 5.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 6.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 7.webp",
        "/assets/carsImgenes/Ford Ranger 2022/Ranger 8.webp",
      ],
      modelo: "Ranger",
      marca: "Ford",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Una camioneta versátil y eficiente, ideal tanto para el trabajo como para el ocio. Su diseño resistente y su tecnología moderna aseguran un rendimiento confiable en cualquier situación.",
    },
    {
      nombre: "Jeep Gladiator 2022",
      precio: 95,
      img: ["/assets/carsImgenes/Jeep Gladiator 2022/Gladiator Main.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 2.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 3.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 4.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 5.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 6.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 7.webp",
        "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator 8.webp",
      ],
      modelo: "Gladiator",
      marca: "Jeep",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Una camioneta todoterreno única que combina capacidades todoterreno con la versatilidad de una camioneta. Perfecta para aventuras extremas y uso diario.",
    },
    {
      nombre: "Nissan Frontier 2021",
      precio: 80,
      img: ["/assets/carsImgenes/Nissan Frontier 2021/Frontier Main.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 2.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 3.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 4.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 5.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 6.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 7.webp",
        "/assets/carsImgenes/Nissan Frontier 2021/Frontier 8.webp",
      ],
      modelo: "Frontier",
      marca: "Nissan",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Una camioneta confiable con un diseño moderno y capacidad robusta para trabajos pesados. Su interior cómodo y su motor eficiente la hacen ideal para cualquier tarea.",
    },
    {
      nombre: "Ford Raptor 2022",
      precio: 150,
      img: ["/assets/carsImgenes/Ford Raptor 2022/Raptor Main.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 2.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 3.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 4.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 5.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 6.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 7.webp",
        "/assets/carsImgenes/Ford Raptor 2022/Raptor 8.webp",
      ],
      modelo: "Raptor",
      marca: "Ford",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Diseñada para conquistar terrenos extremos, esta camioneta todoterreno ofrece un motor potente, suspensión avanzada y un diseño agresivo para aventuras fuera de carretera.",
    },
    {
      nombre: "Ram 1500 2023",
      precio: 180,
      img: ["/assets/carsImgenes/Ram 1500 2023/1500 Main.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 2.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 3.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 4.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 5.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 6.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 7.webp",
        "/assets/carsImgenes/Ram 1500 2023/1500 8.webp",
      ],
      modelo: "1500",
      marca: "Ram",
      anio: 2023,
      combustible: "Gasolina",
      descripcion: "Una camioneta de lujo con diseño premium, capacidad de remolque excepcional y tecnología avanzada. Perfecta para quienes buscan comodidad y potencia.",
    },
    {
      nombre: "Kia Stinger 2022",
      precio: 220,
      img: ["/assets/carsImgenes/Kia Stinger 2022/Stinger Main.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 2.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 3.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 4.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 5.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 6.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 7.webp",
        "/assets/carsImgenes/Kia Stinger 2022/Stinger 8.webp",
      ],
      modelo: "Stinger",
      marca: "Kia",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Un sedán deportivo con diseño aerodinámico, manejo preciso y un interior de lujo. Ideal para los amantes de la velocidad y el confort.",
    },
    {
      nombre: "Ford Mustang GT 2021",
      precio: 205,
      img: ["/assets/carsImgenes/Ford Mustang GT 2021/GT Main.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 2.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 3.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 4.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 5.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 6.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 7.webp",
        "/assets/carsImgenes/Ford Mustang GT 2021/GT 8.webp",
      ],
      modelo: "Mustang GT",
      marca: "Ford",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "El icónico muscle car ofrece potencia, diseño agresivo y una experiencia de conducción emocionante. Ideal para quienes buscan adrenalina en cada kilómetro.",
    },
    {
      nombre: "Lexus LC 500 2021",
      precio: 450,
      img: ["/assets/carsImgenes/Lexus LC 500 2021/LC 500 Main.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 2.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 3.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 4.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 5.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 6.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 7.webp",
        "/assets/carsImgenes/Lexus LC 500 2021/LC 500 8.webp",
      ],
      modelo: "LC 500",
      marca: "Lexus",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Coupé deportivo con diseño espectacular y tecnología avanzada. Su motor potente y su interior de lujo lo convierten en una obra maestra del rendimiento.",
    },
    {
      nombre: "Chevrolet Corvette 2020",
      precio: 500,
      img: ["/assets/carsImgenes/Chevrolet Corvette 2020/Corvette Main.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 2.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 3.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 4.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 5.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 6.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 7.webp",
        "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette 8.webp",
      ],
      modelo: "Corvette",
      marca: "Chevrolet",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Un deportivo de motor central con diseño aerodinámico y desempeño impresionante. Ideal para quienes buscan velocidad y estilo.",
    },
    {
      nombre: "Chevrolet Camaro 2022",
      precio: 250,
      img: ["/assets/carsImgenes/Chevrolet Camaro 2022/Camaro Main.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 2.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 3.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 4.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 5.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 6.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 7.webp",
        "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro 8.webp",
      ],
      modelo: "Camaro",
      marca: "Chevrolet",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Muscle car con diseño agresivo, tecnología moderna y motor potente. Perfecto para una experiencia de conducción emocionante.",
    },
    {
      nombre: "Porsche Cayman 2016",
      precio: 220,
      img: ["/assets/carsImgenes/Porsche Cayman 2016/Cayman Main.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 2.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 3.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 4.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 5.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 6.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 7.webp",
        "/assets/carsImgenes/Porsche Cayman 2016/Cayman 8.webp",
      ],
      modelo: "Cayman",
      marca: "Porsche",
      anio: 2016,
      combustible: "Gasolina",
      descripcion: "Un coupé deportivo con manejo excepcional, diseño elegante y una experiencia de conducción inolvidable. Ideal para los amantes de los autos de lujo y alto rendimiento.",
    },
  ]);*/

  const [islogin, setIslogin] = useState(false);
  const [IsOpenSidebar, setIsOpenSidebar] = useState();
  const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
  const [form606Data, setform606Data] = useState([]);
  const [proveedor, setproveedor] = useState([]);
  const [newform, setnewform] = useState([]);
  const [users, setusers] = useState({});

  //ComponentDidMouunt
  useEffect(() => { }, []);
  const toastCall = (text) => {
    setTextToast(text);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setTextToast("");
    }, 3000);
  };

  const verifyLogin = () => {
    if (islogin) {
      return true;
    } else {
      return false;
    }
  };

  const logear = async ({ email, pass }) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": pass
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // mode: 'no-cors',
      redirect: "follow"
    };

    const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/Cliente/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIslogin(true)
        setusers(result)
        toastCall("Logged")
        return true
      })
      .catch((error) => {
        toastCall("Error en el login")
        return false
      });

    return response

  }

  const logearAdmin = async ({ email, pass }) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": pass
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/Usuario/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIslogin(true)
        setusers(result)
        toastCall("Logged")
        return true
      })
      .catch((error) => {
        toastCall("Error en el login" + error)
        return false
      });

    return response

  }

  //Registrar clientes
  const RegistrarCliente = async ({cliente}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", users.token );

    const raw = JSON.stringify(
      {
        "nombre": cliente.nombre,
        "apellido": cliente.apellido,
        "correo": cliente.email,
        "password": cliente.pass,
        "tipo_identificacion": cliente.tipoIdentificacion,
        "numero_identificacion": cliente.numeroIdentificacion
      }
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    await fetch("http://www.godrive.somee.com/api/Cliente/registrar", requestOptions)
      .then((response) => response.json())
      .then((result) => {return result})
      .catch((error) => {
        toastCall("Error Creando")
        console.log(error)
        return []
      });
  }
  //vehiculos
  const GetVehiculos = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", users.token || process.env.REACT_APP_TOKEN_BACKEND);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/Vehiculo/lista`, requestOptions)
      .then((response) => response.json())
      .then((result) => { return result })
      .catch((error) => {
        toastCall("Error obteniendo vehiculos")
        return []
      });

    return response
  }

  const Getusuarios = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${users.token || process.env.REACT_APP_TOKEN_ADMIN_BACKEND}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/Usuario/listado`, requestOptions)
      .then((response) => response.json())
      .then((result) => { return result })
      .catch((error) => {
        toastCall("Error ")
        return []
      });

    return response
  }


  const insertVehiculo = async (vehiculo) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", users.token);

    const raw = JSON.stringify(vehiculo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/Vehiculo`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        toastCall("Creado")
        return true
      })
      .catch((error) => {
        console.log(requestOptions)
        console.log(error)
        toastCall("Error en la creacion" + error)
        return false
      });

    return response
  }

  const values = {
    // Funciones que son exportadas para manejo externo.
    insertVehiculo,
    IsOpenAvatarmenu,
    IsOpenSidebar,
    setIsOpenSidebar,
    setIsOpenAvatarmenu,
    form606Data,
    setform606Data,
    proveedor,
    setproveedor,
    newform,
    setnewform,
    islogin,
    setIslogin,
    users,
    setusers,
    verifyLogin,
    toastCall,
    liscart,
    setLiscart,
    cars,
    setCars,
    showToast,
    setShowToast,
    textToast,
    setTextToast,
    detailCar,
    setdetailCar,
    logear,
    logearAdmin,
    GetVehiculos,
    RegistrarCliente
  }; // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
};

export default useAppContext;
