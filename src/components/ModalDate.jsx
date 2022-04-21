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

  const closeIcon = (
    <button className="bg-sky-400 h-10 w-40 mt-2 mr-8 z-10 rounded-md text-center flex justify-center items-center text-sm font-title cursor-pointer hover:text-main-1 transition-all duration-450">
      Validate
    </button>
  );

  return (
    <div>
      <button onClick={onOpenModal}>
        <DateRangeInput
          startDate={state.startDate} // Date or null
          endDate={state.endDate} // Date or null
          focusedInput={null} // START_DATE, END_DATE or null
          vertical
        />
      </button>
      <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
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
