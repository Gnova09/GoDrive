
import React, { createContext, useContext, useState, useEffect } from 'react';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion

    //TOAST NOTIFICATION
    const [showToast, setShowToast] = useState(false);
    const [textToast, setTextToast] = useState("");

    const [islogin, setIslogin] = useState(false);
    const [IsOpenSidebar, setIsOpenSidebar] = useState();
    const [IsOpenAvatarmenu, setIsOpenAvatarmenu] = useState(false);
    const [form606Data, setform606Data] = useState([]);
    const [proveedor, setproveedor] = useState([
    ]);
    const [newform, setnewform] = useState([]);
    const [user, setuser] = useState([]);

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
            window.location.href = "/pages/home"
        } else {
            window.location.href = "/"
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
            user, setuser,
            verifyLogin,
            toastCall,
            
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