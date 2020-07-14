import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'

import { WrapperModal, Content, WrapperButtonClose, Close } from '../css/styles'

export const Modal = ({ children, openModal, onClose }) => {
  const [scale, setScale] = useState(0)

  useEffect(() => {
    setScale(1)
  }, [openModal])

  return (
    <AnimatePresence>
      {openModal && (
        <WrapperModal
          key='modal'
          initial={{ scale: 0 }}
          animate={{ scale: scale }}
          transition={{
            stiffness: 100,
            damping: 20
          }}
          exit={{ scale: 0 }}
        >
          <Content>
            <WrapperButtonClose>
              <Close onClick={onClose}>X</Close>
            </WrapperButtonClose>
            {children}
          </Content>
        </WrapperModal>
      )}
    </AnimatePresence>
  )
}

export default function Modalportal({ children, ...props }) {
  return ReactDOM.createPortal(
    <Modal {...props}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
