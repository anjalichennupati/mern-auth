import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export default function InsertData() {
  const[productData, setproductData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setproductData({...productData, [e.target.id]: e.target.value});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch ('/api/auth/insertdata',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Insert the Data</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          type='text'
          placeholder='GI Tag'
          id='gitag'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Product'
          id='product'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <button className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Insert Data
        </button>
      </form>
    </div>
  )
}
