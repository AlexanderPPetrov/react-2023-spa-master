import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom"
import brandLogo from '../assets/logo.jpg';
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../context/UserContext';

function AppNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { currentUser } = useUserContext();

  const { t } = useTranslation();
  const navLinks = [
    {
      to: '/',
      title: t('navLinks.home'),
    },
    {
      to: '/admin',
      title: t('navLinks.admin'),
    },
    {
      to: '/movies',
      title: t('navLinks.movies'),
    },
    {
      to: '/users',
      title: t('navLinks.users'),
    },
    {
      to: '/weather',
      title: t('navLinks.weather'),
    },
    {
      to: '/booking',
      title: t('navLinks.booking'),
    }

  ]


  const isActive = (to) => {
    return currentPath === to
  }

  const getUserNavLinks = () => {
      if(!currentUser?.roles?.includes('ADMIN')) {
        return navLinks.filter(({ to }) => to !== '/admin')
      }
      return navLinks
  }

  const getNavLinks = () => {
    return getUserNavLinks().map((navLink, index) => {
      return <Nav.Link key={index}
                       as={Link}
                       className={isActive(navLink.to) ? 'active' : ''}
                       to={navLink.to}>
                         {navLink.title}
                       </Nav.Link>
    })
  }

  return (
    <Navbar bg="white" expand="lg" className="mb-2 mb-md-5">
      <Container>
        <Navbar.Brand href="#home">
          <img src={brandLogo} alt="ST 2023" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {getNavLinks()}
           <LanguageSwitch/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;