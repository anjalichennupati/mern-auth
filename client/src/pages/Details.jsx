import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7'>Blockchain Database details</h1>
      <div className='flex justify-center'>
        <Link to='/insert-data'>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mr-4'>
            Insert Data
          </button>
        </Link>
        <Link to='/generate-qr'>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Generate QR
          </button>
        </Link>
      </div>
    </div>
  )
}