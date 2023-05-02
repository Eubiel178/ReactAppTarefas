import { MdOutlineEdit, MdOutlineEditOff } from "react-icons/md";
import { Controller } from "react-hook-form";
import { useState, useEffect } from "react";

import {
  EditUserItem,
  UserItem,
  IsEditOff,
  Container,
  IsActiveEditOff,
  Error,
} from "../Styles";

const Edit = ({
  name,
  control,
  error,
  id,
  isEditState,
  text,
  icon,
  type,
  placeholder,
  reset,
  ...rest
}) => {
  const [isEditItem, setIsEditItem] = useState(false);

  useEffect(() => {
    isEditState === true && setIsEditItem(false);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={text}
      render={({ field }) => (
        <UserItem>
          {isEditItem && isEditState === true ? (
            <Container>
              <div>
                {icon}

                <input
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  required="true"
                />

                <EditUserItem
                  onClick={() => {
                    reset(JSON.parse(`{"${name}":"${text}"}`));
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
      )}
    />
  );
};

export default Edit;
