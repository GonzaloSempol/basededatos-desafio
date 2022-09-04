import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import TableComponent from './components/TableComponent';
import ButtonInsertNewRow from './components/ButtonInsertNewRow';
function App() {


  //hooks
  const [rows, setRows] = useState([])
  const [headers, setHeaders] = useState([])
 

  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  

  //Al cargar la pagina
  useEffect(() =>{
    refreshRows()
  },[])


  const refreshRows = () => {
  
    const payload = {
      "tableName":"TablaNueva",
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

  const deleteRow = (data) =>{
    
    let payload = {
      "tableName":"TablaNueva",
      "tableIDs": []                    
    }        

      Object.entries(data).map(item => {
          return payload.tableIDs.push({
              columnName: item[0], 
              value: (item[1]),
        })
      })
  
     
    api.post('/eliminarFila',payload).then(res => {
      refreshRows()
    })

  }


  const insertRow = (data) =>{
    let payload ={
      "tableName":"TablaNueva",
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
      refreshRows()
    })


  }

  

  return (
    <ChakraProvider>
      <div className="App">
      <header className="App-header">
      <ButtonInsertNewRow headers={headers} insertRow={insertRow}>  Insertar Nueva Fila</ButtonInsertNewRow>
        <TableComponent headers={headers} rows={rows} deleteRow={deleteRow}/>         
      </header>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
