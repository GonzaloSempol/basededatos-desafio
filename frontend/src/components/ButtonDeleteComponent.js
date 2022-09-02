import {
    Button,
  } from '@chakra-ui/react'

  import axios from 'axios'

  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

  let payload = {
    "tableName":"TablaNueva",
    "tableIDs": [
      ]                    
  }

function ButtonDeleteComponent(props){
    return(
    <Button colorScheme='red' onClick={() => {props.deleteRow(props.data)}}> Eliminar </Button>
    )
}

export default ButtonDeleteComponent