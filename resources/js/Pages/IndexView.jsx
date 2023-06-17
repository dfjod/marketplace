const IndexView = () => {
    return (
        <div className="index">
          <header>
            <a href="/new" className="button bright-button">New</a>
            <div className="authentication-buttons">
              <a href="/signin" className="button dim-button">Sign in</a>
              <a href="/signup" className="button bright-button">Sign up</a>
            </div>
          </header>
        </div>
    )
}

export default IndexView;