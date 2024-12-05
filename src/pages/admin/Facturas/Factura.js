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
        { field: "fecha_creacion", headerName: "Fecha creación", width: 170 },
        { field: "cliente", headerName: "Cliente", width: 200 },
        { field: "fecha_renta_inicio", headerName: "Fecha renta inicio", width: 150 },
        { field: "fecha_renta_final", headerName: "Fecha renta final", width: 150 },
        { field: "monto_total", headerName: "Monto total", width: 130 },
        { field: "subtotal", headerName: "Subtotal", width: 130 },
        { field: "monto_itbis", headerName: "Monto ITBIS", width: 130 },
        { field: "numero_factura", headerName: "Número de factura", width: 200 },
      ];
    return (
        <div>
          <h1 className='font-bold text-3xl w-full flex items-center justify-center mb-3' >Facturas</h1>
            <div className='w-full px-5 '>
                <DataTable className='  text-black ' column={column} row={row} />
            </div>

            
        </div>
    )
}

export default FacturaAdmin