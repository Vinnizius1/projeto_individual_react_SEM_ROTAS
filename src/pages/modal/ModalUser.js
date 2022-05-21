import { Link, useParams } from "react-router-dom";
import "./styles.css";

function ModalUser(props) {
  const {name} = useParams();
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button type="text" onClick={() => props.closeModal(false)}>X</button>
        </div> */}
        <div className="title">
          <p>Pagamento para: {name} </p>
        </div>
        <div className="body">
          <input type="text" placeholder="input 1" />
          <input type="text" placeholder="input 2" />
        </div>
        <div className="footer">
          <button>Pagar</button>
          <Link to="/">
            <button id="cancelBtn">Cancelar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
