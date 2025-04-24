import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { DolarProvider } from './context/DolarContext';
import GraficoDolar from './components/GraficoDolar';
import TablaDolar from './components/TablaDolar';
import FiltroFechas from './components/FiltroFechas';

const App = () => {
  return (
    <DolarProvider>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, backgroundColor: '#ede7f6' }}>
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4a148c' }}>
              Fluctuación del dólar
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Prueba por Alexis Farias Blanco
            </Typography>
          </Box>

          <FiltroFechas />

          <Box sx={{ mt: 6 }}>
            <GraficoDolar />
          </Box>

          <Box sx={{ mt: 6 }}>
            <TablaDolar />
          </Box>
        </Paper>
      </Container>
    </DolarProvider>
  );
};

export default App;
