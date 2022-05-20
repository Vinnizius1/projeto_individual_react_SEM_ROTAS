import { useState, useEffect } from "react";
import ModalUsuario from "../../components/Modal/index";
import { APIMock } from "../../data/APIMock";
import "./styles.css";

/* Função Home */
const Home = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  /* GET Fetch */
  useEffect(() => {
    fetch(APIMock)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container" id="home">
      <h1>Lista de Usuários</h1>
      {openModal && <ModalUsuario />}

      {users.map((user) => {
        return (
          <div className="usuario" key={user.id}>
            <img src={user.img} alt={user.name} />

            <div className="usuario-dados">
              <p>
                <span>Nome do Usuário:</span> {user.name}
              </p>

              <p>
                ID: {user.id} - Username: {user.username}
              </p>
            </div>

            <button onClick={() => setOpenModal(true)}>Pagar</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
