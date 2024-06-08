import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import "./authlayout.css";

function AuthLayout() {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }
    
    return (
          <div className="container-fluid">
            <div className="row">
                <Outlet />
            </div>
          </div>
    );
}

export default AuthLayout;
