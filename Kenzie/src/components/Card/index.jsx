import React from 'react';
import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { UserContext } from '../../providers/UserContext';
import { VscEdit } from 'react-icons/vsc';

const Card = ({ id, status, title }) => 
{
  const { setId } = useContext(TechContext);
  const { setModalOppen, setAlt, setHab } = useContext(UserContext);

  function idUser() {
    setId(id)
    setModalOppen(true)
    setAlt(title)
    setHab(status)
  }
   
  return (
    <li onClick={idUser} id={id}>  
      <button className='edite' onClick={() => setModalOppen(true)}><VscEdit/></button>
      <h4>{title}</h4>
      <h5>{status}</h5>
    </li>
  )
}

export default Card;