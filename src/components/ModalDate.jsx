import React, { useState, useReducer } from "react";
import "react-responsive-modal/styles.css";
import { DateRangeInput } from "@datepicker-react/styled";
import { Modal } from "react-responsive-modal";

const Modaldate = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "focusChange":
        return { ...state, focusedInput: action.payload };
      case "dateChange":
        return action.payload;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={onOpenModal}>
        <DateRangeInput
          startDate={state.startDate} // Date or null
          endDate={state.endDate} // Date or null
          focusedInput={state.focusedInput} // START_DATE, END_DATE or null
          vertical={true}
        />
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <p>
          <DateRangeInput
            onDatesChange={(data) =>
              dispatch({ type: "dateChange", payload: data })
            }
            onFocusChange={(focusedInput) =>
              dispatch({ type: "focusChange", payload: focusedInput })
            }
            startDate={state.startDate} // Date or null
            endDate={state.endDate} // Date or null
            focusedInput={state.focusedInput} // START_DATE, END_DATE or null
          />
        </p>
      </Modal>
    </div>
  );
};

export default Modaldate;
