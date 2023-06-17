const SignInView = () => {
  return (
    <div className="signin">
      <header>
        <a href="/" className="button dim-button">Back</a>
      </header>
      <main>
        <form action="#" id="sign-in-form">
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-row-button">
            <button type="submit" className="button bright-button">Sign In</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignInView;