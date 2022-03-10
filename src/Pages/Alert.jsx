import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import '../Styles/pages/alert.css';

export default function AlertPage() {
  return (
    <div id="page-alert" className="fadeIn">
      <FiCheckCircle color="#FFF" size={150} />

      <h1>
        Ação Realizada com Sucesso!
      </h1>

      <Link to="/zoo/list">Voltar para o Zoo!</Link>
    </div>
  );
}