import { Link } from 'react-router-dom';
import { GoStop } from 'react-icons/go';

import '../Styles/pages/alert.css';

export default function NotFound() {
  return (
    <div id="page-alert" className="fadeIn">
      <GoStop color="#FFF" size={150} />

      <h1>
        Ops... Página não Encontrada
      </h1>

      <Link to="/zoo/list">Voltar para o Zoo!</Link>
    </div>
  );
}