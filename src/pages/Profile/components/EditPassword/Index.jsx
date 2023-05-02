import { MdOutlineEdit, MdOutlineEditOff } from "react-icons/md";

import { Controller } from "react-hook-form";

import {
  IsEditOff,
  EditUserItem,
  UserItem,
  Container,
  IsActiveEditOff,
  Error,
} from "../Styles";

const EditPassword = ({
  name,
  control,
  error,
  id,
  isEditState,
  text,
  icon,
  placeholder,
  isEditItem,
  setIsEditItem,
  reset,
  ...rest
}) => {
  return (
    <UserItem>
      {isEditState && isEditItem === true ? (
        <Controller
          name={name}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Container>
              <div>
                {icon}
                <input
                  type="password"
                  placeholder={placeholder}
                  {...field}
                  {...rest}
                  required={isEditItem ? true : false}
                />
                <EditUserItem
                  onClick={() => {
                    reset({ password: "", password_confirm: "" });

                    setIsEditItem(false);
                  }}
                  type="button"
                >
                  <MdOutlineEditOff />
                </EditUserItem>
              </div>

              {error && (
                <div>
                  <Error>{error}</Error>
                </div>
              )}
            </Container>
          )}
        />
      ) : (
        <Container>
          <IsEditOff isEdit={isEditState}>
            {icon}

            <span>{text}</span>
            <IsActiveEditOff
              isEdit={isEditState}
              onClick={() => setIsEditItem(true)}
              type="button"
            >
              <MdOutlineEdit />
            </IsActiveEditOff>
          </IsEditOff>
        </Container>
      )}
    </UserItem>
  );
};

export default EditPassword;
