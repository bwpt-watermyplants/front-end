import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
// https://react-icons.github.io/react-icons/icons?name=fc
const Home = (props) => {
  const { plants } = props;
  const { push } = useHistory();

  return (
    // className='px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8'
    <div>
      <ul className='flex grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {plants.map((plant) => (
          <li
            key={plant.id}
            className='flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow'
          >
            <div className='flex flex-col flex-1 p-8'>
              <img
                className='flex-shrink-0 w-32 h-32 mx-auto rounded-full'
                src={
                  plant.image
                    ? plant.image
                    : 'https://i.pinimg.com/564x/59/f3/35/59f3353fab469e41c9e0dbf7e2bdc9d2.jpg'
                }
                alt='plant'
              />
              <h3 className='mt-6 text-sm font-medium text-gray-900'>
                {plant.nickname}
              </h3>
              <dl className='flex flex-col justify-between flex-grow mt-1'>
                {/* <dt className='sr-only'>Species</dt> */}
                <dd className='text-sm text-gray-500'>
                  Species: {plant.species}
                </dd>
                <dt className='sr-only'>Watering Frequency</dt>
                <dd className='mt-3'>
                  <span className='px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full'>
                    {plant.h2oFrequency}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className='flex -mt-px divide-x divide-gray-200'>
                <div className='flex flex-1 w-0'>
                  <a
                    href={`mailto:${plant.email}`}
                    className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500'
                  >
                    <MailIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>Update</span>
                  </a>
                </div>

                <div className='flex flex-1 w-0 -ml-px'>
                  <a
                    href={`tel:${plant.telephone}`}
                    className='relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500'
                  >
                    <PhoneIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>Water</span>
                  </a>
                </div>

                <div className='flex flex-1 w-0 -ml-px'>
                  <a
                    href={`tel:${plant.telephone}`}
                    className='relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500'
                  >
                    <PhoneIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>Delete</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, {})(Home);
