import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserProvider'
import { toast } from 'react-toastify';


const SignIn = () => {
  /*------CONTEXT PROVIDER -------*/
  const { signIn } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /* ----------------CREAER USUARIO/CUENTA CON FIREBASE ----------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password)
      toast.success("Inicio de Sesión Exitoso")
      navigate("/account")
    } catch (e) {
      toast.warning("Inicio de Sesión Fallido")
      console.log(e);
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4 bg-white shadow-sm rounded'>
      <div>
        <h1 className="text-2xl font-bold py-2">Iniciar Sesión</h1>

      </div>
      <form onSubmit={handleSubmit}>
        <div action="" className='flex flex-col py-2'>
          <label className="py-2 font-medium">Email</label>
          <input
          name='email'
          id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='border p-3' type="email" />
        </div>

        <div className='flex flex-col py-2'>
          <label className="py-2 font-medium">Contraseña</label>
          <input
            name='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='border p-3' type="password" />
        </div>

        <button
          className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
        >Entrar
        </button>

        <p className="py-2">
          No tienes cuenta? <Link to="/signup" className='underline'>Registrate</Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn