import { Container } from "./Styles";

const FormItem = ({ set, label, id, type, placeholder, value }) => {
  return (
    <Container>
      <section>
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
      </section>
    </Container>
  );
};

export default FormItem;
