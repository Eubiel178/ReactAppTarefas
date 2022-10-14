import { FormItemContainer, FormItems, Label, Input } from "./styles";

const FormItem = ({ set, label, id, type, placeholder, value }) => {
  return (
    <FormItemContainer>
      <FormItems>
        <Label htmlFor={id}>{label}</Label>
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
      </FormItems>
    </FormItemContainer>
  );
};

export default FormItem;
