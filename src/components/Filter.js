import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch()
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const filterStatus = useSelector(state => state.filter);
  
  return (
    <div className="filter">
    <label htmlFor="filter-status">filter by status:</label>
    <FormControl
      as="select"
      id="filter-status"
      onChange={handleFilterChange}
      value={filterStatus}
    >
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="uncompleted">uncompleted</option>
    </FormControl>
  </div>
  )
}

export default Filter;