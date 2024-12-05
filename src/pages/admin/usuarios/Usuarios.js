import React, { useEffect, useState } from "react";
import { TextInput, Button, Label } from "flowbite-react";
import DataTable from "../../../components/table/DataTable";
import useAppContext from "../../../context/context"; // Importar el contexto

const UsuariosAdmin = () => {
  const { users,Getusuarios } = useAppContext(); // Obtener el token del contexto
  const [showForm, setShowForm] = useState(false); // Estado para mostrar u ocultar el formulario
  const [row, setrow] = useState(false); // Estado para mostrar u ocultar el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  

  const obtenervehiculos = async () => {
    try {
      const usuarios = await Getusuarios(); 
      setrow( usuarios.map((item, index) => ({
        id: index + 1,
        Nombre: item.nombre,
        Apellido: item.apellido,
        Email: item.email,
        Username: item.userName.split('@')[0], // Extraer solo el nombre de usuario
        Fechaderegistro: item.fecha_registro.split('T')[0] // Solo la fecha
    })))
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    obtenervehiculos()
  }, [])

  const column = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'Nombre', headerName: 'Nombre', width: 230 },
    { field: 'Apellido', headerName: 'Apellido', width: 230 },
    { field: 'Email', headerName: 'Correo electronico', width: 230 },
    { field: 'Username', headerName: 'Usuario', width: 230 },
    { field: 'Fechaderegistro', headerName: 'Fecha de registro', width: 230 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${users.token}`); // Incluir el token desde el contexto
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre: formData.nombre,
      apellido: formData.apellido,
      correo: formData.correo,
      password: formData.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://www.godrive.somee.com/api/Usuario/registrar",
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        alert("Usuario registrado exitosamente");
        console.log("Datos enviados:", result);

        // Resetear el formulario
        setFormData({
          nombre: "",
          apellido: "",
          correo: "",
          password: "",
        });

        // Ocultar el formulario después de registrar el usuario
        setShowForm(false);
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      alert("Hubo un problema al registrar el usuario.");
    }
  };

  return (
    <div>
      {/* Tabla de Usuarios */}
      <div className="w-full px-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Usuarios</h2>
        {row.length > 0 ?
        <DataTable className="text-black" column={column} row={row} /> :
        <h1>Cargando los Usuarios</h1>}
      </div>

      {/* Botón para agregar usuario */}
      <div className="w-full flex justify-center items-center mt-4">
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          {showForm ? "Cerrar" : "Agregar Usuario"}
        </button>
      </div>

      {/* Formulario para agregar usuario */}
      {showForm && (
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Agregar Usuario</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="nombre" value="Nombre" />
              <TextInput
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="apellido" value="Apellido" />
              <TextInput
                id="apellido"
                type="text"
                name="apellido"
                placeholder="Ingrese el apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="correo" value="Correo Electrónico" />
              <TextInput
                id="correo"
                type="email"
                name="correo"
                placeholder="Ingrese el correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="password" value="Contraseña" />
              <TextInput
                id="password"
                type="password"
                name="password"
                placeholder="Ingrese la contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
              Agregar usuario
            </Button>
          </form>
        </div>


      )}
    </div>
  );
};

export default UsuariosAdmin;
