import { Input } from "./styles";

const FormItem = ({ set, id, type, placeholder, value }) => {
  return (
    <Input
      onChange={(event) => {
        set(event.target.value);
      }}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      required
    />
  );
};

export default FormItem;
