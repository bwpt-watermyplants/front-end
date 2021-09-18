import React from 'react';

export default function AddPlant(props) {
  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='w-full max-w-sm mx-auto lg:w-96'>
          <h2 className='mt-8 text-4xl font-extrabold text-center text-gray-900'>
            Add A New Plant!
          </h2>

          <form className='space-y-6'>
            <label className='block text-sm font-medium text-gray-700'>
              Email address
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label>

            <div className='flex items-center justify-between'>
              <h2 className='font-medium text-indigo-600 hover:text-indigo-500'>
                Cancel
              </h2>
            </div>

            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className='relative flex-1 hidden w-0 lg:block'>
        {/* 1000x700 image */}
        <img
          className='absolute inset-0 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1544860707-c352cc5a92e3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzODEwMjU1fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
          alt='plant-background'
        />
      </div>
    </div>
  );
}
