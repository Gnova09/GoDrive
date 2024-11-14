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

  const [cars, setCars] = useState([
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
      descripcion: "Sedán compacto, económico y confiable.",
    },
    {
      nombre: "Honda Civic 2021",
      precio: 55,
      img: ["/assets/carsImgenes/Honda civic 2021/Civic Main.webp"],
      modelo: "Civic",
      marca: "Honda",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Sedán deportivo con tecnología avanzada.",
    },
    {
      nombre: "Honda Civic 2018",
      precio: 40,
      img: ["/assets/carsImgenes/Honda civic 2018/Civic 18 Main.webp"],
      modelo: "Civic",
      marca: "Honda",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Modelo fiable y eficiente con buen rendimiento.",
    },
    {
      nombre: "Kia K5 2021",
      precio: 55,
      img: ["/assets/carsImgenes/Kia k5 2021/K5 Main.webp"],
      modelo: "K5",
      marca: "Kia",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Sedán elegante con características premium.",
    },
    {
      nombre: "Mercedes Benz C300 2018",
      precio: 65,
      img: ["/assets/carsImgenes/Mercedes Benz C300 2018/C300 Main.webp"],
      modelo: "C300",
      marca: "Mercedes Benz",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Sedán de lujo con gran rendimiento y confort.",
    },
    {
      nombre: "Lexus IS 350 2022",
      precio: 100,
      img: ["/assets/carsImgenes/Lexus IS 350 2022/IS 350 Main.webp"],
      modelo: "IS 350",
      marca: "Lexus",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Deportivo y de lujo, ideal para conducir con estilo.",
    },
    {
      nombre: "Ford Focus 2018",
      precio: 35,
      img: ["/assets/carsImgenes/Ford focus 2018/Focus Main.webp"],
      modelo: "Focus",
      marca: "Ford",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Compacto y económico, ideal para ciudad.",
    },
    {
      nombre: "Volkswagen Golf 2022",
      precio: 60,
      img: ["/assets/carsImgenes/Volkswagen golf 2022/Golf Main.webp"],
      modelo: "Golf",
      marca: "Volkswagen",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Hatchback de alta calidad, elegante y potente.",
    },
    {
      nombre: "Mazda 3 2019",
      precio: 45,
      img: ["/assets/carsImgenes/Mazda3 2019/Mazda3 Main.webp"],
      modelo: "Mazda 3",
      marca: "Mazda",
      anio: 2019,
      combustible: "Gasolina",
      descripcion: "Compacto con diseño deportivo y rendimiento eficiente.",
    },
    {
      nombre: "Honda Fit 2018",
      precio: 35,
      img: ["/assets/carsImgenes/Honda fit 2018/Fit Main.webp"],
      modelo: "Fit",
      marca: "Honda",
      anio: 2018,
      combustible: "Gasolina",
      descripcion: "Versátil y económico, ideal para el uso urbano.",
    },
    {
      nombre: "Lexus CT 200H 2017",
      precio: 40,
      img: ["/assets/carsImgenes/Lexus CT200h 2017/Lexus CT200h Main1.webp"],
      modelo: "CT 200H",
      marca: "Lexus",
      anio: 2017,
      combustible: "Híbrido",
      descripcion: "Híbrido compacto con tecnología avanzada y eficiencia.",
    },
    {
      nombre: "Nissan Note 2016",
      precio: 30,
      img: ["/assets/carsImgenes/Nissan Note 2016/Note Main.webp"],
      modelo: "Note",
      marca: "Nissan",
      anio: 2016,
      combustible: "Gasolina",
      descripcion: "Pequeño y eficiente, ideal para la ciudad.",
    },
    {
      nombre: "Mercedez Benz GLE 350 2020",
      precio: 145,
      img: ["/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 Main.webp"],
      modelo: "GLE 350",
      marca: "Mercedes Benz",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "SUV de lujo con gran confort y capacidad off-road.",
    },
    {
      nombre: "Audi Q7 2021",
      precio: 180,
      img: ["/assets/carsImgenes/Audi Q7 2021/Q7 Main.webp"],
      modelo: "Q7",
      marca: "Audi",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "SUV de lujo con tecnología de punta y gran espacio.",
    },
    {
      nombre: "Kia Sorento 2021",
      precio: 100,
      img: ["/assets/carsImgenes/Kia sorento 2021/Sorento Main.webp"],
      modelo: "Sorento",
      marca: "Kia",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "SUV espaciosa y cómoda, perfecta para familia.",
    },
    {
      nombre: "Hyundai Santa Fe 2023",
      precio: 130,
      img: ["/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe Main.webp"],
      modelo: "Santa Fe",
      marca: "Hyundai",
      anio: 2023,
      combustible: "Gasolina",
      descripcion:
        "SUV moderna, espaciosa y con muchas características de seguridad.",
    },
    {
      nombre: "Mazda CX90 2024",
      precio: 200,
      img: ["/assets/carsImgenes/Mazda CX90 2024/CX 90 Main.webp"],
      modelo: "CX90",
      marca: "Mazda",
      anio: 2024,
      combustible: "Gasolina",
      descripcion: "SUV de lujo con alto rendimiento y tecnología avanzada.",
    },
    {
      nombre: "Toyota Land Cruiser Prado 2024",
      precio: 200,
      img: [
        "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser Main.webp",
      ],
      modelo: "Land Cruiser Prado",
      marca: "Toyota",
      anio: 2024,
      combustible: "Gasolina",
      descripcion: "SUV robusta, ideal para aventuras todoterreno.",
    },
    {
      nombre: "Toyota Tundra 2020",
      precio: 110,
      img: ["/assets/carsImgenes/Toyota Tundra 2020/Tundra Main.webp"],
      modelo: "Tundra",
      marca: "Toyota",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Camioneta grande con potencia y capacidad de carga.",
    },
    {
      nombre: "Ford Ranger 2022",
      precio: 85,
      img: ["/assets/carsImgenes/Ford Ranger 2022/Ranger Main.webp"],
      modelo: "Ranger",
      marca: "Ford",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Camioneta de tamaño medio con gran capacidad off-road.",
    },
    {
      nombre: "Jeep Gladiator 2022",
      precio: 95,
      img: ["/assets/carsImgenes/Jeep Gladiator 2022/Gladiator Main.webp"],
      modelo: "Gladiator",
      marca: "Jeep",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Camioneta de aventura con diseño robusto y versátil.",
    },
    {
      nombre: "Nissan Frontier 2021",
      precio: 80,
      img: ["/assets/carsImgenes/Nissan Frontier 2021/Frontier Main.webp"],
      modelo: "Frontier",
      marca: "Nissan",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Camioneta con gran capacidad de carga y diseño resistente.",
    },
    {
      nombre: "Ford Raptor 2022",
      precio: 150,
      img: ["/assets/carsImgenes/Ford Raptor 2022/Raptor Main.webp"],
      modelo: "Raptor",
      marca: "Ford",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Camioneta todoterreno con alto rendimiento y robustez.",
    },
    {
      nombre: "Ram 1500 2023",
      precio: 180,
      img: ["/assets/carsImgenes/Ram 1500 2023/1500 Main.webp"],
      modelo: "1500",
      marca: "Ram",
      anio: 2023,
      combustible: "Gasolina",
      descripcion: "Camioneta con gran potencia y capacidad de carga.",
    },
    {
      nombre: "Kia Stinger 2022",
      precio: 220,
      img: ["/assets/carsImgenes/Kia Stinger 2022/Stinger Main.webp"],
      modelo: "Stinger",
      marca: "Kia",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Deportivo elegante con excelente rendimiento.",
    },
    {
      nombre: "Ford Mustang GT 2021",
      precio: 205,
      img: ["/assets/carsImgenes/Ford Mustang GT 2021/GT Main.webp"],
      modelo: "Mustang GT",
      marca: "Ford",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Icono americano de alto rendimiento y estilo.",
    },
    {
      nombre: "Lexus LC 500 2021",
      precio: 450,
      img: ["/assets/carsImgenes/Lexus LC 500 2021/LC 500 Main.webp"],
      modelo: "LC 500",
      marca: "Lexus",
      anio: 2021,
      combustible: "Gasolina",
      descripcion: "Coupé de lujo con diseño aerodinámico y alto rendimiento.",
    },
    {
      nombre: "Chevrolet Corvette 2020",
      precio: 500,
      img: ["/assets/carsImgenes/Chevrolet Corvette 2020/Corvette Main.webp"],
      modelo: "Corvette",
      marca: "Chevrolet",
      anio: 2020,
      combustible: "Gasolina",
      descripcion: "Coupé deportivo de alto rendimiento con un diseño icónico.",
    },
    {
      nombre: "Chevrolet Camaro 2022",
      precio: 250,
      img: ["/assets/carsImgenes/Chevrolet Camaro 2022/Camaro Main.webp"],
      modelo: "Camaro",
      marca: "Chevrolet",
      anio: 2022,
      combustible: "Gasolina",
      descripcion: "Coupé deportivo con diseño agresivo y gran potencia.",
    },
    {
      nombre: "Porsche Cayman 2016",
      precio: 220,
      img: ["/assets/carsImgenes/Porsche Cayman 2016/Cayman Main.webp"],
      modelo: "Cayman",
      marca: "Porsche",
      anio: 2016,
      combustible: "Gasolina",
      descripcion: "Deportivo compacto con una experiencia de manejo única.",
    },
  ]);

  const [islogin, setIslogin] = useState(false);
  const [IsOpenSidebar, setIsOpenSidebar] = useState();
  const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
  const [form606Data, setform606Data] = useState([]);
  const [proveedor, setproveedor] = useState([]);
  const [newform, setnewform] = useState([]);
  const [users, setusers] = useState([
    {
      email: "Georges@gmail.com",
      pass: "1234567",
    },
  ]);

  //ComponentDidMouunt
  useEffect(() => {}, []);
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

  const values = {
    // Funciones que son exportadas para manejo externo.

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
