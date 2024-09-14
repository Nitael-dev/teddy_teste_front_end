import {
  DefaultButton,
  DefaultInput,
} from "../../../../intro/src/shared/components";
import { RawClientProps } from "../../../../intro/src/shared/interfaces/clients";
import { ModalFrame } from "../modal-frame/modal-frame";

interface FormModalProps {
  isOpen: boolean;
  client: RawClientProps;

  handleModal(): void;
}

export function EditModal({ isOpen, client, handleModal }: FormModalProps) {
  return (
    <ModalFrame
      isOpen={isOpen}
      handleModal={handleModal}
      title="Editar cliente:"
    >
      <DefaultInput
        defaultValue={client.name}
        style={{
          padding: "10px 12px",
          fontSize: "1rem",
        }}
        placeholderSize="lg"
        placeholder="Digite o nome:"
      />
      <DefaultInput
        defaultValue={client.salary}
        style={{
          padding: "10px 12px",
          fontSize: "1rem",
        }}
        placeholderSize="lg"
        placeholder="Digite o salário:"
      />
      <DefaultInput
        defaultValue={client.companyValuation}
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
        Editar cliente
      </DefaultButton>
    </ModalFrame>
  );
}
