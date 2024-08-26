import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";

const Login = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      }
    </>
  );
};

export default Login;
