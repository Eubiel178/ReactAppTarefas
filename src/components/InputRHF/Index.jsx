import { Controller } from "react-hook-form";
import { Container, StyledInput, Error } from "./Styles";

const InputRHF = ({ name, control, placeholder, error, type, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Container>
          <StyledInput
            type={type}
            placeholder={placeholder}
            {...field}
            {...rest}
          />

          {error && <Error>{error}</Error>}
        </Container>
      )}
    />
  );
};

export default InputRHF;
