import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) =>
{
  const [id, setId] = useState('');
  const token = localStorage.getItem('@Token');
  const { modalOpen, setUserLogged, modalOppen, setModalOppen, setModalOpen } = useContext(UserContext);

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
      }catch(error)
      {
        toast.error('Tecnologias não encotradas')
      }
    }
    techs()
  }, [token, modalOpen, modalOppen])

  const createTechs = async(data) =>
  {
    try
    {
      await api.post('users/techs', data, 
      {
        headers:
        {
          Authorization: `Bearer ${localStorage.getItem('@Token')}`
        }
      })
      toast.success('Tecnologia criada')
      setModalOpen(false)
    }
    catch(error) 
    {
      console.log(error);
      toast.error('Ops! Algo deu errado')
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
      setModalOppen(false)
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
      toast.success('Atualizado com sucesso')
      setModalOppen(false)
    }catch(error)
    {
      toast.error('Não foi possivel atualizar')
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