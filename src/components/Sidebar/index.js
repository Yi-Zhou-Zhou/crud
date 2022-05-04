import React from 'react'
import { SidebarContainer, Icon, Close, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'
import {ModalContainer, InputContainer, InputField, InputLabel, ButtonContainer, FooterRedirect, ModalP, ModalButton} from '../Navbar/NavbarElements'
import {useState} from 'react'
import {Modal} from '@mantine/core'
const SidebarElements = ({isOpen, toggle}) => {

const [openedSignUp, setOpenedSignUp] = useState(false);
const [openedSignIn, setOpenedSignIn] = useState(false);

  return (
      <>
      <Modal
    styles={
      {
        title: { fontSize: '34px', marginBottom:'1rem', letterSpacing:'1.2px'}
      }
    }
      centered
        opened={openedSignUp}
        onClose={() => setOpenedSignUp(false)}
        transition="fade"
        transitionDuration={400}
        position='center'
        title='Register Form'
      >
        <ModalContainer>
            <InputContainer>
                <InputField type='email' name='email' placeholder='' id='email'required/>
                <InputLabel htmlFor='email'>Enter Email</InputLabel>
            </InputContainer>
            <InputContainer>
                <InputField type='password' name='email' placeholder='' id='password' required/>
                <InputLabel htmlFor='password'>Enter Password</InputLabel>
            </InputContainer>
            <InputContainer>
                <InputField type='password' name='email' placeholder='' id='confirmPassword' required/>
                <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
            </InputContainer>
            <ButtonContainer>
          <FooterRedirect>
          <ModalP>Already Have an account?</ModalP>
          <ModalP onClick={() => {
            setOpenedSignUp(false);
            setOpenedSignIn(true);}
          }>Log In</ModalP>
          </FooterRedirect>
          
          <ModalButton>Sign Up</ModalButton>
        </ButtonContainer>
        </ModalContainer>
      </Modal>

      <Modal
    styles={
      {
        title: { fontSize: '34px', marginBottom:'1rem', letterSpacing:'1.2px'}
      }
    }
      centered
        opened={openedSignIn}
        onClose={() => setOpenedSignIn(false)}
        transition="fade"
        transitionDuration={400}
        position='center'
        title='Login Form'
      >
        <ModalContainer>
        <InputContainer>
        <InputField type='email' name='email' placeholder='' id='email'required/>
        <InputLabel htmlFor='email'>Enter Email</InputLabel>
        </InputContainer>
        <InputContainer>
        <InputField type='password' name='email' placeholder='' id='password' required/>
        <InputLabel htmlFor='password'>Enter Password</InputLabel>
        </InputContainer>
        <ButtonContainer>
          <FooterRedirect>
          
          <ModalP>Don't have an account?</ModalP>
          <ModalP onClick={() => {
            setOpenedSignIn(false);
            setOpenedSignUp(true);
            }
          }>Register</ModalP>
          </FooterRedirect>
          
          <ModalButton>Sign In</ModalButton>
        </ButtonContainer>
        </ModalContainer>
      </Modal>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}> 
            <Close/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink>About</SidebarLink>
                <SidebarLink>Features</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute onClick={() => {setOpenedSignIn(true)}}>Sign In</SidebarRoute>
            </SideBtnWrap>
            <SideBtnWrap>
                <SidebarRoute onClick={() => {setOpenedSignUp(true)}}>Sign Up</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default SidebarElements