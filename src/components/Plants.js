import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions';

import Plant from '../components/Plant';

const Plants = (props) => {
  const { plants, deletePlant } = props;

  return (
    <div>
      <ul className='flex grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} deletePlant={deletePlant} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return null;
};

export default connect(mapStateToProps, { deletePlant })(Plants);
