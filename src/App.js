import React, { useState } from 'react'
import logo from './logo.svg'

import './App.css'
import Modal from './components/Modal'
import OtherModal from './components/OtherModal'
import UploadModal from './components/UploadModal'
import Login from './components/Login'

import { Button, Buttons } from './css/styles'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openOtherModal, setOpenOtherModal] = useState(false)
  const [openUploadModal, setOpenUploadModal] = useState(false)

  function handleOtherOpenModal() {
    setOpenOtherModal(true)
  }

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleUploadModal() {
    setOpenUploadModal(true)
  }

  function hanldeCloseModal() {
    setOpenModal(false)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Buttons>
          <Button onClick={handleOpenModal}>CSSTransition</Button>
          <Button onClick={handleOtherOpenModal}>Motion framer</Button>
          <Button onClick={handleUploadModal}>Upload Modal</Button>
        </Buttons>
      </header>
      <Modal openModal={openModal} onClose={hanldeCloseModal}>
        <Login onClose={hanldeCloseModal} />
      </Modal>

      <OtherModal
        openModal={openOtherModal}
        onClose={() => setOpenOtherModal(false)}
      >
        <Login onClose={() => setOpenOtherModal(false)} />
      </OtherModal>

      <UploadModal
        openModal={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      >
        <Login onClose={() => setOpenUploadModal(false)} />
      </UploadModal>
    </div>
  )
}

export default App
