import React from "react";
import { Persona } from "../types/Persona";

const XMLDownloader: React.FC<{ personas: Persona[] }> = ({ personas }) => {
  const descargarXML = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?><personas>';
    personas.forEach((p) => {
      xml += `<persona><nombre>${p.nombre}</nombre><edad>${p.edad}</edad><ocupacion>${p.ocupacion}</ocupacion><genero>${p.genero}</genero></persona>`;
    });
    xml += "</personas>";

    const blob = new Blob([xml], { type: "application/xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "personas.xml";
    a.click();
  };

  return (
    <button
      onClick={descargarXML}
      className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-500 transition duration-250 mt-4"
    >
      Descargar XML
    </button>
  );
};

export default XMLDownloader;
