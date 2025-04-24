import React, { createContext, useContext, useEffect, useState } from 'react';

export const DolarContext = createContext();

// creo el hook
export const useDolar = () => useContext(DolarContext);

// Proveedor del contexto
export const DolarProvider = ({ children }) => {
  const [valoresDolar, setValoresDolar] = useState([]);
  const [cargando, setCargando] = useState(true);

  const editarValor = (fecha, nuevoValor) => {
    setValoresDolar((valoresPrevios) =>
      valoresPrevios.map((item) =>
        item.fecha === fecha ? { ...item, valor: nuevoValor } : item
      )
    );
  };

  const eliminarValor = (fecha) => {
    setValoresDolar((valoresPrevios) =>
      valoresPrevios.filter((item) => item.fecha !== fecha)
    );
  };

  //consumo el backend para obtener los valores del dolar
  const obtenerValores = async (fechaInicio, fechaFin) => {
    try {
      const respuesta = await fetch(`http://localhost:8000/api/dolar/rango?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`);
      const datos = await respuesta.json();
      setValoresDolar(datos);
    } catch (error) {
      console.error('Error al obtener datos del backend:', error);
    } finally {
      setCargando(false);
    }
  };

  // funcion para filtrar por fechas
  const actualizarRangoFechas = (fechaInicio, fechaFin) => {
    setCargando(true);
    obtenerValores(fechaInicio, fechaFin);
  };

  // inicio por defecto los ultimos 30 dias
  useEffect(() => {
    const hoy = new Date();
    const hace30Dias = new Date();
    hace30Dias.setDate(hoy.getDate() - 30);
    const formatoFecha = (fecha) => fecha.toISOString().split('T')[0];
    const fechaInicio = formatoFecha(hace30Dias);
    const fechaFin = formatoFecha(hoy);
    obtenerValores(fechaInicio, fechaFin);
  }, []);

  return (
    <DolarContext.Provider
      value={{
        valoresDolar,
        setValoresDolar,
        cargando,
        editarValor,
        eliminarValor,
        actualizarRangoFechas, // <-- Aquí la exponemos
      }}
    >
      {children}
    </DolarContext.Provider>
  );
};
