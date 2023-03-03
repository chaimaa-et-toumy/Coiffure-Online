import {Link} from 'react-router-dom';
export default function SideBar(){

return(  
  <>
<div className="sidebar">
  <div className="logo-details">
    <i className='bx bxl-c-plus-plus icon'></i>
    <div className="logo_name">page Dashboard</div>
    <i className='bx bx-menu' id="btn"></i>
  </div>
  <ul className="nav-list">
    <li>
    <Link to="/">
      <a href="/#">
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </Link>
    </li>
    <li>
      <Link to="/pharmacie">
      <a href="/#">
      <i class="bx bx-plus-medical"></i>
        <span className="links_name">page 2</span>
      </a>
      </Link>
      <span className="tooltip">page 2</span>
    </li>
    <li>
    <Link to="">
      <a href="">
        <i className='bx bx-edit'></i>
        <span className="links_name">page 3</span>
      </a>
      <span className="tooltip">page 3</span>
    </Link>
    </li>
    <li>
    <Link to="">
      <a href="">
        <i className='bx bx-comment'></i>
        <span className="links_name">page 4</span>
      </a>
      <span className="tooltip">page 4</span>
    </Link>
    </li>
    <li className="profile" role="button">
      <i className='bx bx-log-out' id="log_out"></i>
    </li>
  </ul>
</div>
</>
)
}