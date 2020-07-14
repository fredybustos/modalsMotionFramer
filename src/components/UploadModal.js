import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'

import { WrapperModal, Content, WrapperButtonClose, Close } from '../css/styles'

const Modal = ({ openModal, onClose, children }) => {
  return (
    <AnimatePresence>
      {openModal && (
        <WrapperModal
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
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

export default function UploadModal({ children, ...props }) {
  return ReactDOM.createPortal(
    <Modal {...props}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
