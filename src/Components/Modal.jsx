import { useEffect, useState } from 'react';
import { FiX, FiInfo } from 'react-icons/fi';
import api from '../Services/api';
import { elementRemoveOrAddDisplayNone } from '../Services/functions';

import '../Styles/components/modal.css';

export default function Modal() {
  const [load, setLoad] = useState(true);

  const [activeIndexImageAnimal, setActiveIndexImageAnimal] = useState(0);
  const [animal, setAnimal] = useState([]);
  
  const id = localStorage.getItem('id_animal_update');
  
  useEffect(() => {
    api.get(`/animals/${id}`).then(response => {
      setAnimal(response.data);
      
      setLoad(false);
    });
  }, [id]);

  if (load) {
    return (
      <div className="display-none"></div>
    );
  }
  
  return (
    <div id="modal-animal" className="container-modal fadeOptions display-none">
      <button onClick={() => {setLoad(true); setAnimal([]); elementRemoveOrAddDisplayNone('modal-animal'); }} type="button">
        <FiX size={26} color="#dc143c" />
      </button>

      <div id="modal">
          <div className="header">
            <img src={animal.images[activeIndexImageAnimal].url} alt={animal.name} />

            <div className="list-images">
              {animal.images.map((image, index) => {
                return (
                  <button 
                    type="button"
                    onClick={() => setActiveIndexImageAnimal(index)}>
                    <img 
                      key={image.id} 
                      src={image.url}
                      className={`activeImage`}
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
                      Não é um animal selvagem
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
              <button style={{ backgroundColor: '#dc143c' }} type="button">
                Doar Animal
            </button>
              <button style={{ backgroundColor: '#ffc82d' }} type="button">
                Alterar informações
            </button>
            </div>
          </div>
        </div>
    </div>
  );
}