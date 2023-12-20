import style from "./Input.module.css";

type InputProps = {
  value?: string;
  type?: HTMLInputElement["type"];
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={style.input}
    />
  );
};
