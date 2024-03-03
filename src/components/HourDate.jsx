import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const HourDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Actualiza cada segundo

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    };
    return currentDateTime.toLocaleString('es-ES', options);
  };

  return (
    <Typography style={{ color: 'white' }}>
      <div style={{ marginLeft: '225px', color: 'white' }}>
        <p>Fecha y Hora: {formattedDateTime()}</p>
      </div>
    </Typography>
  );
};

export default HourDate;
