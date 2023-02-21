import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { StyleInputPassword } from './style';

const InputPassword = ({ label, id, placeholder, register }) =>
{
  const [isHidden, setIsHidden] = useState(true);

  return ( 
    <StyleInputPassword>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input id={id} type={isHidden ? 'password' : 'text'} placeholder={placeholder} {...register} />
      <button type='button' onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <MdVisibility/> : <MdVisibilityOff/>}
      </button>
    </StyleInputPassword>
  )
}

export default InputPassword;