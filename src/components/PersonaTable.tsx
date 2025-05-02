import React from "react";
import { Persona } from "../types/Persona";

type Props = {
  personas: Persona[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

const PersonaTable: React.FC<Props> = ({ personas, onEdit, onDelete }) => (
  <table className="w-full mx-auto my-6 border-collapse sm:w-4/5 text-white">
    <thead>
      <tr className="bg-sky-900 text-white text-[.8em] sm:text-[1em]">
        <th className="border p-2">Nombre</th>
        <th className="border p-2">Edad</th>
        <th className="border p-2">Ocupación</th>
        <th className="border p-2">Género</th>
        <th className="border p-2">Acción</th>
      </tr>
    </thead>
    <tbody>
      {personas.map((p, i) => (
        <tr key={i} className="text-center text-[.8em] sm:text-[1em]">
          <td className="border p-2">{p.nombre}</td>
          <td className="border p-2">{p.edad}</td>
          <td className="border p-2">{p.ocupacion}</td>
          <td className="border p-2">{p.genero}</td>
          <td className="border p-2 space-x-2">
            <button
              className="bg-sky-500 px-2 py-1 rounded w-full text-[0.7em] sm:text-[1em] mb-1 hover:bg-sky-700 transition duration-250"
              onClick={() => onEdit(i)}
            >
              Modificar
            </button>
            <button
              className="bg-red-800 text-white px-2 py-1 rounded w-full text-[0.7em] sm:text-[1em] hover:bg-red-900 transition duration-250"
              onClick={() => onDelete(i)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PersonaTable;
