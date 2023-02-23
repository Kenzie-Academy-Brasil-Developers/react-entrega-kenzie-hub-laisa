import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => 
{
  const [userLogged, setUserLogged] = useState([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOppen, setModalOppen] = useState(false);
  const [alt, setAlt] = useState(null);
  const [hab, setHab] = useState(null);
  const token = localStorage.getItem('@Token');

  const loginUser = (data) =>
  {
    api.post('https://kenziehub.herokuapp.com/sessions', data)
    .then((response) =>
    {
      localStorage.clear();
      localStorage.setItem('@Token', response.data.token);
      localStorage.setItem('@UserId', response.data.user.id)
      setTimeout(() => 
      {
        navigate('/');
      }, 1000);
    })
    .catch((error) =>
    {
      toast.error('Email ou senha incorretos');
    });
    console.log(data);
  };

  useEffect(() =>
  {
    const requisition = (data) =>
    {
      if(token) 
      {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.get('/profile', data)
        .then((response) =>
        {
          setUserLogged(response.data)
          navigate('/dashboard');
        })
        .catch((error) => toast.error('Algo deu errado!'))
      }
    };
    requisition();
  }, [token])

  const registerUser = async(data) =>
  {
    delete data.passwordConfirmation
    try
    {
      await api.post('/users', data);
      navigate('/');
      toast.success('Conta criada com sucesso!');
    }catch(error)
    {
      toast.error('Ops! Algo deu errado');
    }
    console.log(data);
  };

  const validatingUser = () =>
  {
    const token = localStorage.getItem('@Token');
    api.defaults.headers.authorization = `Bearer ${token}`;
      
    api.get('/profile')
    .then((response) => 
    {
      setUserLogged(response.data)
    })
    .catch((error) => navigate('/'))
  };

  return (
    <UserContext.Provider value={{ loginUser, registerUser, validatingUser, userLogged, modalOpen, setModalOpen, modalOppen, setModalOppen, alt, setAlt, hab, setHab }}>
      {children}
    </UserContext.Provider>
  )
}