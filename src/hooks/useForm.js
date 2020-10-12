import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    let val;
    e.target.type === 'checkbox'
      ? (val = e.target.checked)
      : (val = e.target.value);

    setValues({ ...values, [e.target.name]: val });
  };

  return [values, setValues, handleChange];
};

export default useForm;
