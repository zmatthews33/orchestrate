import React, { useReducer } from 'react'


function EventForm() {
  const InitForm = {
    title: null,
    start_date: null,
    end_data: null,
    description: null,
    artists: null,
    event_type: null
  }

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [FormState, setFormState] = useReducer(reducer, InitForm)

  const SubmitForm = e => {
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input type="text" name="title" />
        <input type="date" name="start_date" />
        <textarea name="description"></textarea>
      </form>
    </div>
  )
  

}

export default EventForm