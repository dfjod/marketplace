import { Link } from '@inertiajs/inertia-react';

const NavigationBar = ({ newItem, backToIndex, login, register, profile, logout, backToProfile}) => {
  return (
    <header>
      <div className="navbar-left">
        {newItem && <Link href="/new" className="button bright-button">New</Link>}
        {backToIndex && <Link href="/" className="button dim-button">Back</Link>}
      </div>
      <div className="navbar-right">
        {login && <Link href="/login" className="button dim-button">Sign in</Link>}
        {register && <Link href="/register" className="button bright-button">Sign up</Link>}
        {logout && <Link href="/logout" className="button dim-button" method="post" as="button">Sign out</Link>}
        {profile && <Link href="/profile" className="button bright-button">Profile</Link>}
      </div>
    </header>
  );
}

export default NavigationBar;