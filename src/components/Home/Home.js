import { useState, useEffect } from "react";
import { APIMock } from "../Users";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(APIMock)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      });
  }, []);

  /* Função handleClick */
  function handleClick (user) {
    // console.log("O nome deste usuário(a) é", user.name);


  }

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>

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

            <button type="submit" value="Submit" onClick={() => handleClick(user)}>
              Pagar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
