import React from "react";

export const Pagination = ({ usuariosPorPagina, usuariosTotais, paginate }) => {
  const numeroDePaginas = [];

  for (
    let index = 1;
    index <= Math.ceil(usuariosTotais / usuariosPorPagina);
    index++
  ) {
    numeroDePaginas.push(index);
  }

  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        {numeroDePaginas.map((numero) => (
          <li key={numero} className="page-item">
            <a onClick={()=> paginate(numero)} href="!#" className="page-link">{numero}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
