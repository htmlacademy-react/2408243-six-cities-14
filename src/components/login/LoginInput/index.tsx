type LoginInputProps = {
  type: string;
  title: string;
  name: string;
  placeholder: string;
  isRequired? :boolean;
}

export default function LoginInput({title, type, name, placeholder, isRequired} : LoginInputProps) {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{ title }</label>
      <input className="login__input form__input" type={type} name={name} placeholder={placeholder} required={ isRequired } />
    </div>
  );
}
