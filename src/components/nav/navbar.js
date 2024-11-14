import React, { useState } from 'react';
import ShoppingCart from '../shoppingCart/shoppingCart';
import useAppContext from '../../context/context';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const { islogin, setIslogin } = useAppContext()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        // Lógica de logout aquí, como redirigir o limpiar el estado
        console.log("Logout");
        setIslogin(!islogin)
        setIsModalOpen(false);  // Cerrar el modal después del logout
    };


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
                        {!islogin ?
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
                            <li className='flex items-center hover:cursor-pointer' onClick={() => setIsModalOpen(true)}>
                                <svg className='h-6 w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="7" r="5" fill="#000" />
                                    <path d="M12 14c-5 0-9 3-9 7v1h18v-1c0-4-4-7-9-7z" fill="#000" />
                                </svg>
                                <h3 className='ml-2'>Logout</h3>
                            </li>
                        }

                        <li>
                            <a href="/admin/newvehiculos" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vehiculos</a>
                        </li>
                    </ul>
                    {/* Modal de Logout */}
                    {isModalOpen && (
                        <div className=" inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center absolute z-20">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h2 className="text-xl font-bold mb-4">¿Estás seguro de que quieres cerrar sesión?</h2>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Confirmar Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <img onClick={() => setShowCart(!showCart)} src="assets/icons/carrito/carrito-de-compras.png" width="30" className="white cursor-pointer" />
                </div>
            </div>
            {showCart ? <ShoppingCart showCart={setShowCart} /> : ""}


        </nav>
    );
};

export default Navbar;
