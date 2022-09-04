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
import ButtonModifyRow from './ButtonModifyRow';


function RowComponent(props){



    return ( 
       
        
        <Tr>
        {
        Object.values(props.row).map((value, index) => {
            return (<Td>{value}</Td>)
        })}
        
        <Td><ButtonGroup size='sm' isAttached variant='outline'>
            
            <ButtonModifyRow colorScheme='blue' data={props.row} modifyRow={props.modifyRow} > Modificar </ButtonModifyRow><ButtonDeleteComponent  data={props.row} deleteRow={props.deleteRow}/>
            </ButtonGroup >
        </Td>
       
        
        </Tr>
        
    )
   
   

}
export default RowComponent;