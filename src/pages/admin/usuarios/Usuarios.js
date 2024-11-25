import React, { useState } from "react";
import { TextInput, Button, Label } from "flowbite-react";

const UsuariosAdmin = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fecha_registro: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Usuario agregado exitosamente");
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      fecha_registro: "",
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Agregar Usuario
      </h2>
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
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Agregar Usuario
        </Button>
      </form>
    </div>
  );
};

export default UsuariosAdmin;
