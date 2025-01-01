import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json();
      const user = users.find(
        (u) =>
          u.username === formData.username && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("username", user.username);
        navigate("/carParts");
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="signup-form">
      <h2>ورود</h2>
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
        </div>

        {error && <span className="error">{error}</span>}

        <button type="submit" className="submit">
          ورود
        </button>
      </form>
    </div>
  );
}
