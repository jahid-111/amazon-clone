import { useState } from "react";

const useRadioForm = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return { value, onChange: handleChange };
};

export default useRadioForm;
