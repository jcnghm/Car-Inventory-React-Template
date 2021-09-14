import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'make', headerName: 'Make', width: 150, editable: true, },
    { field: 'model', headerName: 'Model', width: 150, editable: true, },
    {
      field: 'year',
      headerName: 'Year',
      type: 'string',
      width: 110,
      editable: true,   
    },
    {
      field: 'fullDesc',
      headerName: 'Full Description',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, 'year') || ''} ${params.getValue(params.id, 'make') || ''} ${params.getValue(params.id, 'model') || ''}`,
    },
  ];

  const rows = [
    { id: 1, make: 'Toyota', model: 'Tacoma', year: '2018' },
    { id: 2, make: 'Volkswagon', model: 'Golf-GTI', year: '2012' },
    { id: 3, make: 'Ford', model: 'F-150', year: '2001' },
    { id: 4, make: 'Honda', model: 'Civic', year: '2004' },
    { id: 5, make: 'Ford', model: 'Focus', year: '2003' },
    { id: 6, make: 'Ford', model: 'Ranger', year: '1996' },
    { id: 7, make: 'Mazda', model: '323', year: '1988' },
    { id: 8, make: 'Chevrolet', model: 'Camero', year: '1967' },
    { id: 9, make: 'Mercury', model: 'Comet', year: '1965' },
    { id: 10, make: 'Chevrolet', model: 'Camero', year: '1972' },
  ];


  export const DataTable = () => {
    return (
        <div style={{ height: 650, width: '100%' }}>
          <h2>Your Vehicles in Inventory: </h2>
          <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
        );
    }