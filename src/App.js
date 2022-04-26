import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from './pages';
import './style.scss';
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Pages.Home />
              <Routes>
                  <Route
                      path="/login"
                      element={<Pages.Login />}
                  />
                  <Route
                      path="/create-article"
                      element={<Pages.CreateArticle />}
                  />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
