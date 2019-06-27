import React from "react";
import './FormView.scss';

const FormView = ({ color, formSubmit, children }) => (
  <form class={`formView ${color}`} onSubmit={formSubmit}>
    {children}
  </form>
);

export default FormView;