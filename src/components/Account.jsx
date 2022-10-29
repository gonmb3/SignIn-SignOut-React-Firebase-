import React from 'react'
import { useUser } from '../context/UserProvider'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const {user, logout} = useUser();/*------CONTEXT PROVIDER -------*/

  const navigate = useNavigate();

  const handleLogout = async () => {      /*------CERRAR SESION FUNCION -------*/
    try {
      await logout();
      navigate("/")      
    } catch (error) {
      toast.error("Error al Cerrar Sesión")
      console.log(error);
    }
  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className="text-2xl font-bold py-5">Cuenta</h1>
      <p className='py-3'>Bienvenido: <b>{user && user.email}</b></p>

      <button
      onClick={handleLogout}
       className='p-3 rounded text-white bg-blue-500 hover:bg-blue-700'>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default Account