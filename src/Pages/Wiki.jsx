import Sidebar from '../Components/Sidebar';
import { wiki } from '../Services/wiki';

import '../Styles/pages/wiki.css';

export default function Wiki() {
  return (
    <div id="page-wiki-animals">
      <Sidebar page="Wiki" />

      <div className="page-wiki-content">
        <div className="header">
          <h1>
            Aqui você irá encontrar uma pequena lista de animais incríveis que você pode ter em seu Zoo! Mas você pode colocar qualquer animal que quiser.
          </h1>
        </div>

        <div className="grid-wiki-cards-animals fadeIn">
          {wiki.map(animal => {
            return (
              <div className="wiki-animal">
                <header>
                  <img src={animal.photo} alt="Animal" />
                </header>

                <div className="wiki-body">
                  <span>{animal.name}</span>

                  <p>
                    {animal.about}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}