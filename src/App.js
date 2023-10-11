import React, { useState } from 'react';
import { 
  Container,
  Button,
} from 'react-bootstrap';
import ModalTask from './components/ModalTask';
import TableTask from './components/TableTask';
import Filter from './components/Filter';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Container>
      <h1>Task list</h1>
      <Button variant="primary" onClick={handleShowModal}>
        add task
      </Button>
      <Filter />
      <TableTask handleShowModal={handleShowModal}/>
      <ModalTask showModal={showModal} setShowModal={setShowModal}/>
    </Container>
  );
}

export default App;
