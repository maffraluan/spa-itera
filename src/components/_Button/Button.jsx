import './button.styles.scss';

function Button({ name, children }) {
  return (
    <button name={name}>{children}</button>
  )
}

export { Button }