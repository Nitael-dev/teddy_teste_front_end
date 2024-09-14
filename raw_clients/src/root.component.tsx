import {
  PageContainer,
  DefaultButton,
  FlexList,
  NumberedPager,
  ClientCard,
} from "../../intro/src/shared/components";

import { CLIENTS_MOCK } from "../../intro/src/shared/mocks/clients.mock";

import { useState } from "react";

import "../../intro/src/shared/components/typograph.css";
import "./root.style.css";
import {
  ConclusionModal,
  CreateModal,
  EditModal,
  ExcludeModal,
} from "./modals";
import {
  RawClientProps,
  UserDTO,
} from "../../intro/src/shared/interfaces/clients";

const SELECTABLE_LIMITS = [16, 12, 8, 4];

export default function Root(props) {
  const [limit, setLimit] = useState(16);

  const [clients, setClients] = useState<UserDTO[]>(CLIENTS_MOCK);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [trashModalOpen, setTrashModalOpen] = useState(false);
  const [conclusionModalOpen, setConclusionModalOpen] = useState(false);

  const [selectedClient, setSelectedClient] = useState<RawClientProps>(
    {} as RawClientProps
  );

  const handleModal = (type: "create" | "edit" | "trash" | "conclusion") => {
    switch (type) {
      case "create":
        setCreateModalOpen((old) => !old);
        break;
      case "edit":
        setEditModalOpen((old) => !old);
        break;
      case "trash":
        setTrashModalOpen((old) => !old);
        break;
      default:
        setConclusionModalOpen((old) => !old);
        break;
    }
  };

  const handleLimit = (val) => {
    setLimit(val);
  };

  const excludeClientAction = (id: number) => {
    setClients((old) => old.filter((__, index) => index !== id));
  };

  return (
    <>
      <PageContainer
        style={{
          width: "80%",
          height: "100%",
          margin: "0 10%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 22,
        }}
      >
        <div className="top_wrapper">
          <span className="info_title">
            <strong>{CLIENTS_MOCK.length} </strong>
            clientes encontrados:
          </span>
          <div className="select_wrapper">
            <span>Clientes por página:</span>
            <select
              className="limit_select"
              onChange={({ target: { value } }) => {
                handleLimit(value);
              }}
            >
              {SELECTABLE_LIMITS.map((val) => (
                <option value={val} selected={val === limit}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
        <FlexList
          containerStyle={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
          data={clients}
          renderItem={(item, index) => {
            return (
              <ClientCard
                onEditClick={() => {
                  setSelectedClient({
                    ...item,
                    id: index,
                  });
                  handleModal("edit");
                }}
                onTrashClick={() => {
                  setSelectedClient({
                    ...item,
                    id: index,
                  });
                  handleModal("trash");
                }}
                {...item}
              />
            );
          }}
        />
        <DefaultButton
          onClick={() => handleModal("create")}
          style={{
            marginTop: 20,
          }}
        >
          Criar cliente
        </DefaultButton>
        <NumberedPager pages={Number((256 / limit).toFixed(0))} />
      </PageContainer>
      <ConclusionModal
        isOpen={conclusionModalOpen}
        handleModal={() => handleModal("conclusion")}
      />
      <CreateModal
        isOpen={createModalOpen}
        handleModal={() => {
          if (createModalOpen === true) {
            setTimeout(() => handleModal("conclusion"), 300);
          }
          handleModal("create");
        }}
      />
      <EditModal
        isOpen={editModalOpen}
        client={selectedClient}
        handleModal={() => {
          if (editModalOpen === true) {
            setTimeout(() => handleModal("conclusion"), 300);
          }
          handleModal("edit");
        }}
      />
      <ExcludeModal
        isOpen={trashModalOpen}
        handleModal={() => {
          if (trashModalOpen === true) {
            setTimeout(() => handleModal("conclusion"), 300);
          }
          handleModal("trash");
        }}
        client={selectedClient}
        excludeAction={excludeClientAction}
      />
    </>
  );
}
