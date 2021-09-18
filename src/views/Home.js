import React from 'react';
import { connect } from 'react-redux';

import Plants from '../components/Plants';

const Home = (props) => {
  return (
    // className='px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8'
    <div className='m-10 md:mx-15 lg:mx-15 xl:mx-20'>
      <Plants plants={props.plants} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, {})(Home);
