import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Loading from '../Components/Loading';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import api from '../Services/api';

import '../Styles/pages/list-animals.css';

export default function ListAnimals() {
  const history = useHistory();

  const [load, setLoad] = useState(true);

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    api.get('/animals').then(response => {
      setAnimals(response.data);
      setLoad(false);
    });
  }, []);

  if (load) {
    return (
      <Loading />
    );
  }

  return (
    <div id="page-list-animals">
      <Sidebar page="Zoo!" />

      <div className="page-list-content">
        <div className="header">
          <h1>
            Veja todos os animais que você tem em seu Zoo!
          </h1>
        </div>

        <div className="grid-list-cards-animals fadeIn">
          {animals.map(animal => {
            return (
              <div key={animal.id} className="card-animal">
                <header>
                  <img key={animal.images[0].id} src={animal.images[0].url} alt={animal.name} />
                </header>

                <div className="card-body">
                  <span>
                    {
                      animal.nickname === 'Sem Apelido'
                        ? animal.name
                        : animal.nickname
                    }
                  </span>

                  <button onClick={() => { history.push(`/zoo/animal/${animal.id}`) }} type="button">
                    <FaCaretRight size={25} color="#32BF84" />
                  </button>

                  <div className="tooltip-button">
                    Ver informações
                    <FaCaretDown style={{
                      zIndex: 1,
                      position: 'absolute',
                      marginTop: 46
                    }} size={30} color="#32BF84" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}