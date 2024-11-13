
import React, { createContext, useContext, useState, useEffect } from 'react';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion

    //TOAST NOTIFICATION
    const [showToast, setShowToast] = useState(false);
    const [textToast, setTextToast] = useState("");
    const [liscart, setLiscart] = useState([ { 
        nombre: 'Toyota Corolla 2020',
        precio: 50,
        img: "/assets/carsImgenes/Toyota corolla 2020/Corolla Main.webp",
        desde: '01/02/2024',
        hasta: '10/02/2024',
      },
      { 
        nombre: 'Honda Civic 2021',
        precio: 55,
        img: "/assets/carsImgenes/Honda civic 2021/Civic Main.webp",
        desde: '01/02/2024',
        hasta: '10/02/2024',
      },]);

     const [cars, setCars] = useState([
        { 
          nombre: 'Toyota Corolla 2020',
          precio: 50,
          img: "/assets/carsImgenes/Toyota corolla 2020/Corolla Main.webp"
        },
        { 
          nombre: 'Honda Civic 2021',
          precio: 55,
          img: "/assets/carsImgenes/Honda civic 2021/Civic Main.webp"
        },
        { 
          nombre: 'Honda Civic 2018',
          precio: 40,
          img: "/assets/carsImgenes/Honda civic 2018/Civic 18 Main.webp"
        },
        { 
          nombre: 'Kia K5 2021',
          precio: 55,
          img: "/assets/carsImgenes/Kia k5 2021/K5 Main.webp"
        },
        { 
          nombre: 'Mercedes Benz C300 2018',
          precio: 65,
          img: "/assets/carsImgenes/Mercedes Benz C300 2018/C300 Main.webp"
        },
        { 
          nombre: 'Lexus IS 350 2022',
          precio: 100,
          img: "/assets/carsImgenes/Lexus IS 350 2022/IS 350 Main.webp"
        },
        { 
          nombre: 'Ford Focus 2018',
          precio: 35,
          img: "/assets/carsImgenes/Ford focus 2018/Focus Main.webp"
        },
        { 
          nombre: 'Volkswagen Golf 2022',
          precio: 60,
          img: "/assets/carsImgenes/Volkswagen golf 2022/Golf Main.webp"
        },
        { 
          nombre: 'Mazda 3 2019',
          precio: 45,
          img: "/assets/carsImgenes/Mazda3 2019/Mazda3 Main.webp"
        },
        { 
          nombre: 'Honda Fit 2018',
          precio: 35,
          img: "/assets/carsImgenes/Honda fit 2018/Fit Main.webp"
        },
        { 
          nombre: 'Lexus CT 200H 2017',
          precio: 40,
          img: "/assets/carsImgenes/Lexus CT200H 2017/Lexus Main.webp"
        },
        { 
          nombre: 'Nissan Note 2016',
          precio: 30,
          img: "/assets/carsImgenes/Nissan Note 2016/Note Main.webp"
        },
        { 
          nombre: 'Mercedez Benz GLE 350 2020',
          precio: 145,
          img: "/assets/carsImgenes/Mercedez Benz GLE 350 2020/GLE 350 Main.webp"
        },
        { 
          nombre: 'Audi Q7 2021',
          precio: 180,
          img: "/assets/carsImgenes/Audi Q7 2021/Q7 Main.webp"
        },
        { 
          nombre: 'Kia Sorento 2021',
          precio: 100,
          img: "/assets/carsImgenes/Kia sorento 2021/Sorento Main.webp"
        },
        { 
          nombre: 'Hyundai Santa Fe 2023',
          precio: 130,
          img: "/assets/carsImgenes/Hyundai Santa fe 2023/Santa Fe Main.webp"
        },
        { 
          nombre: 'Mazda CX90 2024',
          precio: 200,
          img: "/assets/carsImgenes/Mazda CX90 2024/CX 90 Main.webp"
        },
        { 
          nombre: 'Toyota Land Cruiser Prado 2024',
          precio: 200,
          img: "/assets/carsImgenes/Toyota Land Cruiser Prado 2024/Land Cruiser Main.webp"
        },
        { 
          nombre: 'Toyota Tundra 2020',
          precio: 110,
          img: "/assets/carsImgenes/Toyota Tundra 2020/Tundra Main.webp"
        },
        { 
          nombre: 'Ford Ranger 2022',
          precio: 85,
          img: "/assets/carsImgenes/Ford Ranger 2022/Ranger Main.webp"
        },
        { 
          nombre: 'Jeep Gladiator 2022',
          precio: 95,
          img: "/assets/carsImgenes/Jeep Gladiator 2022/Gladiator Main.webp"
        },
        { 
          nombre: 'Nissan Frontier 2021',
          precio: 80,
          img: "/assets/carsImgenes/Nissan Frontier 2021/Frontier Main.webp"
        },
        { 
          nombre: 'Ford Raptor 2022',
          precio: 150,
          img: "/assets/carsImgenes/Ford Raptor 2022/Raptor Main.webp"
        },
        { 
          nombre: 'Ram 1500 2023',
          precio: 180,
          img: "/assets/carsImgenes/Ram 1500 2023/1500 Main.webp"
        },
        { 
          nombre: 'Kia Stinger 2022',
          precio: 220,
          img: "/assets/carsImgenes/Kia Stinger 2022/Stinger Main.webp"
        },
        { 
          nombre: 'Ford Mustang GT 2021',
          precio: 205,
          img: "/assets/carsImgenes/Ford Mustang GT 2021/GT Main.webp"
        },
        { 
          nombre: 'Lexus LC 500 2021',
          precio: 450,
          img: "/assets/carsImgenes/Lexus LC 500 2021/LC 500 Main.webp"
        },
        { 
          nombre: 'Chevrolet Corvette 2020',
          precio: 500,
          img: "/assets/carsImgenes/Chevrolet Corvette 2020/Corvette Main.webp"
        },
        { 
          nombre: 'Chevrolet Camaro 2022',
          precio: 250,
          img: "/assets/carsImgenes/Chevrolet Camaro 2022/Camaro Main.webp"
        },
        { 
          nombre: 'Porsche Cayman 2016',
          precio: 220,
          img: "/assets/carsImgenes/Porsche Cayman 2016/Cayman Main.webp"
        },
      ])


    const [islogin, setIslogin] = useState(false);
    const [IsOpenSidebar, setIsOpenSidebar] = useState();
    const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
    const [form606Data, setform606Data] = useState([]);
    const [proveedor, setproveedor] = useState([
    ]);
    const [newform, setnewform] = useState([]);
    const [users, setusers] = useState([
        {
        email: "Georges@gmail.com",
        pass: "1234567"
      }
    ]);

    //ComponentDidMouunt
    useEffect(() => {

    }, []);
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
           return true
        } else {
            return false
        }

    }


    const values = (
        {
            // Funciones que son exportadas para manejo externo.

            IsOpenAvatarmenu, IsOpenSidebar,
            setIsOpenSidebar, setIsOpenAvatarmenu,
            form606Data, setform606Data,
            proveedor, setproveedor,
            newform, setnewform,
            islogin, setIslogin,
            users, setusers,
            verifyLogin,
            toastCall,
            liscart, setLiscart,
            cars, setCars,
            showToast, setShowToast,
            textToast, setTextToast


        });   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        console.error('Error deploying App Context!!!');
    }

    return (context);
}

export default useAppContext;