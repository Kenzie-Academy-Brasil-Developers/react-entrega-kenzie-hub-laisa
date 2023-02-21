import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../Input';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { StyleAddModal } from './style';
import { TechContext } from '../../providers/TechContext';

const schema = yup.object({
  title: yup.string().required('Tecnoligia obrigatória'),

  status: yup.string().required('Escolha qual o seu nível')
})

const AddModal = () =>
{
  const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});
  const { setModalOpen } = useContext(UserContext);
  const { createTechs } = useContext(TechContext);

  return (
    <StyleAddModal>
       <div className='div'>
        <h2>Cadastrar tecnologia</h2>
        <p onClick={() => setModalOpen(false)}>X</p>
      </div>
      <form onSubmit={handleSubmit(createTechs)}>
        <Input id='title'
          type='text'
          label='Nome'
          placeholder='Digite aqui a tecnologia'
          error={errors.title?.message}
          {...register('title')}
        />
        <h4>Selecionar status</h4>
        <select {...register('status')} error={errors.status?.message}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
        <button type='submit'>Cadastrar tecnologia</button>
      </form>
    </StyleAddModal>
  )
}

export default AddModal;