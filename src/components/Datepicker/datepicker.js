import React, { useState, useEffect } from 'react';
import { Datepicker } from 'flowbite-datepicker';

const DateRangeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dateFrom, setDateFrom] = useState(''); // Estado para Fecha Desde
    const [dateTo, setDateTo] = useState(''); // Estado para Fecha Hasta

    useEffect(() => {
        if (isOpen) {
            // Establece un timeout antes de inicializar los pickers
            const timeoutId = setTimeout(() => {
                const dateFromElement = document.getElementById('dateFrom');
                const dateToElement = document.getElementById('dateTo');

                // Verifica que los elementos existan antes de inicializar el Datepicker
                if (dateFromElement) {
                    new Datepicker(dateFromElement, {
                        onSelect: (date) => setDateFrom(date), // Actualiza el estado de dateFrom cuando se selecciona una fecha
                    });
                }
                if (dateToElement) {
                    new Datepicker(dateToElement, {
                        onSelect: (date) => setDateTo(date), // Actualiza el estado de dateTo cuando se selecciona una fecha
                    });
                }
            }, 500); // Retraso de 500 ms

            // Limpia el timeout si el componente se desmonta o se cierra el modal
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen]);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* Botón para abrir el modal */}
            <button
                onClick={toggleModal}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
                Elegir Rango de Fechas
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Selecciona el rango de fechas</h2>

                        {/* Campo de Fecha Desde */}
                        <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700">
                            Fecha Desde
                        </label>
                        <input
                            type="text"
                            id="dateFrom"
                            value={dateFrom}
                            readOnly // Para que el usuario solo pueda seleccionar una fecha, no escribirla
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                            placeholder="Selecciona la fecha desde"
                        />

                        {/* Campo de Fecha Hasta */}
                        <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700">
                            Fecha Hasta
                        </label>
                        <input
                            type="text"
                            id="dateTo"
                            value={dateTo}
                            readOnly // Para que el usuario solo pueda seleccionar una fecha, no escribirla
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                            placeholder="Selecciona la fecha hasta"
                        />

                        {/* Botón para cerrar el modal */}
                        <button
                            onClick={toggleModal}
                            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateRangeModal;