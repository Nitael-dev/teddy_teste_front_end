import {
  PageContainer,
  DefaultButton,
  FlexList,
  ClientCard,
} from "../../intro/src/shared/components";

import { CLIENTS_MOCK } from "../../intro/src/shared/mocks/clients.mock";

import "../../intro/src/shared/components/typograph.css";

export default function Root(props) {
  return (
    <PageContainer
      style={{
        width: "80%",
        height: "100%",
        margin: "0 10%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 40,
      }}
    >
      <strong className="page_title">Clientes selecionados:</strong>
      <FlexList
        containerStyle={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.25rem",
          marginTop: 10,
        }}
        data={CLIENTS_MOCK}
        renderItem={(item, index) => {
          return <ClientCard type="selected" {...item} />;
        }}
      />
      <DefaultButton
        style={{
          marginTop: 20,
        }}
      >
        Limpar clientes selecionados
      </DefaultButton>
    </PageContainer>
  );
}
