import { PageContainer } from "./shared/components/page-container";

export default function Root(props) {
  console.log("teddy-intro", props);
  return (
    <PageContainer>
      <h2>Olá, seja bem-vindo!</h2>
      <input placeholder="Digite seu nome:" />
      <button type="button" className="btn btn-warning" title="Entrar">
        Entrar
      </button>
    </PageContainer>
  );
}
