import { useLocation, Link} from 'react-router-dom';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import "../styles/Sidebar_style.css";
import listNavbarItem from "../constant/listNavbarItem";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <Nav className='sidebar'>
      {/* <Button variant="primary">Primary</Button>{' '} */}
      <div className='mainNav'>
        {
          listNavbarItem.map((pageData, idx) =>
            <div className='content'
              style={{


              ...(location.pathname === pageData.page ? {} : null)
            }} 
            key={'link-route' + idx}
          >

            <Link to={pageData.page}>
              { pageData.name }
            </Link>
          </div>
        )
      }
        <div className='mt-5 '>
          <Link to={"/login"}>
            <Button>Logout</Button>
          </Link>
        </div>
      </div>


    </Nav>
    </div>
  );
}
  
export default Navbar;
  