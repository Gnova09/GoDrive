import React from 'react'
import DataTable from '../../../components/table/DataTable'

const FacturaAdmin = () => {


    const row = [
        { id: 1, dateCreated: '2024-11-21', name: 'Juan Pérez', nota: 'Primera compra' },
        { id: 2, dateCreated: '2024-11-20', name: 'María González', nota: 'Cliente frecuente' },
        { id: 3, dateCreated: '2024-11-19', name: 'Carlos López', nota: 'Factura especial' },
        { id: 4, dateCreated: '2024-11-18', name: 'Ana Rodríguez', nota: 'Sin comentarios' },
        { id: 5, dateCreated: '2024-11-17', name: 'Luis Martínez', nota: 'Reclamo pendiente' },
    ];
    const column = [
        { field: 'id', headerName: 'Id', width: 170, },
        { field: 'dateCreated', headerName: 'Fecha creacion', width: 130 },
        { field: 'name', headerName: 'Cliente', width: 170 },
        { field: 'nota', headerName: 'Nota', width: 170 },
        /*  {
             field: 'actions',
             headerName: 'Descargar',
             width: 100,
             renderCell: (params) => (
                 <div className='flex items-center justify-center w-[100px]'>
 
                     <button variant="contained"
                         className='flex items-center w-8 h-8'
                         color="primary" onClick={() => handleRowButton(params.row)}>
                         <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                         </svg>
                     </button>
                 </div>
             ),
         }, */
    ]
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