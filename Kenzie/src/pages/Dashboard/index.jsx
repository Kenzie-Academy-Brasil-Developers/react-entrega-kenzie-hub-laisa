import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { StyleDashboard } from './style';
import { IoMdAddCircle } from 'react-icons/io';
import { UserContext } from '../../providers/UserContext';
import AddModal from '../../components/AddModal';
import Card from '../../components/Card';
import { EditTechnology } from '../../components/EditTechnology';

const Dashboard = () => 
{
  const { userLogged, modalOpen, setModalOpen, modalOppen } = useContext(UserContext);
console.log(userLogged);
  return (
    <StyleDashboard>
      <NavBar/>
      
      <div className='header'>
        <h2>Olá, {userLogged.name}</h2>
        <p>{userLogged.course_module}</p>
      </div>
      <div className='tech'>
        <h3>Tecnologias</h3>
        <button className='descricao' onClick={() => setModalOpen(true)}><IoMdAddCircle/></button>
        {modalOpen ? <AddModal/> : null}
      </div>
      <div className='list'>
        {userLogged.techs?.length ? (
          <ul className='techAdd'>
            {userLogged.techs.map
  
            ((tech) =>(
              <Card key={tech.id} id={tech.id} status={tech.status} title={tech.title}/>
            ))}

          </ul>
        ):<></>}
      </div>
      {modalOppen ? <EditTechnology/> : null}
    </StyleDashboard>
  )
}

export default Dashboard;