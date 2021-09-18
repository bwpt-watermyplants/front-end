import React from 'react';

import Plant from '../components/Plant';

const Plants = (props) => {
  const { plants } = props;

  // TODO: Create delete, water, update functions here

  return (
    <div>
      <ul className='flex grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
};

export default Plants;
