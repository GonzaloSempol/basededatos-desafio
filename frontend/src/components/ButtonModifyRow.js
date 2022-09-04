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
  

function ButtonModifyRow(props) {
    
    const oldData = props.data
    const formState = {}
    const handleChange = (event) => {formState[event.target.name] = event.target.value;}

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  
    console.log(props.data);
  
    
    
    return (
      <>
        
        <Button colorScheme='purple' onClick={onOpen}>Modificar</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modificar</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
          
            { 
              Object.entries(props.data).map(item => {
              return(
                       <FormControl>
                          <FormLabel>{item[0]} </FormLabel>
                          <Input defaultValue={item[1]} name={item[0]}  onChange={(e) => handleChange(e)} />
                      </FormControl>
              )
              })
            }
              

              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' onClick={() => {props.modifyRow(props.selectedTable, oldData, formState); onClose();}} mr={3}  >
                Modificar!
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  
}

export default ButtonModifyRow;