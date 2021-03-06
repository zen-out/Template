import React from "react";

import { render, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../index.js";
import { StoreProvider } from "easy-peasy";
export const createContainer = () => {
  const container = document.createElement("div");

  const form = (id) =>
    container.querySelector(`form[id="${id}"]`);
  const field = (formId, name) =>
    form(formId).elements[name];
  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  const element = (selector) =>
    container.querySelector(selector);
  const elements = (selector) =>
    Array.from(container.querySelectorAll(selector));

  const simulateEvent =
    (eventName) => (element, eventData) =>
      ReactTestUtils.Simulate[eventName](
        element,
        eventData
      );

  const simulateEventAndWait =
    (eventName) => async (element, eventData) =>
      await act(async () =>
        ReactTestUtils.Simulate[eventName](
          element,
          eventData
        )
      );

  const children = (element) =>
    Array.from(element.childNodes);

  return {
    render: (component) =>
      act(() => {
        ReactDOM.render(component, container);
      }),
    renderAndWait: async (component) =>
      await act(async () =>
        ReactDOM.render(component, container)
      ),
    container,
    form,
    field,
    labelFor,
    element,
    elements,
    children,
    blur: simulateEvent("blur"),
    click: simulateEvent("click"),
    clickAndWait: simulateEventAndWait("click"),
    change: simulateEvent("change"),
    changeAndWait: simulateEventAndWait("change"),
    submit: simulateEventAndWait("submit"),
  };
};

export const createContainerWithStore = () => {
  const container = createContainer();
  return {
    ...container,
    store,
    renderWithStore: (component) => {
      render(
        <StoreProvider store={store}>
          {component}
        </StoreProvider>
      );
    },
  };
};

export const withEvent = (name, value) => ({
  target: { name, value },
});
