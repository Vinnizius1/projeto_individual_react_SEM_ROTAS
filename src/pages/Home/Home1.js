import { useState, useEffect } from "react";
import ModalUser from "../modal/ModalUser";
import ValidCard from "../../components/validCard/ValidCard";
import InvalidCard from "../../components/invalidCard/InvalidCard";
import { APIGet } from "../../data/APIGet";
import Button from "../../components/button/Button";
import styles from "./styles.module.css";

const Home1 = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [userOn, setUserOn] = useState({});
  const [valid, setValid] = useState(0);

  // Paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [usuariosPorPagina, setUsuariosPorPagina] = useState(7);

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


  /* Abre o modal enviando os dados do usuário clicado */
  function abreModal(user) {
    setValid(1);
    setUserOn(user);
  }

  /* Pega os dados de usuários atuais */
  const indexDoUltimoUsuario = paginaAtual * usuariosPorPagina;
  const indexDoPrimeiroUsuario = indexDoUltimoUsuario - usuariosPorPagina;
  const usuariosAtuais = users.slice(indexDoPrimeiroUsuario, indexDoUltimoUsuario);

  return (
    <div className={styles.container} id="home">
      {isPending ? (
        <h1 style={{ fontSize: "3rem", fontFamily: "cursive" }}>
          Carregando.......
        </h1>
      ) : (
        <h1>Lista de Usuários</h1>
      )}

      <>
        {usuariosAtuais.map((user) => {
            // console.log(user)
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
                <Button color="primary" executaFuncao={()=>abreModal(user)}>
                  Pagar
                </Button>
              </div>
            </div>
          );
        })}

        {valid === 1 && <ModalUser titulo="Pagamento para" subtitulo={userOn.name} setValid={setValid} />}

        {valid === 2 && <ValidCard setValid={setValid} />} 

        {valid === 3 && <InvalidCard setValid={setValid} />} 
      </>
    </div>
  );
};

export default Home1;
