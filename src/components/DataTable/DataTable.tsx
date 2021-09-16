import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams, GridSelectionModel } from '@material-ui/data-grid';
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
      type: 'string',
      width: 150, 
      editable: true
    },
    { 
      field: 'model', 
      headerName: 'Model',
      type: 'string', 
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



export const DataTable =  () => {

  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(`${gridData[0]}`)
    getData()
  }


    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Vehicles In Inventory</h2>
          <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={ (newSelectionModel) => {
          setData(newSelectionModel);
          }}
          selectionModel={gridData}
          {...carData}/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Vehicle</DialogTitle>
          <DialogContent>
            <DialogContentText>Vehicle: {gridData[0]}</DialogContentText>
              <CarForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
        </div>
      );
}