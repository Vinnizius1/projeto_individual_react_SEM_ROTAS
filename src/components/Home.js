import { useState, useEffect } from "react";
import { APIMock } from "./Users";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(APIMock)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>

      {users.map((user) => {
        return (
          <div className="usuario" key={user.id}>
            <div className="usuario-img">
              <img src={user.img} alt={user.name} />
            </div>

            <div className="usuario-dados">
              <h3>{user.name}</h3>
              <p>
                ID: {user.id} - Username: {user.username}
              </p>
            </div>

            <div className="usuario-botao" style={{marginBottom: "5px"}}>
              <button type="submit" value="Submit">Pagar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
