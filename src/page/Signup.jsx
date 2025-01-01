import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.username) {
      formErrors.username = "نام کاربری الزامی است";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "ایمیل الزامی است";
      valid = false;
    }

    if (!formData.password) {
      formErrors.password = "رمز عبور الزامی است";
      valid = false;
    } else if (formData.password.length < 8) {
      formErrors.password = "رمز عبور باید حداقل 8 کاراکتر باشد";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "رمز عبور و تایید آن مطابقت ندارد";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("User successfully registered");
          navigate("/login"); // هدایت به صفحه لاگین
        } else {
          console.error("Failed to register user");
          alert("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.");
      }
    }
    setFormData("");
  };

  return (
    <div className="signup-form">
      <h2>ثبت نام</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="نام کاربری خود را وارد کنید"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل خود را وارد کنید"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="رمز عبور خود را وارد کنید"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">تایید رمز عبور</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="رمز عبور را دوباره وارد کنید"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" className="submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default Signup;
