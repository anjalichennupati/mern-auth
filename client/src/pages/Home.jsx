import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-center font-semibold my-7'>Home</h1>
      <div className='flex space-x-4'>
        <Link to='/sign-in'>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Admin
          </button>
        </Link>
        <Link to='/user'>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            User
          </button>
        </Link>
      </div>
    </div>
  )
}