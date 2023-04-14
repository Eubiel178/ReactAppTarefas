import { Controller } from "react-hook-form";
import { Container, StyledInput, Error } from "../Styles";

export const InputRHF = ({
  name,
  control,
  placeholder,
  error,
  type,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Container>
          <StyledInput>
            <input type={type} {...field} {...rest} placeholder={placeholder} />
          </StyledInput>
          {error && <Error>{error}</Error>}
        </Container>
      )}
    />
  );
};
