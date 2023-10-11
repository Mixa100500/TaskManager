import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import {
  clearCurrentTask
} from "../reducers/currentTaskReducer";
import FormTask from "./FormTask";

const ModalTask = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    setShowModal(false);
    dispatch(clearCurrentTask());
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Add/Change task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormTask handleCloseModal={handleCloseModal}/>
    </Modal.Body>
  </Modal>
  )
}


export default ModalTask;