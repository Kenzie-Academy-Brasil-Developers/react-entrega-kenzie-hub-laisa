import { forwardRef } from 'react';
import { StyleInput } from './style';

const Input = forwardRef(({ id, label, type, error, ...rest }, ref) =>
{
  return (
    <StyleInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </StyleInput>
  )
});

export default Input;