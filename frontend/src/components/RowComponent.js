import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    ButtonGroup,
  } from '@chakra-ui/react'

function RowComponent(props){


    return ( 
       
        
        
        <Tr>
        {
        Object.values(props.row).map((value, index) => {
            return (<Td>{value}</Td>)
        })}
        
        <Td><ButtonGroup size='sm' isAttached variant='outline'>
            <Button colorScheme='blue'>Modificar</Button><Button colorScheme='red'>Eliminar</Button>
            </ButtonGroup >
        </Td>
       
        
        </Tr>
        
    )
   
   

}
export default RowComponent;