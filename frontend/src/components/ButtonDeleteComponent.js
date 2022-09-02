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
    <Button colorScheme='red' onClick={()=>{
               

            Object.entries(props.data).map(item => {
                payload.tableIDs.push({
                    columnName: item[0], 
                    value: (item[1]),
              })
            })
     
        
        api.post('/eliminarFila',payload).then(res => {
            console.log(payload)
          })
        
    }}> Eliminar </Button>
    )
}

export default ButtonDeleteComponent