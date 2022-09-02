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
  } from '@chakra-ui/react'
import HeadComponent from './HeadComponent';
import RowComponent from './RowComponent';


  function TableComponent(props){
   

    
    return (
          <>
              <TableContainer>
              <Table variant='simple'>
                
                <TableCaption></TableCaption>
                <Thead> 
                  <Tr>            
                  <HeadComponent headers={props.headers} />
                  <Th></Th>
                  </Tr>
                </Thead>
                
                
                
                <Tbody>
                  {props.rows.map((row) => {
                    return(<RowComponent row={row} deleteRow={props.deleteRow} />)
                  })}
                </Tbody>

                <Tfoot>
                  <Tr>
                  
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </>
          )
    


}
export default TableComponent;