import React from "react";
import { Persona } from "../types/Persona";

type Props = {
  formData: Persona;
  setFormData: (data: Persona) => void;
  onSubmit: () => void;
  isEditing: boolean;
};

const PersonaForm: React.FC<Props> = ({
  formData,
  setFormData,
  onSubmit,
  isEditing
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-sky-900 p-4 rounded-lg shadow-white-md w-80 mx-auto">
      <input
        className="block w-full my-2 p-2 border text-white"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        className="block w-full my-2 p-2 border text-white"
        name="edad"
        type="number"
        placeholder="Edad"
        value={formData.edad}
        onChange={handleChange}
      />
      <input
        className="block w-full my-2 p-2 border text-white"
        name="ocupacion"
        placeholder="Ocupación"
        value={formData.ocupacion}
        onChange={handleChange}
      />

      <div className="flex justify-center gap-4 my-2 text-white">
        {["Masculino", "Femenino", "Otro"].map((genero) => (
          <label key={genero} className="flex items-center gap-1">
            <input
              type="radio"
              name="genero"
              value={genero}
              checked={formData.genero === genero}
              onChange={handleChange}
            />
            {genero}
          </label>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-gray-500 transition duration-250 text-white py-2 rounded hover:bg-sky-500 mt-2"
      >
        {isEditing ? "Actualizar Persona" : "Agregar Persona"}
      </button>
    </div>
  );
};

export default PersonaForm;
