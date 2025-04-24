import { useState } from 'react';

export default function useForm(initialValues = {}, onSubmitCallback = () => {}) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
