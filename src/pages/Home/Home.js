import { useState, useEffect } from "react";
import ModalUser from "../modal/ModalUser";
import { APIGet } from "../../data/APIGet";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./styles.module.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);

  /* GET Fetch */
  useEffect(() => {
    setIsPending(true);
    fetch(APIGet)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
        setIsPending(false);
      })
      .catch((err) => console.log("A requisição falhou", err));
  }, []);

  return (
    <div className={styles.container} id="home">
      {modal && <ModalUser closeModal={setModal} />}
      {isPending ? (
        <h1 style={{ fontSize: "3rem", fontFamily: "cursive" }}>
          Carregando.......
        </h1>
      ) : (
        <h1>Lista de Usuários</h1>
      )}

      {/* Listagem dos usuários com MAP */}
      {users.map((user) => {
        return (
          <div className={styles.usuario} key={user.id}>

            <div className={styles.teste}>
              <img
                className={styles.img_usuario}
                src={user.img}
                alt={user.name}
              />

              <div className={styles.usuario_dados}>
                <p className={styles.p_usuario}>
                  Nome do Usuário: <span>{user.name}</span>
                </p>

                <p className={styles.p_usuario}>
                  ID: {user.id} - Username: {user.username}
                </p>
              </div>
            </div>

            <div className={styles.botao}>
              <Link to={`/user/${user.name}`}>
                <Button primary="primary">Pagar</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
