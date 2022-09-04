import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import TableComponent from './components/TableComponent';
import ButtonInsertNewRow from './components/ButtonInsertNewRow';
import TableSelectorComponent from './components/TableSelectorComponent'


function App() {


  //hooks
  const [tables, setTables] = useState([])
  const [selectedTable, setSelectedTable] = useState('')
  
  const selectTable = (tableName) => { //usada desde el option box
      
      setSelectedTable(tableName)
      refreshRows(tableName)
  }

  const [rows, setRows] = useState([])
  const [headers, setHeaders] = useState([])
 

  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  

  //Al cargar la pagina
  useEffect(() =>{
    getAllTables()
    refreshRows(selectedTable)
  },[])

  const getAllTables = () => {
    api.get('/getAllTablas').then(res => {
      setTables(res.data)
      console.log(res.data)
    })
  }

  const refreshRows = (selectedTable) => {
    console.log('Selected Table')
      console.log(selectedTable)
    if(selectedTable !== ''){
        const payload = {
          "tableName":selectedTable,
          "searchParameters": [
            {"columnName":"id","value":"0", "operator":">"},
            ]                    
        }

        api.post('/describirTabla',payload).then(res => {
          setHeaders(res.data)
          console.log(res.data)
        })

        api.post('/listarTabla',payload).then(res => {
          setRows(res.data)   
          console.log(res.data)
        })
    }
  }

  const deleteRow = (selectedTable, data) =>{
    
    let payload = {
      "tableName":selectedTable,
      "tableIDs": []                    
    }        

      Object.entries(data).map(item => {
          return payload.tableIDs.push({
              columnName: item[0], 
              value: (item[1]),
        })
      })
  
     
    api.post('/eliminarFila', payload).then(res => {
      refreshRows(selectedTable)
    })

  }


  const insertRow = (selectedTable, data) =>{
    let payload ={
      "tableName":selectedTable,
      "tableStructure": []
    }
    console.log('input data from form')
    console.log(data)
    Object.entries(data).map(item => {
      return payload.tableStructure.push({
        columnName: item[0], 
        value: (item[1]),
      })
    })
    
    console.log('payload')
    console.log(payload)
    api.post('/insertarFila',payload).then(res => {
      refreshRows(selectedTable)
    })


  }

  const modifyRow = (selectedTable, oldData, newData) =>{
    let payload ={
      "tableName":selectedTable,
      "tableIDs": [],   
      "tableStructure": []
    }
    console.log('input data from form')
    console.log(oldData)

    //El registro que voy a modificar
    Object.entries(oldData).map(item => {
      return payload.tableIDs.push({
          columnName: item[0], 
          value: (item[1]),
    })
  })

    //los nuevos valores
    Object.entries(newData).map(item => {
      return payload.tableStructure.push({
        columnName: item[0], 
        newValue: (item[1]),
      })
    })
    
    console.log('payload modify')
    console.log(payload)
    api.post('/modificarFila',payload).then(res => {
      refreshRows(selectedTable)
    })


  }



  

  return (
    <ChakraProvider>
      <div className="App">
      <header className="App-header">
      <TableSelectorComponent tables={tables} selectTable={selectTable} selectedTable={selectedTable} />
      <ButtonInsertNewRow selectedTable={selectedTable} headers={headers} insertRow={insertRow}>  Insertar Nueva Fila</ButtonInsertNewRow>
        <TableComponent selectedTable={selectedTable} headers={headers} rows={rows} deleteRow={deleteRow} modifyRow={modifyRow} />         
      </header>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
