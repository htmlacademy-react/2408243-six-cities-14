import LoginInput from '../LoginInput';

export default function SignIn() {
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post">
        <LoginInput
          title="E-main"
          type="email"
          name="email"
          placeholder="Email"
          isRequired
        />
        <LoginInput
          title="Password"
          type="password"
          name="password"
          placeholder="Password"
          isRequired
        />
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}
