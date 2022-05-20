import "./styles.css";

function ModalUser(props) {
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => props.closeModal(false)}>X</button>
        </div>
        <div className="title">
          <p>Pagamento para 'Nome do Usuario'</p>
        </div>
        <div className="body">
          <input type="text" placeholder="input 1" />
          <input type="text" placeholder="input 2" />
        </div>
        <div className="footer">
          <button>Pagar</button>
          <button onClick={() => props.closeModal(false)} id="cancelBtn">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
