import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'code' ;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns = [
  { id: 'name', label: 'Nature of Business ', minWidth: 170 },
  { id: 'des', label: 'Manufacturer and Supplier ', minWidth: 170 },
 
];

interface Data {
  name: string;
  des: string;
}

function createData(
  name: string,
  des: string,
 
): Data {
  return { name, des };
}

const rows = [
  createData('Year of Establishment ', '2006'),
  createData('Company Branches ', '01'),
  createData('No. of Employees', '09'),
  createData('No. of Engineers', '04'),
  createData('No. of Designers ', '02'),
  createData('No. of Production Units', '01'),
  createData('Monthly Production Capacity', 'As Per Order/Requirement'),
  createData('Production Type', 'Automatic & Semi-Automatic'),
  createData('Working As An Original Equipment Manufacturer', 'Yes'),
  createData('Warehousing Facility ', 'Yes'),
  createData('Bankers', 'Yes Bank'),
  createData('Income Tax Registration No. ', 'BZDPK7327K'),
  createData('GST No', '09BZDPK7327K1ZZ')
  
];

export default function StickyHeadTable() {

  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontWeight:"bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                return (
                  <TableRow  hover role="checkbox" tabIndex={-1} key={row.des}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell  key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
