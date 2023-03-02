import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>
        "'Git' the Users" is an app that connects to the Github API and allows you to search up a
        name or username of a Github account holder.
      </p>
      <p className='all-center'>Version 2.0</p>
    </Fragment>
  );
};

export default About;
