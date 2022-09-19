import { Container } from "./Styles";

const FormItem = ({ label, id, type, placeholder }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} required />
    </Container>
  );
};

export default FormItem;
