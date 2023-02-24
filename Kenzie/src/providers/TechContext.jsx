import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) =>
{
  const [id, setId] = useState('');
  const token = localStorage.getItem('@Token');
  const { modalOpen, setUserLogged, modalEdit, setModalEdit, setModalOpen, userLogged } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => 
  {
    async function techs()
    {
      try
      {
        const response = await api.get('profile', 
        {
          headers:
          {
            Authorization: `Bearer ${token}`
          }
        })
        setUserLogged(response.data)
      }catch(err)
      {
        
      }
    }
    techs()
  }, [token, modalOpen, modalEdit])

  const createTechs = async(data) =>
  {
    try
    {
      await api.post('users/techs', data, 
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Tecnologia criada')
      await api.get('/profile', 
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
      })
      setModalOpen(false)
    }
    catch(error) 
    {

    }
  }

  async function deleteTech(e)
  {
    e.preventDefault();
    try
    {
      await api.delete(`/users/techs/${id}`,  
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Tecnologia excluida com sucesso')
      setModalEdit(false)
    }
    catch(error)
    {
      toast.error('Não foi possível excluir')
    }
  }

  async function upTech(data)
  {
    try
    {
      await api.put(`users/techs/${id}`, data, 
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
      })
      const requisition = (data) =>
      {
        if(token)
        {
          api.defaults.headers.authorization = `Bearer ${token}`;
          api.get('profile', data)
          .then((response) => 
          {
            setUserLogged(response.data);
            navigate('/dashboard');
          })
          .catch((error) => 
            console.log(error)
          );
        }
      };
      requisition();
      toast.success('Atualizado com sucesso');
      setModalEdit(false);
    }catch(error)
    {
      toast.error('Não foi possivel atualizar');
    }
  }

  return (
    <>
      <TechContext.Provider value={{ createTechs, upTech, deleteTech, id, setId }}>
        {children}
      </TechContext.Provider>
    </>
  )
}