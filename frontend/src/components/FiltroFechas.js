import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { useDolar } from '../context/DolarContext';

const FiltroFechas = () => {
  const { actualizarRangoFechas } = useDolar();

  const hoy = new Date().toISOString().split('T')[0];
  const hace30Dias = new Date();
  hace30Dias.setDate(new Date().getDate() - 30);
  const hace30DiasStr = hace30Dias.toISOString().split('T')[0];

  const [fechaInicio, setFechaInicio] = useState(hace30DiasStr);
  const [fechaFin, setFechaFin] = useState(hoy);

  const manejarFiltro = () => {
    if (fechaInicio && fechaFin && fechaInicio <= fechaFin) {
      actualizarRangoFechas(fechaInicio, fechaFin);
    } else {
      alert('Revisa el rango de fechas. La fecha de inicio no puede ser posterior a la de fin.');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ color: '#4a148c', fontWeight: 'bold', mb: 2 }}>
        Filtrar por rango de fechas
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          label="Fecha inicio"
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Fecha fin"
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button
          variant="contained"
          onClick={manejarFiltro}
          sx={{ backgroundColor: '#6a1b9a', '&:hover': { backgroundColor: '#4a148c' } }}
        >
          Aplicar
        </Button>
      </Box>
    </Paper>
  );
};

export default FiltroFechas;
