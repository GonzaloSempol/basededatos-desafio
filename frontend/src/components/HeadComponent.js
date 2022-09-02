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
  
function HeadComponent(props){

    return ( 
              <>
                {props.headers.map((header) => {
                    return(<Th>{header.column_name}</Th>)
                })}
                </> 
                
            )


}
export default HeadComponent;