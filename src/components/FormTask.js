import { Button, Col, Form, FormControl, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeTask, createTask } from "../reducers/taskReducer";
import { clearCurrentTask, setCurrentTask } from "../reducers/currentTaskReducer";

const FormTask = ({ handleCloseModal }) => {
  const currentTask = useSelector(
    state => state.currentTask
  );
  const dispatch = useDispatch()
  const handleAddTask = (event) => {
    event.preventDefault();
    if(currentTask.title.trim() === '') {
      return;
    }

    if(currentTask.description.trim() === '') {
      return;
    }
    dispatch(createTask(currentTask));
    dispatch(clearCurrentTask());
    handleCloseModal();
  };


  const chackInvalidTitle = () => {
    if(currentTask.title === '') {
      return false;
    }
    return currentTask.title.trim() === '';
  }

  const handleEditTask = (event) => {
    event.preventDefault();
    dispatch(changeTask(currentTask));
    handleCloseModal();
  };

  const createOnChange = (fieldName) => {
    return (e) => {
      const newCurrentTask = {
        ...currentTask, 
        [fieldName]: e.target.value
      }
  
      dispatch(
        setCurrentTask(newCurrentTask)
      )
    }
  }

  return (
    <Form 
    onSubmit={currentTask.id ? handleEditTask : handleAddTask}
  >
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Title:
      </Form.Label>
      <Col sm="10">
        <FormControl
          value={currentTask.title}
          onChange={createOnChange('title')}
          placeholder="Title"
          isInvalid={chackInvalidTitle()}
          required
        />
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm="2">
      Description:
      </Form.Label>
      <Col sm="10">
        <FormControl
          as="textarea"
          placeholder="Description"
          value={currentTask.description}
          onChange={createOnChange('description')}
        />
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Status:
      </Form.Label>
      <Col sm="10">
        <Form.Control
          as="select"
          value={currentTask.status}
          onChange={createOnChange('status')}
        >
          <option value="uncompleted">uncompleted</option>
          <option value="completed">completed</option>
        </Form.Control>
      </Col>
    </Form.Group>
    <Button type="submit">Save</Button>
  </Form>
  )
}

export default FormTask;