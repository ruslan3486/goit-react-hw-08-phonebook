import { useSelector, useDispatch } from "react-redux";
import React from "react";
// import PropTypes from "prop-types";

// import types from '../../redux/phonebook/phonebook-actions'
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <form>
      <div>
        <label name="filter" htmlFor="filter" value={filter}></label>
        <input
          style={{ marginBottom: "30px" }}
          value={filter}
          type="text"
          id="filter"
          placeholder="найти контакт по имени"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </form>
  );
}

// const mapStateToProps = state => ({

//     value: state.contacts.filter
// })

// const mapDispachToProps = dispatch => ({

//     onchangeFilter: event => dispatch(filter(event.currentTarget.value))
// })

// export default connect(mapStateToProps, mapDispachToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onchangeFilter: PropTypes.func.isRequired,
// };
