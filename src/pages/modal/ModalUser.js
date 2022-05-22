import { Link, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import "./styles.css";

function ModalUser(props) {
  const {name} = useParams();
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <p>Pagamento para: <span>{name}</span></p>
        </div>
        <div className="body">
          <input type="text" placeholder="R$ 0,00" />
          <select id="creditCard" name="creditCard">
            <option value="4111111111111234">Cartão com final 1234</option>
            <option value="1111111111111111">Cartão com final 1111</option>
          </select>
        </div>
        <div className="footer">
          <Button />
          <Link to="/">
            <button id="cancelBtn">Cancelar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
