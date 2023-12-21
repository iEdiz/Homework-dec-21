import style from "./Input.module.css";

type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  type?: HTMLInputElement["type"];
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  placeholder,
  value,
  name,
  id,
  onChange,
}: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={style.input}
    />
  );
};
