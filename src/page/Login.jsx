import './Login.css'
import React, { useState } from 'react';

const Login = () => {
  // تعریف وضعیت برای ذخیره مقادیر فیلدهای فرم
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // مدیریت تغییرات فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // اعتبارسنجی فرم
  const validateForm = () => {
    let formErrors = {};
    let valid = true;
  
    // نام کاربری
    if (!formData.username) {
      formErrors.username = 'نام کاربری الزامی است';
      valid = false;
    } else if (formData.username.length < 3) {
      formErrors.username = 'نام کاربری باید حداقل 3 کاراکتر باشد';
      valid = false;
    } else if (formData.username.length > 20) {
      formErrors.username = 'نام کاربری نباید بیشتر از 20 کاراکتر باشد';
      valid = false;
    }
  
    // ایمیل
    if (!formData.email) {
      formErrors.email = 'ایمیل الزامی است';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'ایمیل معتبر نیست';
      valid = false;
    }
  
    // رمز عبور
    if (!formData.password) {
      formErrors.password = 'رمز عبور الزامی است';
      valid = false;
    } else if (formData.password.length < 8) {
      formErrors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
      valid = false;
    } else if (!/[a-z]/.test(formData.password)) {
      formErrors.password = 'رمز عبور باید حداقل شامل یک حرف کوچک باشد';
      valid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      formErrors.password = 'رمز عبور باید حداقل شامل یک حرف بزرگ باشد';
      valid = false;
    } else if (!/[0-9]/.test(formData.password)) {
      formErrors.password = 'رمز عبور باید حداقل شامل یک عدد باشد';
      valid = false;
    } else if (!/[^a-zA-Z0-9]/.test(formData.password)) {
      formErrors.password = 'رمز عبور باید حداقل شامل یک کاراکتر خاص باشد';
      valid = false;
    }
  
    // تایید رمز عبور
    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'تایید رمز عبور الزامی است';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'رمز عبور و تایید آن مطابقت ندارد';
      valid = false;
    }
  
    setErrors(formErrors);
    return valid;
  };
  

  // ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // ارسال داده‌ها (مثلاً به یک سرور)
      console.log('Form submitted successfully:', formData);
      // در اینجا می‌توانید درخواست API برای ثبت‌نام ارسال کنید
    }
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
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className='submit'>ثبت نام</button>
      </form>
    </div>
  );
};

export default Login;
