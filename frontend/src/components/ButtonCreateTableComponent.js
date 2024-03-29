import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Box,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { useState } from "react";
  import { useDisclosure } from '@chakra-ui/react'
  

function ButtonCreateTableComponent(props) {
    

    const [tableName, setTableName] = React.useState('')
    const handleChangeTableName = (event) => setTableName(event.target.value)

    const [inputList, setInputList] = useState([{ columnName: "", type: "", pk:"false" }]);

    // handle input change
    const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
    const list = [...inputList];
    console.log(list)
    list.splice(index, 1);
    setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
    setInputList([...inputList, { columnName: "", type: "", pk:"false" }]);
    };

    
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  

  
    
    
    return (
      <>
        
        <Button colorScheme='yellow' onClick={onOpen}>Crear Tabla!</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size='xl'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crear Tabla</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
            <FormLabel>Tabla</FormLabel>
            <Input placeholder='Nombre de la tabla' htmlSize={20} width='auto' name='Tabla' onChange={handleChangeTableName} />
            </FormControl>
            
            <FormControl>
            <FormLabel>Atributos</FormLabel>
                {inputList.map((x, i) => {
                return(
                    <>
                        
                        <FormControl>
                            <SimpleGrid columns={4} spacing={2}>
                                
                                <Box> <Input  htmlSize={8} width='auto' placeholder='Nombre' name='columnName' onChange={e => handleInputChange(e, i)} /> </Box>
                                <Box><Input htmlSize={8} width='auto'  placeholder='Tipo' name='type' onChange={e => handleInputChange(e, i)} /></Box>
                                <Box><Input htmlSize={2} width='auto'  placeholder='Es PK' name='pk' onChange={e => handleInputChange(e, i)} /></Box>
                                <Box>{inputList.length !== 1 && <Button colorScheme='gray' onClick={() => handleRemoveClick(i)}>Quitar Campo</Button>}</Box>
                                <Box>{inputList.length - 1 === i && <Button colorScheme='blue' onClick={handleAddClick} >Agregar Campo</Button>}</Box>
                            </SimpleGrid>
                        </FormControl>    
                    </>
                
                    )}
                )}
                </FormControl>  
               

   
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' onClick={() => {props.createTable(tableName, inputList); onClose();}} mr={3}  >
                Guardar!
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  
}

export default ButtonCreateTableComponent;