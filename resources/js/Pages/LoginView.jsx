import { Link, useForm } from '@inertiajs/inertia-react';
import NavigationBar from '../Components/NavigationBar';

const LoginView = () => {
  const {data, setData, processing, errors, post} = useForm({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    post('/login');
  }

  return (
    <div className="signin">
      <NavigationBar backToIndex register />
      <main>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={data.username} onChange={event => setData('username', event.target.value)} />
            {errors.username && <div>{errors.username}</div>}
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={data.password} onChange={event => setData('password', event.target.value)} />
            {errors.password && <div>{errors.password}</div>}
          </div>
          <div className="form-row-button">
            <button type="submit" className="button bright-button" disabled={processing}>Sign In</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default LoginView;