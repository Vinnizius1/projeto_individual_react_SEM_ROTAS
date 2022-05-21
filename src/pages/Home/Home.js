import { useState, useEffect } from "react";
import ModalUser from "../modal/ModalUser";
import { APIMock } from "../../data/APIMock";
import { Link } from "react-router-dom";
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

  // Função que abre a página Modal
  // function openModal() {
  //   setModal(true);
  // }

  return (
    <div className="container" id="home">
      {modal && <ModalUser closeModal={setModal} user={users} />}
      <h1>Lista de Usuários</h1>

      {/* Listagem dos usuários */}
      {users.map((user) => {
        return (
          <div className="usuario" key={user.id}>
            <img className="img-usuario" src={user.img} alt={user.name} />

            <div className="usuario-dados">
              <p className="p-usuario">
                Nome do Usuário: <span>{user.name}</span>
              </p>

              <p className="p-usuario">
                ID: {user.id} - Username: {user.username}
              </p>
            </div>

            <Link to={`/user/${user.name}`}>
              <button className="btn-pagar">Pagar</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
