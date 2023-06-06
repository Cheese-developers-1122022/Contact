import React from "react";

import { Route, Routes } from "react-router-dom";
import Register from "./Component/Sidebar/Register";
import Login from "./Component/Sidebar/Login";
import RouteGuard from "./Component/Sidebar/RouteGuard";
import ContactsPage from "./Path/ContactsPage";
import ContractsCreatePage from "./Path/ContractsCreatePage";
import DetailPage from "./Path/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteGuard>
            <ContactsPage />
          </RouteGuard>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/create"
        element={
          <RouteGuard>
            <ContractsCreatePage />
          </RouteGuard>
        }
      />
      <Route
        path="/details/:id"
        element={
          <RouteGuard>
            <DetailPage/>
          </RouteGuard>
        }
      />
    </Routes>
  );
};

export default App;
