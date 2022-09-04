import {
    Button,
  } from '@chakra-ui/react'



function ButtonDeleteComponent(props){
    return(
    <Button colorScheme='red' onClick={() => {props.deleteRow(props.selectedTable,props.data)}}> Eliminar </Button>
    )
}

export default ButtonDeleteComponent