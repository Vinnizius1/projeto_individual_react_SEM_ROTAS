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

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>

      {users.map((user) => {
        return (
          <div className="usuario" key={user.id}>
            <img src={user.img} alt={user.name} />

            <div className="usuario-dados">
              <h3>
                <span>Nome do Usuário:</span> {user.name}
              </h3>

              <h3>
                ID: {user.id} - Username: {user.username}
              </h3>
            </div>

            <button type="submit" value="Submit">
              Pagar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
