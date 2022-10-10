import { useState, useEffect } from "react";
import ModalUser from "../modal/ModalUser";
import ValidCard from "../../components/validCard/ValidCard";
import InvalidCard from "../../components/invalidCard/InvalidCard";
import { APIGet } from "../../data/APIGet";

// Botão componentizado
import Button from "../../components/button/Button";

// Paginação
import { Pagination } from "../../components/Pagination";

// Estilos
import styles from "./styles.module.css";

const Home1 = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState({});
  const [valid, setValid] = useState("home");

  // Filtro
  const [query, setQuery] = useState("");

  // Paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [usuariosPorPagina] = useState(4);

  /* GET Fetch */
  useEffect(() => {
    setIsPending(true);
    fetch(APIGet)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsPending(false);
      })
      .catch((err) => console.log("A requisição falhou", err));
  }, []);

  /* Abre o modal enviando os dados do usuário clicado */
  function abreModal(user) {
    setValid("modal");
    setData(user);
  }

  /* Pega os dados de usuários atuais e depois muda a página*/
  const indexDoUltimoUsuario = paginaAtual * usuariosPorPagina;
  const indexDoPrimeiroUsuario = indexDoUltimoUsuario - usuariosPorPagina;
  // "usuariosAtuais" é igual a "users"
  const usuariosAtuais = users.slice(
    indexDoPrimeiroUsuario,
    indexDoUltimoUsuario
  );
  const paginate = (numeroDaPagina) => setPaginaAtual(numeroDaPagina);

  /* Função FILTRO do input */
    const keys = ["name", "username"];
    const search = (usuarios) => {
      return usuarios.filter((usuario) => 
        keys.some((key) => usuario[key].toLowerCase().includes(query))
      );
    };


  /* Return da FUNÇÃO Home1 */
  return (
    <div className={styles.container} id="home">
      {isPending ? (
        <h1 style={{ fontSize: "3rem", fontFamily: "cursive" }}>
          Carregando...
        </h1>
      ) : (
        <>
          <h1>Lista de Usuários</h1>
          <input
            type="text"
            placeholder="Procure..."
            className={styles.input_search}
            onChange={(e) => setQuery(e.target.value)}
          />
        </>
      )}

      {search(usuariosAtuais).map((user) => {
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
              <Button color="primary" executaFuncao={() => abreModal(user)}>
                Pagar
              </Button>
            </div>
          </div>
        );
      })}

      <Pagination
        usuariosPorPagina={usuariosPorPagina}
        usuariosTotais={users.length}
        paginate={paginate}
      />

      {valid === "modal" && <ModalUser setValid={setValid} data={data} />}

      {valid === "validCard" && <ValidCard setValid={setValid} />}

      {valid === "invalidCard" && <InvalidCard setValid={setValid} />}
    </div>
  );
};

export default Home1;
