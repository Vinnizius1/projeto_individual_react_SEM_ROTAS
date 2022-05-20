import { useState, useEffect } from "react";
import ModalUser from "../../components/modal/ModalUser";
import { APIMock } from "../../data/APIMock";
import "./styles.css";

/* Função Home */
const Home = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

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
      {modal && <ModalUser closeModal={setModal}/>}
      <h1>Lista de Usuários</h1>

      {/* Listagem dos usuários */}
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

            <button className="btn-pagar" onClick={() => setModal(true)}>Pagar</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
