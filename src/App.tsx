import React, { useEffect, useState } from "react";
import { Persona } from "./types/Persona";
import PersonaForm from "./components/PersonaForm";
import PersonaTable from "./components/PersonaTable";
import XMLDownloader from "./components/XMLDownloader";

const App: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>(() => {
    const data = localStorage.getItem("personas");
    return data ? JSON.parse(data) : [];
  });

  const [formData, setFormData] = useState<Persona>({
    nombre: "",
    edad: "",
    ocupacion: "",
    genero: ""
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("personas", JSON.stringify(personas));
  }, [personas]);

  const handleSubmit = () => {
    if (!formData.nombre || !formData.edad || !formData.ocupacion) {
      alert("Completa todos los campos");
      return;
    }

    const nuevasPersonas = [...personas];
    if (editIndex !== null) {
      nuevasPersonas[editIndex] = formData;
    } else {
      nuevasPersonas.push(formData);
    }
    setPersonas(nuevasPersonas);
    setFormData({ nombre: "", edad: "", ocupacion: "", genero: "" });
    setEditIndex(null);
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Formulario de Personas
      </h2>
      <PersonaForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isEditing={editIndex !== null}
      />
      <XMLDownloader personas={personas} />
      <PersonaTable
        personas={personas}
        onEdit={(index) => {
          setFormData(personas[index]);
          setEditIndex(index);
        }}
        onDelete={(index) => {
          const nuevas = personas.filter((_, i) => i !== index);
          setPersonas(nuevas);
        }}
      />
    </div>
  );
};

export default App;
