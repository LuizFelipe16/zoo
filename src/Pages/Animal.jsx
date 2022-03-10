import { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Components/Loading';
import Sidebar from '../Components/Sidebar';
import api from '../Services/api';

import '../Styles/pages/animal.css';

export default function Animal() {
  const history = useHistory();
  const params = useParams();

  const [load, setLoad] = useState(true);

  const [activeIndexImageAnimal, setActiveIndexImageAnimal] = useState(0);
  const [animal, setAnimal] = useState([]);

  function handleDeleteAnimal(id) {
    api.delete(`/animals/${id}`).then(() => {
      history.push('/zoo/alert');
    });
  }

  function handleUpdateAnimalForPage(id) {
    history.push(`/zoo/formAnimal/${id}`);
  }

  useEffect(() => {
    api.get(`/animals/${params.id}`).then(response => {
      setAnimal(response.data);

      setLoad(false);
    });
  }, [params.id]);

  if (load) {
    return (
      <Loading />
    );
  }

  return (
    <div id="page-animal">
      <Sidebar page="Animal" />

      <div className="page-animal-content">
        <div className="header">
          <img src={animal.images[activeIndexImageAnimal].url} alt={animal.name} />

          <div className="list-images">
            {animal.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndexImageAnimal(index)}>
                  <img
                    src={image.url}
                    className={activeIndexImageAnimal === index ? `activeImage` : ''}
                    alt={animal.name} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="body">
          <div className="grid-blocks">
            <div className="block">
              <h1>Sobre</h1>
              <p>
                {animal.about}
              </p>
            </div>

            <div className="block">
              <h1>{animal.name} </h1>

              <p>
                Meu apelido é <strong> {animal.nickname} </strong>.
                  <br />
                <br />
                  Tenho <strong> {animal.age} </strong> de idade.
                </p>
            </div>

            <div className="block">
              {
                animal.savage ? (
                  <div className="containerSavage containerSavageRed">
                    <FiInfo size={30} color="#FF669D" />
                    É um animal selvagem
                  </div>
                ) : (
                  <div className="containerSavage containerSavageGreen">
                    <FiInfo size={30} color="#39CC83" />
                    Não é um animal selvagem
                  </div>
                )
              }
            </div>
          </div>

          <div className="options">
            <button
              onClick={() => { handleDeleteAnimal(animal.id) }}
              style={{ backgroundColor: '#dc143c' }}
              type="button"
            >
              Doar Animal
            </button>
            {/* <button 
              onClick={() => { handleUpdateAnimalForPage(animal.id) }}
              style={{ backgroundColor: '#ffc82d' }} 
              type="button"
            >
              
              Alterar informações
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}