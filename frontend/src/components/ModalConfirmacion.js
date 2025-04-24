import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Slide
} from '@mui/material';

const Transicion = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//creo un modal personalizado para la confirmacion al eliminar un valor
//con la paleta de colores del system design
const ModalConfirmacion = ({ open, onClose, onConfirmar, fecha }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transicion}
      PaperProps={{
        sx: {
          borderRadius: 3,
          backgroundColor: '#f3e5f5',
        }
      }}
    >
      <DialogTitle sx={{ color: '#4a148c' }}>
        Confirmar eliminación
      </DialogTitle>
      <DialogContent>
        <Typography>
          ¿Estás seguro de que deseas eliminar el valor del <strong>{fecha}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: '#7b1fa2',
            color: '#7b1fa2',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#e1bee7',
              borderColor: '#6a1b9a',
            }
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={onConfirmar}
          variant="contained"
          sx={{
            backgroundColor: '#7b1fa2',
            color: '#fff',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#6a1b9a',
            }
          }}
        >
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmacion;
