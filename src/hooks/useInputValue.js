import React from "react";

const useInputValue = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e) => setValue(e.target.value);
  const emptyvalue = () => {
    setValue("");
  };
  return {
    value,
    onChange,
    emptyvalue,
  };
};

export default useInputValue;
