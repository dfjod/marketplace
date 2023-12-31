import { useForm, Link } from '@inertiajs/inertia-react';
import NavigationBar from '../Components/NavigationBar';

const RegisterView = () => {
  const {data, setData, errors, processing, post} = useForm({
    username: '',
    email: '',
    name: '',
    last_name: '',
    phone_number: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    post('/register');
  }

  return (
    <div className="signup">
      <NavigationBar backToIndex login />
      <main>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={data.username} onChange={event => setData('username', event.target.value)} className={errors.username && 'input-error'} />
            {errors.username && <p className='error-message'>{errors.username}</p>}
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={data.email} onChange={event => setData('email', event.target.value)} className={errors.email && 'input-error'} />
            {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={data.name} onChange={event => setData('name', event.target.value)} className={errors.name && 'input-error'} />
            {errors.name && <p className='error-message'>{errors.name}</p>}
          </div>
          <div className="form-row">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" value={data.last_name} onChange={event => setData('last_name', event.target.value)} className={errors.last_name && 'input-error'} />
            {errors.last_name && <p className='error-message'>{errors.last_name}</p>}
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={data.password} onChange={event => setData('password', event.target.value)} className={errors.password && 'input-error'} />
            {errors.password && <p className='error-message'>{errors.password}</p>}
          </div>
          <div className="form-row-button">
            <button className="button bright-button" disabled={processing}>Sign Up</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RegisterView;