import React, { useReducer } from "react";

function EventForm() {
  const InitForm = {
    title: null,
    start_date: null,
    end_data: null,
    description: null,
    artists: null,
    event_type: null
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [FormState, setFormState] = useReducer(reducer, InitForm);

  const SubmitForm = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form>
        <div className="formGroup">
          <label>Title</label>
          <input type="text" name="title" />
        </div>

        <div className="formGroup">
          <label>Date</label>
          <input type="date" name="start_date" />
        </div>

        <div className="formGroup">
          <label>Description</label>
          <textarea name="description" />
        </div>

        <div className="formAction">
          <button className="btn-submit" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
