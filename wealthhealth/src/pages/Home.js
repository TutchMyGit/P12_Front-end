import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Modal from '../modal/Modal';

import '../styles/container.css';

function Home() {
  return (
    <React.Fragment>
      <Header homePage={true}/>
      <div className='container'>
        <h2>Create Employee</h2>
        <Form />
        <Modal />
      </div>
    </React.Fragment>
  );
}

export default Home;
