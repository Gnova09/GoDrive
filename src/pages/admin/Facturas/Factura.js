import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/table/DataTable'
import useAppContext from '../../../context/context';

const FacturaAdmin = () => {

    const { GetFacturas } = useAppContext();
    const [factura, setfactura] = useState([])


    const obtenerFacturas = async () => {

        try {
          const facturas = await GetFacturas(); // Asegúrate de que GetVehiculos sea una función asíncrona.
          setfactura(facturas);
          console.log(facturas)
        } catch (error) {
          console.error('Error fetching vehiculos:', error);
        }
      }
      useEffect(() => {
        obtenerFacturas()
      }, [])
    const row = factura;
    const column = [
        { field: "id", headerName: "Id", width: 100 },
        { field: "dateCreated", headerName: "Fecha creación", width: 170 },
        { field: "name", headerName: "Cliente", width: 200 },
        { field: "rentaInicio", headerName: "Fecha renta inicio", width: 150 },
        { field: "rentaFinal", headerName: "Fecha renta final", width: 150 },
        { field: "total", headerName: "Monto total", width: 130 },
        { field: "subtotal", headerName: "Subtotal", width: 130 },
        { field: "itbis", headerName: "Monto ITBIS", width: 130 },
        { field: "factura", headerName: "Número de factura", width: 200 },
      ];
    return (
        <div>
            <div className='w-full px-5 '>
                <DataTable className='  text-black ' column={column} row={row} />
            </div>

            <div className=" w-full flex justify-center items-center mt-4">
                <button type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Agregar</button>
            </div>
        </div>
    )
}

export default FacturaAdmin