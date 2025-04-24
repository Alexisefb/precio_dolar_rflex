import React from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Paper, Typography, Box } from '@mui/material';
import { useDolar } from '../context/DolarContext';

//importo valores del dolar
const GraficoDolar = () => {
  const { valoresDolar } = useDolar();

  //constuccion grafico con chart
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: '#1e1e2f' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
        Gráfico fluctuación del valor del dólar
      </Typography>
      <Box sx={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={valoresDolar}>
            <CartesianGrid stroke="#3c3c4f" />
            <XAxis dataKey="fecha" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: '#2a2a3d', border: 'none', color: '#fff' }} />
            <Legend wrapperStyle={{ color: '#ccc' }} />
            <Line
              type="monotone"
              dataKey="valor"
              stroke="#9c27b0"
              strokeWidth={2}
              dot={{ r: 3, fill: '#9c27b0' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default GraficoDolar;
