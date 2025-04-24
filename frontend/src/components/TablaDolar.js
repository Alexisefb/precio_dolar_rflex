import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, TextField, Typography, TableSortLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDolar } from '../context/DolarContext';
import ModalConfirmacion from './ModalConfirmacion';

// formateo la fecha
const formatearFecha = (fecha) => {
  const d = new Date(fecha);
  const dia = String(d.getDate()).padStart(2, '0');
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const anio = d.getFullYear();
  return `${dia}-${mes}-${anio}`;
};

//construyo la tabla
const TablaDolar = () => {
  const { valoresDolar, editarValor, eliminarValor } = useDolar();
  const [editandoFecha, setEditandoFecha] = useState(null);
  const [valorTemporal, setValorTemporal] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [fechaAEliminar, setFechaAEliminar] = useState(null);

  const [columnaOrden, setColumnaOrden] = useState('fecha');
  const [ascendente, setAscendente] = useState(true);

  // Fechas del rango
  const fechaInicio = valoresDolar.length > 0 ? formatearFecha(valoresDolar[0].fecha) : '';
  const fechaFin = valoresDolar.length > 0 ? formatearFecha(valoresDolar[valoresDolar.length - 1].fecha) : '';

  //edicion de valor
  const iniciarEdicion = (fecha, valorActual) => {
    setEditandoFecha(fecha);
    setValorTemporal(valorActual);
  };

  // guardo el valor editado
  const guardarEdicion = () => {
    editarValor(editandoFecha, parseFloat(valorTemporal));
    setEditandoFecha(null);
  };

  // cancelo la edicion
  const cancelarEdicion = () => {
    setEditandoFecha(null);
  };

  // modal de confirmacion para eliminar
  const confirmarEliminacion = (fecha) => {
    setFechaAEliminar(fecha);
    setModalAbierto(true);
  };

  // elimino el valor
  const eliminarConfirmado = () => {
    eliminarValor(fechaAEliminar);
    setModalAbierto(false);
    setFechaAEliminar(null);
  };

  // ordeno los valores asc o desc
  const manejarOrden = (columna) => {
    if (columnaOrden === columna) {
      setAscendente(!ascendente);
    } else {
      setColumnaOrden(columna);
      setAscendente(true);
    }
  };

  // ordeno los valores asc o desc
  const valoresOrdenados = [...valoresDolar].sort((a, b) => {
    const valorA = columnaOrden === 'fecha' ? new Date(a[columnaOrden]) : a[columnaOrden];
    const valorB = columnaOrden === 'fecha' ? new Date(b[columnaOrden]) : b[columnaOrden];
    return ascendente ? valorA - valorB : valorB - valorA;
  });

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{ mt: 4, borderRadius: 2, backgroundColor: '#f8f8ff' }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ p: 2, color: 'white', backgroundColor: '#5e35b1', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        >
          Valores del dólar entre {fechaInicio} a {fechaFin}
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ede7f6' }}>
              <TableCell>
                <TableSortLabel
                  active={columnaOrden === 'fecha'}
                  direction={ascendente ? 'asc' : 'desc'}
                  onClick={() => manejarOrden('fecha')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color: '#5e35b1',
                    },
                    '&:hover': {
                      backgroundColor: '#e1bee7',
                    }
                  }}
                >
                  <strong>Fecha</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={columnaOrden === 'valor'}
                  direction={ascendente ? 'asc' : 'desc'}
                  onClick={() => manejarOrden('valor')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color: '#5e35b1',
                    },
                    '&:hover': {
                      backgroundColor: '#e1bee7',
                    }
                  }}
                >
                  <strong>Valor</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell><strong>Editar - Eliminar</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valoresOrdenados.map(({ fecha, valor }) => (
              <TableRow key={fecha} hover>
                <TableCell>{formatearFecha(fecha)}</TableCell>
                <TableCell>
                  {editandoFecha === fecha ? (
                    <TextField
                      type="number"
                      value={valorTemporal}
                      onChange={(e) => setValorTemporal(e.target.value)}
                      size="small"
                      variant="outlined"
                      sx={{ width: '100px' }}
                    />
                  ) : (
                    <Typography variant="body2">
                      {typeof valor === 'number' ? valor.toFixed(2) : valor}
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  {editandoFecha === fecha ? (
                    <>
                      <IconButton onClick={guardarEdicion} color="success">
                        <SaveIcon />
                      </IconButton>
                      <IconButton onClick={cancelarEdicion} color="error">
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={() => iniciarEdicion(fecha, valor)} sx={{ color: '#512da8' }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => confirmarEliminacion(fecha)} sx={{ color: '#b71c1c' }}>
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalConfirmacion
        open={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onConfirmar={eliminarConfirmado}
        fecha={fechaAEliminar}
      />
    </>
  );
};

export default TablaDolar;
