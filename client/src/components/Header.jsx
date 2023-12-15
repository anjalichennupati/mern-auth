import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200' style={{ backgroundColor: '#adb5bd' }}>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-center mx-auto'>GI Tagging</h1>
          </Link>
          <ul className='flex gap-4'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/profile'>
              <li>Sign In</li>
          </Link>
          </ul>
      </div>
    </div>
  )
}
