import * as singleSpa from "single-spa";

import { DefaultButton } from "./shared/components/button/button";
import { DefaultInput } from "./shared/components/input/input";
import { PageContainer } from "./shared/components/page-container/page-container";

import "./shared/components/typograph.css";

export default function Root(props) {
  console.log("teddy-intro", props);

  const handleSubmit = () => {
    singleSpa.navigateToUrl("/home/raw-clients");
  };

  return (
    <PageContainer
      style={{
        gap: 20,
        width: "30%",
      }}
    >
      <h2 className="main_title">Olá, seja bem-vindo!</h2>
      <DefaultInput
        style={{
          minWidth: "21.875rem",
        }}
        placeholder="Digite o seu nome:"
      />
      <DefaultButton
        onClick={() => {
          handleSubmit();
        }}
        style={{
          minWidth: "21.875rem",
        }}
        btnType="borderless"
      >
        Entrar
      </DefaultButton>
    </PageContainer>
  );
}
