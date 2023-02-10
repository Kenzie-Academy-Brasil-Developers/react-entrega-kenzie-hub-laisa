import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { StyleLogin } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Input from '../../components/Input';

const schema = yup.object({
  email: yup.string().required('Email obrigatório'),

  password: yup.string().required('Senha obrigatória')
})
.required();

const Login = () => 
{
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState([]);

  const loginUser = (data) =>
  {
    api.post('https://kenziehub.herokuapp.com/sessions', data)
    .then((response) =>
    {
      localStorage.clear();
      localStorage.setItem('authToken', response.data.token);
      setTimeout(() => 
      {
        navigate('/');
      }, 1000);
    })
    .catch((error) =>
    {
      toast.error('Email ou senha incorretos');
    });
  };

  const requisition = (data) =>
  {
    const token = localStorage.getItem('authToken');

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

  useEffect(() =>
  {
    requisition();
  })

  return (
    <StyleLogin>
      <header>
        <img src={Logo} />
      </header>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginUser)}>
      <Input
          id='email'
          type='text'
          label='Email'
          placeholder='Digite aqui seu email'
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          id='password'
          type='password'
          label='Senha'
          placeholder='Digite aqui sua senha'
          error={errors.password?.message}
          {...register('password')}
        />
        
        <button className='entrar' type='submit'>Entrar</button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Link className='cadastre' to='/register'>Cadastre-se</Link>
    </StyleLogin>
  )
}

export default Login;