import React from 'react';
import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { UserContext } from '../../providers/UserContext';

const Card = ({ id, status, title }) => 
{
  const { setId } = useContext(TechContext);
  const { setModalEdit, setAlt, setHab } = useContext(UserContext);

  function idUser() {
    setId(id)
    setModalEdit(true)
    setAlt(title)
    setHab(status)
  }
   
  return (
    <li onClick={idUser} id={id}>
      <h4>{title}</h4>
      <h5>{status}</h5>
    </li>
  )
}

export default Card;