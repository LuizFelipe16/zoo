import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Input from '../Components/Input';
import Textarea from '../Components/Textarea';
import { FaPlus } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { BiHappyAlt } from 'react-icons/bi';
import api from '../Services/api';

import '../Styles/pages/form-animal.css';
import Loading from '../Components/Loading';

export default function FormAnimal() {
  const history = useHistory();
  const params = useParams();
  const [load, setLoad] = useState(true);
  
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [about, setAbout] = useState('');
  const [age, setAge] = useState(1);
  const [check_savage, setCheckSavage] = useState(true);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const nationality = 'Brasileira';

  async function handleCreateAnimal(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('nickname', nickname);
    data.append('about', about);
    data.append('nationality', nationality);
    data.append('age', String(age));
    data.append('savage', String(check_savage));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('/animals', data).then(() => {
        history.push('/zoo/alert');
    });
    
  }

  function handleSelectImages(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  function handleDeleteImage(index) {
    let imagesArrayCopy = [ ...images ];
    let previewImagesArrayCopy = [ ...previewImages ];

    previewImagesArrayCopy.splice(index, 1);
    imagesArrayCopy.splice(index, 1);

    setImages(imagesArrayCopy);
    setPreviewImages(previewImagesArrayCopy);
  }

  // useEffect(() => {
  //   if(Number(params.id) >= 0) {
  //     api.get(`/animals/${params.id}`).then(response => {
  //       const animal = response.data;

  //       setImages(animal.images);
  //       setPreviewImages(animal.images);
  //       setName(animal.name);
  //       setNickname(animal.nickname);
  //       setAbout(animal.about);
  //       setAge(animal.age);
  //       setCheckSavage(animal.savage);

  //       setLoad(false);
  //     });
    
  //   } else {
  //     setLoad(false);
  //   }
  // }, [params.id]);

  return (
    <div id="page-form">
      <Sidebar page="+ Animal" />

      <div className="page-form-content">
        <div className="header">
          <h1>
            Preecha os campos abaixo para adicionar um novo Animal ao seu Zoo!
          </h1>

          <BiHappyAlt color="#fff" size={60} />
        </div>

        <form onSubmit={handleCreateAnimal} className="fadeIn">
          <fieldset>
            <legend>Coloque um Novo Animal no Zoo!</legend>

            <Input
              value={name}
              change={e => { setName(e.target.value) }}
              name="name"
              type="text"
              text="Qual o Nome do Animal"
              label="Nome"
            />

            <Input
              value={nickname}
              change={e => { setNickname(e.target.value) }}
              name="nickname"
              type="text"
              text="Dê um Apelido ao Animal"
              label="Apelido"
            />

            <Textarea
              value={about}
              change={e => { setAbout(e.target.value) }}
              name="about"
              text="Fale um pouco mais sobre o novo animal"
            />
 
            <Input
              value={age}
              change={e => { setAge(e.target.value) }}
              name="age"
              type="number"
              text="Qual a Idade do Animal"
              label="Idade"
              min="1"
            />

            <div className="images-container">
              <label htmlFor="image[]" id="photos-button"> 
                <FaPlus size={15} color="#32BF84" /> Fotos
              </label>
              <input 
                onChange={handleSelectImages}
                multiple 
                type="file" 
                id="image[]" 
              />
              <div className="images-preview">
                {previewImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={image.url ? image.url : image} alt="Imagem"/>
                      <button onClick={() => handleDeleteImage(index)} type="button"> 
                        <FiX size={19} color="#dc143c" /> 
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="buttons-checked">
              <button
                onClick={() => setCheckSavage(true)}
                type="button"
                className={`${check_savage ? 'task-check-true' : ''}`}
              >
                É um animal Selvagem
              </button>
              <button
                onClick={() => setCheckSavage(false)}
                type="button"
                className={`${check_savage ? '' : 'task-check-false'}`}
              >
                Não é um animal Selvagem
              </button>
            </div>
          </fieldset>

          <footer>
            <button type="reset" style={{ color: '#ec234b' }}>Não Colocar no Zoo!</button>
            <button type="submit" style={{ color: '#04D361' }}>Colocar no Zoo!</button>
          </footer>
        </form>
      </div>
    </div>
  );
}