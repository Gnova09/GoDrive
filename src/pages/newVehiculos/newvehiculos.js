import React, { useState } from "react";

const Newvehiculos = () => {
  const [rentado, setRentado] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [costoPorDia, setCostoPorDia] = useState(""); // Estado para el costo por día

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
    <form
      className="mx-auto p-4 rounded-sm shadow-lg border max-w-full sm:max-w-3xl"
      style={{
        backgroundColor: "#f5f5dc",
        maxWidth: "60%",
        marginTop: "50px",
        marginBottom: "80px",
        borderColor: "#e2e8f0",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
        borderRadius: "12px",
      }}
    >
      <div className="d-flex align-items-center justify-content-center mb-7">
        <a href="/" className="d-flex align-items-center text-dark">
          <img
            width={200}
            height={200}
            className="me-2 max-w-full h-auto"
            src="/assets/logo.png"
            alt="Logo GoDrive"
          />
          <span
            className="h1 font-style-normal font-weight-weight"
            style={{
              fontFamily: "'Playwrite PE', serif",
            }}
          >
            GoDrive
          </span>
        </a>
      </div>

      <h1
        className="text-2xl sm:text-3xl font-style-normal font-weight-weight text-gray-800 mb-4 sm:mb-6"
        style={{ fontFamily: "'Playwrite PE', serif" }}
      >
        Añadir vehículos
      </h1>

      {/* Formulario para ingresar los datos del vehículo */}
      <div className="d-flex flex-col sm:flex-row justify-between">
        <div className="mb-16 sm:mr-2 w-full sm:w-1/2">
          <label htmlFor="matricula" className="form-label text-dark">
            <strong>matricula:</strong>
          </label>
          <input
            type="text"
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
            id="matricula"
            placeholder="Ingrese la matricula del vehículo"
            maxLength={10}
            required
          />
        </div>
        <div className="mb-16 sm:ml-2 w-full sm:w-1/2">
          <label htmlFor="marca" className="form-label text-dark">
            <strong>marca:</strong>
          </label>
          <input
            type="text"
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
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
            <strong>modelo:</strong>
          </label>
          <input
            type="text"
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
            id="modelo"
            placeholder="Ingrese el modelo del vehículo"
            maxLength={50}
            required
          />
        </div>
        <div className="mb-16 sm:ml-2 w-full sm:w-1/2">
          <label htmlFor="ano" className="form-label text-dark">
            <strong>transmision:</strong>
          </label>
          <input
            type="text"
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
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
            <strong>year:</strong>
          </label>
          <input
            type="number"
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
            id="year"
            placeholder="Ingrese el año de fabricación"
            min={1886}
            max={new Date().getFullYear()}
            required
          />
        </div>
        <div className="mb-5 sm:ml-2 w-full sm:w-1/2">
          <label htmlFor="numero_de_puertas" className="form-label text-dark">
            <strong>numero_Puertas:</strong>
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
            <strong>numero_asientos:</strong>
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
            className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
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
          className="form-label text-dark d-flex align-items-center"
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
          <strong>descripcion:</strong>
        </label>
        <textarea
          id="descripcion"
          className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
          placeholder="Escriba una breve descripción del vehículo"
          maxLength={500}
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
          className="form-control text-dark w-full shadow-md border-gray-400 focus:ring-0 focus:border-gray-400"
        />
      </div>

      {imageBase64 && (
        <div className="mb-5 w-full flex ">
          <img
            src={imageBase64}
            alt="Vista previa del vehículo"
            className="w-1/3 h-auto shadow-lg"
          />
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full sm:w-auto mt-3 bg-blue-500 hover:bg-[#999980] text-white border-0"
      >
        <strong>Añadir vehículo al catálogo</strong>
      </button>
    </form>
  );
};

export default Newvehiculos;
