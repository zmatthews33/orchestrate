import React from "react";
import './ContainerStyles.scss';

const Page = ({ children }) => <div className="pageContainer">{children}</div>;

const WidgetContainer = ({ color, children }) => (
  <div className="widgetContainer">{children}</div>
);

const Card = ({ color, children }) => (
  <div className={`cardView ${color}`}>{children}</div>
);

const BandCard = ({ color, children }) => (
  <div className="bandCard">{children}</div>
)

const ListView = ({ color, children }) => (
  <div className={`listView ${color}`}>{children}</div>
);

const FormView = ({ color, formSubmit, children }) => (
  <form class={`formView ${color}`} onSubmit={formSubmit}>
    {children}
  </form>
);

export {Page, WidgetContainer, Card, BandCard, ListView, FormView}
