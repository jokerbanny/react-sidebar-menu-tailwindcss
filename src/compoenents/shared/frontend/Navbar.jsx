import { useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow((t) => !t)

  return (
    <div>
      <navbar>
        <div className='flex justify-between px-6 bg-gradient-to-r from-indigo-500 to-purple-600 items-center py-4'>
          <div className='flex space-x-4 items-center'>
            <svg
              className='h-8 w-8 cursor-pointer text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={toggle}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
            <h1 className='text-white font-bold text-xl tracking-wide cursor-pointer'>
              Tubemixza
            </h1>
          </div>
          <ul className='flex space-x-6'>
            <li className='text-white text-lg font-semibold tracking-normal cursor-pointer'>
              Home
            </li>
            <li className='text-white text-lg font-semibold tracking-normal cursor-pointer'>
              About
            </li>
            <li className='text-white text-lg font-semibold tracking-normal cursor-pointer'>
              Contact
            </li>
          </ul>
        </div>
      </navbar>

      <navbar>
        <div
          className={`absolute top-0 w-60 bg-white p-6 translate duration-300 h-full shadow-lg ${
            show ? 'left-0' : '-left-80'
          }`}
        >
          <div className='flex space-x-6 mb-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={toggle}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            <h1>Dashboard</h1>
          </div>
          <ul className='flex items-center flex-col space-y-6 mt-14 border-t py-6'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>Logout</li>
          </ul>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar
