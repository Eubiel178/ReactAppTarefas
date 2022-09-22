import { Container } from "./Styles";

const FormItem = ({ set, label, id, type, placeholder, value }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(event) => {
          set(event.target.value);
        }}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        required
      />
    </Container>
  );
};

export default FormItem;
