import { Container } from "./Styles";

function FormItem({ label, id, type, placeholder }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </Container>
  );
}

export default FormItem;
