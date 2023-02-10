import Logo from '../../assets/Logo.svg';
import '../../App';
import { StyleNavBar } from './style';
import { useNavigate } from 'react-router-dom';

function NavBar ()
{
  const navigate = useNavigate();
  const storageClear = () =>
  {
    localStorage.clear();
    navigate('/')
  }
  return (
    <StyleNavBar>
      <img src={Logo} />
      <button className='sair' onClick={storageClear}>Sair</button>
    </StyleNavBar>
  )
}

export default NavBar;