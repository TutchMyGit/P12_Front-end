import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/container.css';
import "../styles/modal.css";
import { setModalBoolean } from '../app/slices';

import { default as Modal } from "@tutchmygit/hrnet-modal/dist/Modal"

function Home() {
  const isModalOn = useSelector((state) => state.employee.isModalOn);
  const dispatch = useDispatch()


  const closeModal = () => {
    dispatch(setModalBoolean(false))
  }

  return (
    <React.Fragment>
      <Header homePage={true}/>
      <div className='container'>
        <h2>Create Employee</h2>
        <Form />
        <Modal
        content='Employee created !'
        isModalOn={isModalOn}
        closeModal={() => {closeModal()}} />
      </div>
    </React.Fragment>
  );
}

export default Home;
