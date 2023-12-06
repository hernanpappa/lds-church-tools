// pages/index.js
"use client";
import React, { useState } from 'react';

const InputTable = () => {
  const [totalPeople, setTotalPeople] = useState(0);

  const handleSumButtonClick = () => {
    // Lógica para sumar la cantidad de personas ingresadas en cada input
    // Puedes acceder a los valores de los inputs y realizar la suma aquí
    alert('Implementa la lógica de suma aquí');
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th></th>
        <th>Banco 1</th>
        <th>Banco 2</th>
        {/* Agrega más bancos según sea necesario */}
      </tr>
    );
  };

  const renderTableRow = (rowName: string, imageUrl: string) => {
    return (
      <tr key={rowName}>
        <td>
          <img src={imageUrl} alt={rowName} className="h-8 w-8" />
          {rowName}
        </td>
        {[...Array(2)].map((_, index) => (
          <td key={index}>
            <input
              type="text"
              placeholder={`Ingrese datos para ${rowName} - Banco ${index + 1}`}
              className="p-2 border rounded"
            />
          </td>
        ))}
        {/* Agrega más inputs según sea necesario */}
      </tr>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto w-full">
        <thead>{renderTableHeader()}</thead>
        <tbody>
          {renderTableRow('Obispado 1', 'https://source.unsplash.com/100x100/?church')}
          {renderTableRow('Obispado 2', 'https://source.unsplash.com/100x100/?church')}
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>

      <div className="mt-4">
        <button onClick={handleSumButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sumar Cantidad de Personas
        </button>
      </div>

      <div className="mt-4">
        <p>Total de Personas: {totalPeople}</p>
      </div>
    </div>
  );
};

export default InputTable;