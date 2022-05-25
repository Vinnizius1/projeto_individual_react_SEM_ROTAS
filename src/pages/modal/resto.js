// if (card_number === "1111111111111111") {
    //   fetch(APIPost, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(cartaoValido),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       handleValidCard(data);
    //     })
    //     .catch((err) => console.log(err));
    // } else if (card_number === "4111111111111234") {
    //   fetch(APIPost, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(cartaoInvalido),
    //   })
    //     .then(() => handleInvalidCard())
    //     .catch((err) => console.log(err));
    // }


/* Função handleInvalidCard para lidar com os dados do POST */
// function handleInvalidCard() {
  // Seleciona as 3 div´s principais da DOM no Modal
  // const title = document.querySelector(`.${styles.title}`);
  // const body = document.querySelector(`.${styles.body}`);
  // title.innerHTML = "Recibo de pagamento";
  // body.innerHTML = "Cartão Inválido";
  // setTimeout(() => {
  //   navigate("/");
  // }, 3000);
  // setFinal(true)
// }

/* Função handleValidCard para lidar com os dados do POST */
// function handleValidCard(dadosDoPost) {
//   const title = document.querySelector(`.${styles.title}`);
//   const body = document.querySelector(`.${styles.body}`);

//   title.innerHTML = "Recibo de pagamento";
//   body.innerHTML = dadosDoPost.status;

//   setTimeout(() => {
//     navigate("/");
//   }, 3000);
// }