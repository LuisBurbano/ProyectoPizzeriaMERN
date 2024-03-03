import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('week');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getContent = (value) => {
    switch (value) {
      case 'week':
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Número de Ordenes</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Total de las Ventas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Producto 1</TableCell>
                  <TableCell align="right">10</TableCell>
                  <TableCell align="right">$50</TableCell>
                  <TableCell align="right">$500</TableCell>
                </TableRow>
                {/* Agrega más filas según sea necesario */}
              </TableBody>
            </Table>
          </TableContainer>
        );
      case 'month':
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Número de Ordenes</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Total de las Ventas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Producto 3</TableCell>
                  <TableCell align="right">15</TableCell>
                  <TableCell align="right">$60</TableCell>
                  <TableCell align="right">$900</TableCell>
                </TableRow>
                {/* Agrega más filas según sea necesario */}
              </TableBody>
            </Table>
          </TableContainer>
        );
      case 'year':
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Número de Ordenes</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Total de las Ventas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Producto 4</TableCell>
                  <TableCell align="right">20</TableCell>
                  <TableCell align="right">$70</TableCell>
                  <TableCell align="right">$1400</TableCell>
                </TableRow>
                {/* Agrega más filas según sea necesario */}
              </TableBody>
            </Table>
          </TableContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <BottomNavigation
        sx={{
          width: 1200,
          borderRadius: 5,
          color: 'rgb(198, 40, 40)',
          display: 'flex',
    justifyContent: 'space-around',
          '& .Mui-selected': {
            backgroundColor: 'rgb(198, 40, 40)',
            color: 'white'
          },
          '& .MuiBottomNavigationAction-root.Mui-selected:hover': {
            backgroundColor: 'rgb(198, 40, 40)',
            color: 'white',
          },
        }}
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction sx={{ color: 'rgb(198, 40, 40)' }} label="Esta semana" value="week" />
        <BottomNavigationAction sx={{ color: 'rgb(198, 40, 40)' }} label="Este mes" value="month" />
        <BottomNavigationAction sx={{ color: 'rgb(198, 40, 40)' }} label="Este año" value="year" />
        
      </BottomNavigation>
      <Paper elevation={3} style={{ padding: 10, marginTop: 20, width: 1182}}>
        {getContent(value)}
      </Paper>
    </div>
  );
}
