import React, { useState } from 'react';
import ShoppingCart from '../shoppingCart/shoppingCart';
import useAppContext from '../../context/context';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const { islogin } = useAppContext()


    return (
        <nav className="bg-[#F9F7F7] border-gray-200">
            <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/logo.png" className="h-20" alt="Logo de GoDrive" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">GoDrive</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                        <li>
                            <a href="/" className="block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="servicios" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                Servicios
                            </a>
                        </li>
                        {islogin ?
                            <>
                                <li>
                                    <a href="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                        Registrar
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                        Login
                                    </a>
                                </li>
                            </>
                            :
                            ''
                        }

                    </ul>
                </div>
                <div>
                    <img onClick={() => setShowCart(!showCart)} src="assets/icons/carrito/carrito-de-compras.png" width="30" className="white cursor-pointer" />
                </div>
            </div>
            {showCart ? <ShoppingCart showCart={setShowCart} /> : ""}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="7" r="5" fill="#ccc" />
                <path d="M12 14c-5 0-9 3-9 7v1h18v-1c0-4-4-7-9-7z" fill="#ccc" />
            </svg>
        </nav>
    );
};

export default Navbar;
