import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserProvider'
import { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRpassword] = useState("");
 
  const navigate = useNavigate();

/*------CONTEXT PROVIDER -------*/
  const { createUser} = useUser(); 

 /* ----------------CREAER USUARIO/CUENTA CON FIREBASE ----------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();                           
    try {
      await createUser(email, password)
      toast.success("Registro Exitoso")
      navigate("/account")
    } catch (e) {
      toast.warning("Registro Fallido")
      console.log(e);
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4  bg-white shadow-sm rounded'>
      <div>
        <h1 className="text-2xl font-bold py-2">Registrarse</h1>

      </div>
     
        <form onSubmit={handleSubmit}>
        <div action="" className='flex flex-col py-2'>

          <label className="py-2 font-medium">Email</label>
          <input
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='border p-3'
            type="email" />
        </div>

        <div className='flex flex-col py-2'>
          <label className="py-2 font-medium">Contraseña</label>

          <input
            name='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='border p-3'
            type="password" />
        </div>
        <div className='flex flex-col py-2'>
          <label className="py-2 font-medium">Repetir Contraseña</label>

          <input
            name='password'
            id='password'
            value={rPassword}
            onChange={e => setRpassword(e.target.value)}
            className='border p-3'
            type="password" />
        </div>

        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Registrate</button>

        <p className="py-2">
          Ya tienes cuenta? <Link to="/" className='underline'>Inicia Sesión</Link>
        </p>
      </form>
     
      
    </div>
  )
}

export default SignUp