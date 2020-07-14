import styled from 'styled-components'
import { motion } from 'framer-motion'

const appearDuration = 300
const transitionName = 'alert'

export const WrapperModal = styled(motion.div)`
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.section`
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  &.${transitionName}-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.${transitionName}-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }
  &.${transitionName}-exit {
    opacity: 1;
  }
  &.${transitionName}-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }
`
export const Content = styled.div`
  background: white;
  padding: 2em;
  width: 500px;
  max-width: 650px;
  overflow: auto;
  border-radius: 20px;
  box-shadow: 0px 0px 69px -18px rgba(0, 0, 0, 0.75);
`

export const WrapperButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Close = styled.button`
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-bwtween;
  align-items: center;
  margin: 3em;
`

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 250px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  margin-right: 20px;
  background-color: #61dafb;
  border-radius: 35px 35px 0 35px;
  box-shadow: 0 14px 44px 0 rgba(13, 73, 89, 0.33);
`
export const WrapperInput = styled.div`
  margin-bottom: 1.5em;
`

export const Input = styled.input`
  width: 94%;
  border: 1px solid #efeff4;
  padding: 1em;
  font-sise: 16px;
  border-radius: 35px;
`

export const SendButton = styled.button`
  border: none;
  height: 50px;
  width: 250px;
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
  background-color: #111;
  border-radius: 35px 35px 0 35px;
  cursor: pointer;
  box-shadow: 0 14px 44px 0 rgba(13, 73, 89, 0.33);
`
