import React from "react";
import "./InputField.css";
import CustomToggle from "../cutomToggle/CustomToggle";
interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  handleCheck: (id: string) => void;
  isAdd: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: React.FC<Props> = ({
  value,
  setValue,
  handleAdd,
  handleCheck,
  isAdd,
  setIsAdd
}) => {
  return (
    <form onSubmit={handleAdd} className="formClass">
      {isAdd && (
        <div style={{ position: "relative" }}>
          <input
            className="input__box"
            type="text"
            placeholder="Type your to do here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <CustomToggle isChecked={false} onClickToggle={()=> {}} variant={"big"}/>
        </div>
      )}
      <button type="submit" className="submit__button" onClick={()=> setIsAdd(true)}>
        {" "}
        <span style={{ fontSize: "40px", color: "#000000" }}>+</span>{" "}
      </button>
    </form>
  );
};

export default InputField;
