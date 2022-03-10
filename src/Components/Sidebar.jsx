import { Link } from 'react-router-dom';
import { MdInfoOutline } from 'react-icons/md';
import { FiMenu, FiPlus, FiFolder } from 'react-icons/fi';

import '../Styles/components/sidebar.css';

export default function Sidebar(props) {
  return (
    <aside className="sidebar">
      <FiMenu className="menu-ico" size={36} color="#fff" />
      <h1 className="fadeIn">{props.page}</h1>

      <div className="menu-links">
        <div className="link-container fadeIn">
          <Link to="/zoo/list">
            <FiFolder size={22} color="#fff" style={{ marginRight: 7 }} />
            Zoo!
          </Link>
          <hr />
        </div>

        <div className="link-container fadeIn">
          <Link to="/zoo/formAnimal/plus">
            <FiPlus size={22} color="#fff" style={{ marginRight: 4 }} />
            Animal
          </Link>
          <hr />
        </div>

        <div className="link-container fadeIn">
          <Link to="/zoo/wiki">
            <MdInfoOutline size={22} color="#fff" style={{ marginRight: 4 }} />
            Wiki
          </Link>
          <hr />
        </div>
      </div>

      <div className="sidebar-footer fadeIn">
        <h2>from</h2>
        <h3>Luiz Felipe</h3>
      </div>
    </aside>
  );
}