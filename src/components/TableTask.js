import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentTask } from "../reducers/currentTaskReducer"
import { deleteTask } from "../reducers/taskReducer"

const TableTask = ({ handleShowModal }) => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks);
  const filterStatus = useSelector(state => state.filter);
  let filtredTasks = tasks;
  const styleButtonContianer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
  }

  const margin = {
    marginTop: '5px',
    marginBottom: '5px',
  }

  if(filterStatus !== 'all') {
    filtredTasks = filtredTasks.filter(
      task => task.status === filterStatus
    );
  }

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>title</th>
        <th>description</th>
        <th>status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filtredTasks.map((task) => <tr key={task.id}>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.status}</td>
        <td>
          <div style={styleButtonContianer}>
            <Button
              style={margin}
              onClick={() => {
                dispatch(setCurrentTask(task))
                handleShowModal()
              }}
            >
              Change
            </Button>
            <Button
              style={margin}
              onClick={
                () => dispatch(deleteTask(task.id)
              )}
            >
              delete
            </Button>
          </div>
        </td>
      </tr>)}
    </tbody>
  </Table>
  )
}

export default TableTask;