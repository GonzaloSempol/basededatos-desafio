import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import './App.css';
import {Button} from '@chakra-ui/react'

import Row from './components/RowComponent';

import axios from 'axios'
import TableComponent from './components/TableComponent';
function App() {


  //hooks
  const [rows, setRows] = useState([])
  const [headers, setHeaders] = useState([])
 

  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  

  //Al cargar la pagina

  const payload = {
    "tableName":"TablaNueva",
    "searchParameters": [
      {"columnName":"id","value":"0", "operator":">"},
      ]                    
  }

  useEffect(() =>{
    api.post('/describirTabla',payload).then(res => {
      setHeaders(res.data)
      console.log(res.data)
    })
 
    api.post('/listarTabla',payload).then(res => {
      setRows(res.data)   
      console.log(res.data)
    })
  

  },[])
    
  

  return (
    <ChakraProvider>
      <div className="App">
      <header className="App-header">
      <Button colorScheme='green'>Insertar Nueva Fila</Button>
        <TableComponent headers={headers} rows={rows}/>         
      </header>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
