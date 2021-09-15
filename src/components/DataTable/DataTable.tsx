import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api'; 
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; 
import { CarForm } from '../../components/CarForm';

const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 110 
    },
    { 
      field: 'make', 
      headerName: 'Make', 
      width: 150, 
      editable: true, },
    { 
      field: 'model', 
      headerName: 'Model', 
      width: 150, 
      editable: true 
    },

    {
      field: 'price',
      headerName: 'MSRP',
      type: 'numeric',
      width: 110,
      editable: true   
    },
    {
      field: 'trim',
      headerName: 'Trim',
      type: 'string',
      width: 110,
      editable: true   
    },
    {
      field: 'added_options',
      headerName: 'Added Options',
      type: 'string',
      width: 110,
      editable: true   
    },
    {
      field: 'dimensions',
      headerName: 'Dimensions',
      type: 'string',
      width: 110,
      editable: true   
    },
    {
      field: 'weight',
      headerName: 'Weight',
      type: 'string',
      width: 110,
      editable: true   
    },
  ];

  // const rows = [
  //   { id: 1, make: 'Toyota', model: 'Tacoma', year: '2018' },
  //   { id: 2, make: 'Volkswagon', model: 'Golf-GTI', year: '2012' },
  //   { id: 3, make: 'Ford', model: 'F-150', year: '2001' },
  //   { id: 4, make: 'Honda', model: 'Civic', year: '2004' },
  //   { id: 5, make: 'Ford', model: 'Focus', year: '2003' },
  //   { id: 6, make: 'Ford', model: 'Ranger', year: '1996' },
  //   { id: 7, make: 'Mazda', model: '323', year: '1988' },
  //   { id: 8, make: 'Chevrolet', model: 'Camero', year: '1967' },
  //   { id: 9, make: 'Mercury', model: 'Comet', year: '1965' },
  //   { id: 10, make: 'Chevrolet', model: 'Camero', year: '1972' },
  // ];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable =  () => {

  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Vehicles In Inventory</h2>
          <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Vehicle</DialogTitle>
          <DialogContent>
            <DialogContentText>Vehicle: {gridData.data.id}</DialogContentText>
              <CarForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
        </div>
      );
}