import { PasswordVisible } from "./Styles";

export const Visibility = ({ set, value }) => {
  return (
    <PasswordVisible>
      <input
        type="checkbox"
        id="visbility"
        onClick={() => {
          set(!value);
        }}
      />
      <label htmlFor="visbility">Mostrar senha</label>
    </PasswordVisible>
  );
};


