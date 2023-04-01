import { useState } from "react";
import { Controller } from "react-hook-form";
import { Container, StyledInput, Error } from "../Styles";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = ({
  name,
  control,
  placeholder,
  error,
  ...rest
}) => {
  const [visibleOn, setVisibleOn] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Container>
          <StyledInput>
            <input
              type={visibleOn ? "text" : "password"}
              {...field}
              {...rest}
              placeholder={placeholder}
            />

            <button type="button" onClick={() => setVisibleOn(!visibleOn)}>
              {visibleOn ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
            <span></span>
          </StyledInput>
          {error && <Error>{error}</Error>}
        </Container>
      )}
    />
  );
};
