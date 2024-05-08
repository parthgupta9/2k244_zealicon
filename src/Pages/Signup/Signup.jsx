import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema1, validationSchema2 } from "./validationSchema";
import { signup } from "../../actions/auth";
import styles from "./Signup.module.css";
import Loader from "../../components/Loader/Loader";
import ghost from "./assets/ghost.png";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const loaderoff = () => setIsLoading(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    id_card: "",
  });

  const handleSubmit = async (values) => {
    console.log("Values", values)
    setFormData({ ...formData, ...values });
    if (step === 1) {
      setStep((prev) => prev + 1);
      return;
    } else {
      setIsLoading(true);
      // try {
      //   const formDataToSend = new FormData();
      //   formDataToSend.append("name", values);
      //   formDataToSend.append("email", values.email);
      //   formDataToSend.append("phone", values.phone);
      //   formDataToSend.append("id_card", values.id_card);
      //   console.log("Formdata",formDataToSend)
      //   dispatch(signup(formDataToSend, navigate, loaderoff));
      // } catch (error) {
      //   console.log("Error Occured");
      // }
    }
  };

  // Redirect if already authenticated
  if (isAuthenticated) {
    const { from } = location.state || { from: { pathname: "/" } };
    navigate(from);
    return null;
  }

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return (
          <Formik
            initialValues={{
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
            }}
            validationSchema={validationSchema1}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className={styles.form}>
                <div className={styles.inputCont}>
                  <label htmlFor="name">Name</label>
                  <div className={styles.inputwrap}>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <ErrorMessage
                    className={styles.error}
                    name="name"
                    component="div"
                  />
                </div>
                <div className={styles.inputCont}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.inputwrap}>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Default@gmail.com"
                    />
                  </div>
                  <ErrorMessage
                    className={styles.error}
                    name="email"
                    component="div"
                  />
                </div>
                <div className={styles.inputCont}>
                  <label htmlFor="phone">Phone Number</label>
                  <div className={styles.inputwrap}>
                    <Field
                      id="phone"
                      type="number"
                      name="phone"
                      placeholder="9129380087"
                    />
                  </div>
                  <ErrorMessage
                    className={styles.error}
                    name="phone"
                    component="div"
                  />
                </div>
                <div className={styles.btnwrap}>
                  <button type="submit" disabled={formik.isSubmitting}>
                    <span>Next &gt;</span>
                  </button>
                  <p>
                    Already have an account?<Link to="/login">Login</Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        );
      case 2:
        return (
          <Formik
            initialValues={{
              name: formData.name,
              id_card: null,
            }}
            validationSchema={validationSchema2}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className={styles.form}>
                <div className={styles.inputCont}>
                  <label htmlFor="name">Name</label>
                  <div className={styles.inputwrap}>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <ErrorMessage
                    className={styles.error}
                    name="name"
                    component="div"
                  />
                </div>
                <div className={styles.inputCont}>
                  <label htmlFor="file">Upload your college ID card</label>
                  <div className={styles.inputwrap}>
                    <div className={styles.uploadCont}>
                      <input
                        id="file"
                        type="file"
                        name="id_card"
                        onChange={(event) => {
                          if (event.currentTarget.files) {
                            formik.setFieldValue(
                              "id_card",
                              event.currentTarget.files[0]
                            );
                          }
                        }}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    className={styles.error}
                    name="id_card"
                    component="div"
                  />
                </div>
                <div className={styles.btnwrap}>
                  <button
                    
                    type="submit"
                    disabled={formik.isSubmitting || isLoading}
                  >
                    <span>
                      {isLoading ? (
                        <Loader loaderht="20px" spinnerbox="8px" />
                      ) : (
                        "Submit"
                      )}
                    </span>
                  </button>
                  <p>
                    Already have an account?<Link to="/login">Login</Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContWrap}>
        {true && (
          <p style={{ color: "red", fontSize: "20px" }}>This is an error</p>
        )}
        <div className={styles.innerCont}>
          <div className={styles.imgCont}>
            <img src={ghost} alt="ghost" />
          </div>
          <div className={styles.formCont}>
            <h2>Let's get started!</h2>
            {renderStepForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
