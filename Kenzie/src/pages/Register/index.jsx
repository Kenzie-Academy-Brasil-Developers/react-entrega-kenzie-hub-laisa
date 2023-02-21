import React, { useContext } from 'react';
import Logo from '../../assets/Logo.svg';
import { StyleRegister } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { UserContext } from '../../providers/UserContext';

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),

  email: yup.string().required('Email obrigatório'),

  password: yup.string().required('Senha obrigatória').matches(/(\d)/, 'Deve conter ao menos 1 número')
  .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
  .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
  .matches(/(\W|_)/, 'Deve conter no mínimo 1 caracter especial')
  .matches(/.{8,}/, 'Deve conter no minimo 8 caracteres'),

  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Confimação de senha deve ser igual a senha').required('Confirmação de senha é obrigatória'),

  bio: yup.string().required('Bio é obrigatório').matches(/.{8,}/, 'Deve conter no minimo 8 caracteres'),

  contact: yup.string().required('Contato é obrigatório'),

  course_module: yup.string().required('É preciso escolher o módulo que esta cursando')
})
.required();

const Register = () => 
{
  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) });
  const { registerUser } = useContext(UserContext);

  return (
    <StyleRegister>
      <header>
        <img src={Logo} />
        <Link className='voltar' to='/'>Voltar</Link>
      </header>
      <div className='cadastrarUsuario'>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>
      <form onSubmit={handleSubmit(registerUser)}>
        <Input
          id='name'
          type='text'
          label='Nome'
          placeholder='Digite aqui seu nome'
          error={errors.name?.message}
          {...register('name')}
        />

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

        <Input
          id='passwordConfirmation'
          type='password'
          label='Confirmar senha'
          placeholder='Digite novamente sua senha'
          error={errors.passwordConfirmation?.message}
          {...register('passwordConfirmation')}
        />

        <Input
          id='bio'
          type='text'
          label='Bio'
          placeholder='Fale sobre você'
          error={errors.bio?.message}
          {...register('bio')}
        />

        <Input
          id='contact'
          type='text'
          label='Contato'
          placeholder='Opção de contato'
          error={errors.contact?.message}
          {...register('contact')}
        />

        <h3>Selecionar módulo</h3>
        <select {...register('course_module')}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Intermediário)">Segundo módulo (Frontend Intermediário)</option>
          <option value="Terceiro módulo (Frontend Avançado)">Terceiro módulo (Frontend Avançado)</option>
          <option value="Quarto módulo (Introdução ao Backend)">Quarto módulo (Introdução ao Backend)</option>
          <option value="Quinto módulo (Backend Intermediário)">Quinto módulo (Backend Intermediário)</option>
          <option value="Sexto módulo (Backend Avançado)">Sexto módulo (Backend Avançado)</option>
        </select>
        <p>{errors.course_module?.message}</p>
        <button className='cadastrar' type='submit'>Cadastrar</button>
      </form>
      </div>
    </StyleRegister>
  );
};

export default Register;