import { Controller } from "react-hook-form";
import { Container, StyledInput, Error, Label } from "./Styles";

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
          <StyledInput
            type={type}
            {...field}
            {...rest}
            placeholder={placeholder}
          />
          {error && <Error>{error}</Error>}
        </Container>
      )}
    />
  );
};
