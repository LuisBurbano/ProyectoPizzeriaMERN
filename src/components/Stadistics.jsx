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
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, format } from 'date-fns';
import axios from 'axios';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('week');
  const [salesData, setSalesData] = React.useState([]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/compras');
      const data = response.data;
      setSalesData(data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const groupByWeek = (data) => {
    const weeklySales = {};
    data.forEach((sale) => {
      const purchaseDate = new Date(sale.purchaseDate);
      const startOfWeekDate = startOfWeek(purchaseDate);
      const formattedWeek = format(startOfWeekDate, 'yyyy-MM-dd');
      if (!weeklySales[formattedWeek]) {
        weeklySales[formattedWeek] = [];
      }
      weeklySales[formattedWeek].push(sale);
    });
    return weeklySales;
  };

  const groupByMonth = (data) => {
    const monthlySales = {};
    data.forEach((sale) => {
      const purchaseDate = new Date(sale.purchaseDate);
      const startOfMonthDate = startOfMonth(purchaseDate);
      const formattedMonth = format(startOfMonthDate, 'yyyy-MM');
      if (!monthlySales[formattedMonth]) {
        monthlySales[formattedMonth] = [];
      }
      monthlySales[formattedMonth].push(sale);
    });
    return monthlySales;
  };

  const groupByYear = (data) => {
    const yearlySales = {};
    data.forEach((sale) => {
      const purchaseDate = new Date(sale.purchaseDate);
      const startOfYearDate = startOfYear(purchaseDate);
      const formattedYear = format(startOfYearDate, 'yyyy');
      if (!yearlySales[formattedYear]) {
        yearlySales[formattedYear] = [];
      }
      yearlySales[formattedYear].push(sale);
    });
    return yearlySales;
  };

  const calculateSummary = (sales) => {
    const summary = [];
    for (const period in sales) {
      summary.push(...sales[period]);
    }
    return summary;
  };

  const getContent = (value) => {
    const sales = value === 'week' ? groupByWeek(salesData) :
                  value === 'month' ? groupByMonth(salesData) :
                  groupByYear(salesData);
    const summary = calculateSummary(sales);
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Cliente</TableCell>
              <TableCell align="right">Fecha de Compra</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.customerName}</TableCell>
                <TableCell align="right">{format(new Date(sale.purchaseDate), 'yyyy-MM-dd')}</TableCell>
                <TableCell align="right">${sale.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
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
