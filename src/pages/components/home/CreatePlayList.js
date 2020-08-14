import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreatePlayList = ({ model, toggle }) => {

    return (
        <div>
            <Modal isOpen={model} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create PlayList</ModalHeader>
                <ModalBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail" className='text-white'>PlayList Name</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="Create a PlayList" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
                    <Button color="primary" onClick={toggle}>Create</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default CreatePlayList
