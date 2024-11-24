import React, { useState } from "react";
import DataTable from "../../../components/table/DataTable";
const Newvehiculos = () => {
  const [rentado, setRentado] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [showmodal, setshowmodal] = useState(false);
  const [costoPorDia, setCostoPorDia] = useState(""); // Estado para el costo por día

  const row = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', transmision: 'Automática', year: 2020, numero_Puertas: 4, numero_asientos: 5, costo_por_dia: 35 },
    { id: 2, marca: 'Honda', modelo: 'Civic', transmision: 'Manual', year: 2019, numero_Puertas: 4, numero_asientos: 5, costo_por_dia: 40 },
    { id: 3, marca: 'Chevrolet', modelo: 'Cruze', transmision: 'Automática', year: 2021, numero_Puertas: 4, numero_asientos: 5, costo_por_dia: 50 },
    { id: 4, marca: 'Ford', modelo: 'Fiesta', transmision: 'Manual', year: 2018, numero_Puertas: 4, numero_asientos: 5, costo_por_dia: 30 },
    { id: 5, marca: 'Nissan', modelo: 'Versa', transmision: 'Automática', year: 2022, numero_Puertas: 4, numero_asientos: 5, costo_por_dia: 45 },
  ];
  const column = [
    { field: 'id', headerName: 'Id', width: 80, },
    { field: 'marca', headerName: 'Marca', width: 130 },
    { field: 'modelo', headerName: 'Modelo', width: 170 },
    { field: 'transmision', headerName: 'Transmision', width: 170 },
    { field: 'year', headerName: 'Año', width: 170 },
    { field: 'numero_Puertas', headerName: 'Puertas', width: 170 },
    { field: 'numero_asientos', headerName: 'Asientos', width: 170 },
    { field: 'costo_por_dia', headerName: 'Costo/dia', width: 170 },
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


  const handleRentadoChange = (e) => {
    setRentado(e.target.checked);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setImageBase64(null); // Si no se selecciona ningún archivo, se borra la vista previa de la imagen
    }
  };

  const handleCostoPorDiaChange = (e) => {
    setCostoPorDia(e.target.value); // Actualiza el estado del costo por día
  };

  

  return (
    <div className="">
      <div className='w-full px-5 '>
        <h1 className=" font-bold text-3xl w-full flex items-center justify-center mb-3">Vehiculos</h1>
        <DataTable className='  text-black ' column={column} row={row} />
      </div>
      <div className=" w-full flex justify-center items-center mt-4">
        <button type="button" onClick={()=>setshowmodal(!showmodal)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Agregar</button>
      </div>

      <form className={`${showmodal ? " relative":"hidden"} bg-[#E3F2FD] mx-auto p-4 rounded-[12px] sm:mb-8 lg:mb-12 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)] border border-[#e2e8f0] max-w-[90%] sm:max-w-[80%] lg:max-w-2xl xl:max-w-3xl mt-[15px] mb-[80px]`}>
        <div className="d-flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/" className="d-flex align-items-center text-dark">
            <img
              className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] max-w-full h-auto"
              src="/assets/logo.png"
              alt="Logo GoDrive"
            />
            <span className="text-4xl sm:text-4xl font-bold font-[Playwrite_PE]">
              GoDrive
            </span>
          </a>
        </div>





        <h1 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4 sm:mb-6 font-[Playwrite_PE]">
          Añadir vehículos
        </h1>

        {/* Formulario para ingresar los datos del vehículo */}
        <div className="d-flex flex-col sm:flex-row justify-between">
          <div className="mb-16 sm:mr-2 w-full sm:w-1/2">
            <label htmlFor="matricula" className="form-label text-dark">
              <strong>Matrícula:</strong>
            </label>
            <input
              type="text"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              id="matricula"
              placeholder="Ingrese la matricula del vehículo"
              maxLength={10}
              required
            />
          </div>
          <div className="mb-16 sm:ml-2 w-full sm:w-1/2">
            <label htmlFor="marca" className="form-label text-dark">
              <strong>Marca:</strong>
            </label>
            <input
              type="text"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              id="marca"
              placeholder="Ingrese la marca del vehículo"
              maxLength={50}
              required
            />
          </div>
        </div>

        <div className="d-flex flex-col sm:flex-row justify-between">
          <div className="mb-5 sm:mr-2 w-full sm:w-1/2">
            <label htmlFor="modelo" className="form-label text-dark">
              <strong>Modelo:</strong>
            </label>
            <input
              type="text"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              id="modelo"
              placeholder="Ingrese el modelo del vehículo"
              maxLength={50}
              required
            />
          </div>
          <div className="mb-16 sm:ml-2 w-full sm:w-1/2">
            <label htmlFor="ano" className="form-label text-dark">
              <strong>Transmisión:</strong>
            </label>
            <input
              type="text"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              id="ano"
              placeholder="Ingrese el tipo de transmisión del vehículo"
              maxLength={15}
              required
            />
          </div>
        </div>

        <div className="d-flex flex-col sm:flex-row justify-between">
          <div className="mb-11  sm:mr-2 w-full sm:w-1/2">
            <label htmlFor="year" className="form-label text-dark">
              <strong>Year:</strong>
            </label>
            <input
              type="number"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              id="year"
              placeholder="Ingrese el año de fabricación"
              min={1886}
              max={new Date().getFullYear()}
              required
            />
          </div>
          <div className="mb-5 sm:ml-2 w-full sm:w-1/2">
            <label
              htmlFor="numero_de_puertas"
              className="form-label text-dark border- rounded-3"
            >
              <strong>Número_puertas:</strong>
            </label>
            <select
              id="numero_de_puertas"
              className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
              required
            >
              <option value="" disabled selected>
                Seleccione el número de puertas
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-col sm:flex-row justify-between">
          <div className="mb-5 mt-4 sm:mr-2 w-full sm:w-1/2">
            <label htmlFor="numero_asientos" className="form-label text-dark">
              <strong>Número_asientos:</strong>
            </label>
            <select
              id="numero_asientos"
              className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
              required
            >
              <option value="" disabled selected>
                Seleccione el número de asientos
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="mb-5 mt-4 sm:ml-2 w-full sm:w-1/2">
            <label htmlFor="costo_por_dia" className="form-label text-dark">
              <strong>Costo por día:</strong>
            </label>
            <input
              type="number"
              id="costo_por_dia"
              className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
              placeholder="Ingrese el costo por día"
              min="0"
              value={costoPorDia}
              onChange={handleCostoPorDiaChange}
              required
            />
          </div>
        </div>

        <div className="mb-5 mt-7 d-flex justify-content-center align-items-center">
          <label
            htmlFor="rentado"
            className="form-label border- rounded-3 text-dark d-flex align-items-center"
            style={{ textAlign: "center" }}
          >
            <input
              type="checkbox"
              id="rentado"
              checked={rentado}
              onChange={handleRentadoChange}
              className="form-check-input me-2"
            />
            <strong>Seleccione si el vehículo está rentado</strong>
          </label>
        </div>

        <div className="mb-5 mt-7 w-full">
          <label htmlFor="descripcion" className="form-label text-dark">
            <strong>Descripción:</strong>
          </label>
          <textarea
            id="descripcion"
            className="form-control text-dark w-full shadow-md border- rounded-3 border-gray-400 focus:ring-0 focus:border-gray-400"
            placeholder="Escriba una breve descripción del vehículo"
            maxLength={700}
            rows={4}
            required
          ></textarea>
        </div>

        <div className="mb-5 mt-4 w-full">
          <label htmlFor="image" className="form-label text-dark">
            <strong>Seleccione una imagen del vehículo</strong>
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImageChange}
            className="block w-full border- rounded-3 rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {imageBase64 && (
          <div className="mb-5 w-full flex ">
            <img
              src={imageBase64}
              alt="Vista previa del vehículo"
              className="max-w-full sm:max-w-[50%] h-auto shadow-lg object-cover rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full sm:w-auto sm:px-6 lg:px-8 bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 mt-3"
        >
          <strong>Añadir vehículo al catálogo</strong>
        </button>
      </form>
    </div>

  );
};

export default Newvehiculos;