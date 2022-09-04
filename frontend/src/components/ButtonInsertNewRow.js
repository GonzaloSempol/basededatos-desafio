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
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { useDisclosure } from '@chakra-ui/react'
  

function ButtonInsertNewRow(props) {
    

    const formState = {}
    const handleChange = (event) => {formState[event.target.name] = event.target.value;}

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  

  
    
    
    return (
      <>
        
        <Button colorScheme='green' onClick={onOpen}>Insertar Nueva Fila</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Insertar una nueva Fila</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
            {   props.headers.map((header) => {
                    return( <FormControl>
                                <FormLabel>{header.column_name} </FormLabel>
                                <Input placeholder='' name={header.column_name} onChange={(e) => handleChange(e)} />
                            </FormControl>
                        )
                })}

   
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' onClick={() => {props.insertRow(props.selectedTable, formState); onClose();}} mr={3}  >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  
}

export default ButtonInsertNewRow;