import { Link } from 'react-router-dom';
import { FiUpload, FiPlus } from 'react-icons/fi';

import landing from '../Assets/images/landing.svg';

import '../Styles/pages/landing.css';

export default function Landing() {
  return (
    <div id="page-landing">
      <div>
        <div className="block-content">
          <h1>Zoo!</h1>
          <h2>
            Ei, você já pensou em ter seu próprio Zoológico? 
            <br/>
            <span>
              Coloque os animes que você quiser no seu Zoo e divirta-se. 
            </span>
          </h2>
        </div>

        <div className="landing-group-buttons">
          <Link to="/zoo/formAnimal/plus">
            <FiPlus size={45} className="ico-landing" />
            Novo Animal
          </Link>
          <Link to="/zoo/list">
            <FiUpload size={40} className="ico-landing" />
            Entrar no Zoo!
          </Link>
        </div>
      </div>

      <div>
        <img src={landing} alt="Zoo!"/>
      </div>
    </div>
  )
};