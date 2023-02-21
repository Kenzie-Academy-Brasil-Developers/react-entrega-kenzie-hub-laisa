import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { StyleLogin } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import { UserContext } from '../../providers/UserContext';
import InputPassword from '../../components/InputPassword';
import { EditTechnology } from '../../components/EditTechnology';

const schema = yup.object({
  email: yup.string().required('Email obrigatório'),

  password: yup.string().required('Senha obrigatória')
})
.required();

const Login = () => 
{
  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) });
  
  const { loginUser } = useContext(UserContext);

  return (
    <StyleLogin>
      <header>
        <img src={Logo} />
      </header>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginUser)}>
      <Input className='input'
        id='email'
        type='text'
        label='Email'
        placeholder='Digite aqui seu email'
        error={errors.email?.message}
        {...register('email')}
      />
      <InputPassword id='password' label='Senha' placeholder='Digite aqui sua senha' register={register('password')}/>
      <button className='entrar' type='submit'>Entrar</button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Link className='cadastre' to='/register'>Cadastre-se</Link>
    </StyleLogin>
  )
}

export default Login;