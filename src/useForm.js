import { useState } from 'react';

const useForm = (callback, initVal) => {
  const [values, setValues] = useState(initVal);

  const handleChange = (e) => {
    let val;
    e.target.type === 'checkbox'
      ? (val = e.target.checked)
      : (val = e.target.value);

    setValues({ ...values, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
    setValues(initVal);
  };

  return [values, handleChange, handleSubmit];
};

export default useForm;
