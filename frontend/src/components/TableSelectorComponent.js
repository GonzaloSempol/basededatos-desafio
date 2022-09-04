import {
    Select,
  } from '@chakra-ui/react'



  function TableSelectorComponent(props){
   
      return(
          

        
          <Select mt={2} mb={2} maxW={250} placeholder='Selecciona una Tabla' value={props.selectedTable} onChange={(e) => {props.selectTable(e.target.value)}}>
              {props.tables.map((row) => {
                      return(<option value={row.table_name}>{row.table_name} </option> )
                    })}
            
          </Select>
      

      )
  
  }
  export default TableSelectorComponent