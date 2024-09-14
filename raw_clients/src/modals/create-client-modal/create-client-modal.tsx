import {
  DefaultButton,
  DefaultInput,
} from "../../../../intro/src/shared/components";
import { ModalFrame } from "../modal-frame/modal-frame";

interface CreateModalProps {
  isOpen: boolean;
  handleModal(): void;
}

export function CreateModal({ isOpen, handleModal }: CreateModalProps) {
  return (
    <ModalFrame
      isOpen={isOpen}
      handleModal={handleModal}
      title="Criar cliente:"
    >
      <DefaultInput
        style={{
          padding: "10px 12px",
          fontSize: "1rem",
        }}
        placeholderSize="lg"
        placeholder="Digite o nome:"
      />
      <DefaultInput
        style={{
          padding: "10px 12px",
          fontSize: "1rem",
        }}
        placeholderSize="lg"
        placeholder="Digite o salário:"
      />
      <DefaultInput
        style={{
          padding: "10px 12px",
          fontSize: "1rem",
        }}
        placeholderSize="lg"
        placeholder="Digite o valor da empresa:"
      />
      <DefaultButton
        onClick={() => {
          handleModal();
        }}
        style={{
          marginTop: 5,
          padding: "12px 0",
          fontSize: "0.875rem",
        }}
        btnType="borderless"
      >
        Criar cliente
      </DefaultButton>
    </ModalFrame>
  );
}
