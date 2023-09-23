import React, { useState } from "react";
import "./index.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="registration-form">
      <h2>Регистрация пользователя</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">ФИО:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Номер телефона:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email адрес:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="user-data">
        <h3>Ваши данные:</h3>
        <p>ФИО: {formData.fullName}</p>
        <p>Номер телефона: {formData.phoneNumber}</p>
        <p>Email адрес: {formData.email}</p>
      </div>
    </div>
  );
};

export default RegistrationForm;

