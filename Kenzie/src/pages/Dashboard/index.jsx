import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { api } from '../../services/api';
import { StyleDashboard } from './style';

const Dashboard = () => 
{
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState([]);

  const validatingUser = () =>
  {
    const token = localStorage.getItem('authToken');
    api.defaults.headers.authorization = `Bearer ${token}`;
      
    api.get('/profile')
    .then((response) => 
    {
      setUserLogged(response.data)
    })
    .catch((error) => navigate('/'))
  };

  useEffect(() =>
  {
    validatingUser();
  })

  return (
    <StyleDashboard>
      <NavBar/>
      <div className='header'>
        <h2>Olá, {userLogged.name}</h2>
        <p>{userLogged.course_module}</p>
      </div>
      <div>
        <h3>Que pena! Estamos em desenvolvimento</h3>
        <p className='descricao'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
    </StyleDashboard>
  )
}

export default Dashboard;