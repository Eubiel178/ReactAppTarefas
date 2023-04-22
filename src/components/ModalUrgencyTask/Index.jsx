import ReactLoading from "react-loading";
import { IoClose } from "react-icons/io5";

import {
  Loading,
  ModalContainer,
  Modal,
  HeaderModal,
  UrgencyListColors,
  ButtonUrgency,
} from "./Styles";

export const ModalUrgencyTask = ({
  loading,
  isOpenModal,
  setIsOpenModal,
  action,
}) => {
  const colors = ["#FF0000", "#ffa500", "#00ff80"];

  return (
    <ModalContainer style={{ display: isOpenModal === false && "none" }}>
      {loading ? (
        <Loading>
          <ReactLoading type="spin" color="red" height="5em" width="5em" />
        </Loading>
      ) : (
        <Modal>
          <HeaderModal>
            <h3>
              <span>Classificar tarefa</span>
            </h3>

            <button
              onClick={() => {
                setIsOpenModal(false);
              }}
            >
              <span>
                <IoClose style={{ fontSize: "25px" }} />
              </span>
            </button>
          </HeaderModal>

          <UrgencyListColors>
            <div>
              <ButtonUrgency
                color={colors[0]}
                onClick={() => {
                  action(colors[0]);
                }}
              >
                <div></div> <span>Urgente</span>
              </ButtonUrgency>
            </div>

            <div>
              <ButtonUrgency
                color={colors[1]}
                onClick={() => {
                  action(colors[1]);
                }}
              >
                <div></div> <span>Pouco urgente</span>
              </ButtonUrgency>
            </div>

            <div>
              <ButtonUrgency
                color={colors[2]}
                onClick={() => {
                  action(colors[2]);
                }}
              >
                <div></div> <span>Não urgente ou finalizada</span>
              </ButtonUrgency>
            </div>
          </UrgencyListColors>
        </Modal>
      )}
    </ModalContainer>
  );
};
