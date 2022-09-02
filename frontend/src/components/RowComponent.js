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
import ButtonDeleteComponent from './ButtonDeleteComponent'
function RowComponent(props){



    return ( 
       
        
        <Tr>
        {
        Object.values(props.row).map((value, index) => {
            return (<Td>{value}</Td>)
        })}
        
        <Td><ButtonGroup size='sm' isAttached variant='outline'>
            
            <Button colorScheme='blue' data={props.row} >Modificar</Button><ButtonDeleteComponent  data={props.row} deleteRow={props.deleteRow}/>
            </ButtonGroup >
        </Td>
       
        
        </Tr>
        
    )
   
   

}
export default RowComponent;