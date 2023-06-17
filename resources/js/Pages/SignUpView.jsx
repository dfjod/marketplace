const SignUpView = () => {
  return (
    <div className="signup">
      <header>
        <a href="/" className="button dim-button">Back</a>
      </header>
      <main>
        <form action="#" id="sign-up-form">
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
          <div className="form-row">
            <label htmlFor="phone-number">Phone number</label>
            <input type="text" id="phone-number" name="phone-number" />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-row-button">
            <button className="button bright-button">Sign Up</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignUpView;