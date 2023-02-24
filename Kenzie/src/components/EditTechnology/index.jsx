import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import Input from "../Input";
import { StyleEditModal } from './style';

export const EditTechnology = () =>
{
  const { setModalEdit, alt, hab } = useContext(UserContext);
  const { deleteTech, upTech, id } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  return (
    <StyleEditModal>
      <div>
        <h4>Editar tecnologia</h4>
        <p onClick={() => setModalEdit(false)}>X</p>
      </div>
      <form onSubmit={handleSubmit(upTech)}>
        <label htmlFor="title">Nome do projeto</label>
        <Input  placeholder={alt} disabled />
        <label htmlFor='status'>Status</label>
        <select {...register('status')}>
          <option value={hab} required hidden>{hab}</option>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
        <button type='submit' id={id} className="salvar">Salvar alterações</button>
        <button id={id} onClick={deleteTech}>Excluir</button>
      </form>
    </StyleEditModal>
  )
}