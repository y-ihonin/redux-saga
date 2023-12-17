/* eslint-disable react/prop-types */

import React from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../redux/store";

// Render with router
function renderWithRedux(ui, renderOptions) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRedux };
