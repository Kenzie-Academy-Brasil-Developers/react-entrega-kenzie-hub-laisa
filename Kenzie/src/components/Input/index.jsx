import { forwardRef } from 'react';

const Input = forwardRef(({ id, label, type, error, ...rest }, ref) =>
{
  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </form>
  )
});

export default Input;