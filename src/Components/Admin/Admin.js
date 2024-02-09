import React, { useEffect, useState } from "react";
import { Table, Button, Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Admin.css";
import axios from "axios";
import User from "./User";
import Require from "../../Require";

const Admin = () => {
  const [users, setUsers] = useState();
  const [isModalOpenEdit, setIsModalEditOpen] = useState(false);
  const [usuarioSelecionado, usuarioSelecionadoSet] = useState([]);

  const getData = async () => {
    const data = await axios.get("http://localhost:5000/api/v1/questions");
    setUsers(data.data.user);
  };

  const handleOkEdit = () => {
    setIsModalEditOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalEditOpen(false);
  };

  const showModalEdit = () => {
    setIsModalEditOpen(true);
  };

  const onClickPreguntas = (user) => {
    usuarioSelecionadoSet(user);
    showModalEdit();
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Nombre",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            size="large"
            autoFocus
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "apellido",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "cedula",
    },
    {
      title: "Date",
      dataIndex: "companyName",
      key: "cedula",
    },

    {
      title: "Quiz Score",
      dataIndex: "score",
      key: "celular",
      render: (text) => {
        return new Intl.NumberFormat("es-DO").format(text || 0);
      },
    },
    {
      title: "Acción",
      key: "operation",
      fixed: "right",
      width: 250,
      render: (text, user) => [
        <Button
          type="primary"
          key="ver"
          style={{ marginLeft: "10px" }}
          onClick={() => onClickPreguntas(user)}
        >
          Ver Preguntas
        </Button>,
      ],
    },
  ];

  return (
    <div className="admin">
      <h1>Usuarios</h1>
      <Table
        style={{ width: "60%" }}
        columns={columns}
        dataSource={users}
        loading={!users ? true : false}
      />
      <Modal
        title={`Preguntad de ${usuarioSelecionado?.name}`}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        width={1400}
        okText="Esta bien"
        cancelText="Cerrar"
        style={{ height: "80vh" }}
      >
        <User usuario={usuarioSelecionado} />
      </Modal>
    </div>
  );
};

export default Require(Admin);
