import React from 'react'
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, ModalContainer,InputField, InputLabel, InputContainer, ModalButton, ButtonContainer, ModalP, FooterRedirect} from './NavbarElements'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { Modal} from '@mantine/core';
import { useAuth } from '../../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
const Navbar = ({toggle}) => {
  const {signup, login} = useAuth()

  const [openedSignUp, setOpenedSignUp] = useState(false);
  const [openedSignIn, setOpenedSignIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const handleChange  = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value}) 
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await signup(credentials.email, credentials.password)
      navigate('/main')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleLogin  = async (e) => {
    e.preventDefault()
    try {
      await login(credentials.email, credentials.password)
      navigate('/main')
    } catch (error) {
      setError(error.message)
    }
    
  }

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
        transitionTimingFunction="ease"
        position='center'
        title='Register Form'
      >
        <form>
        <ModalContainer>
          {error && <h1>{error}</h1>}
        <InputContainer>
        <InputField type='email' name='email' placeholder='' id='email' onChange={handleChange} required/>
        <InputLabel for='email'>Enter Email</InputLabel>
        </InputContainer>
        <InputContainer>
        <InputField type='password' name='password' placeholder='' id='password' onChange={handleChange} required/>
        <InputLabel for='password'>Enter Password</InputLabel>
        </InputContainer>
        <InputContainer>
        <InputField type='password' name='confirmPassword' placeholder='' id='confirmPassword' onChange={handleChange} required/>
        <InputLabel for='confirmPassword'>Confirm Password</InputLabel>
        </InputContainer>
        <ButtonContainer>
          <FooterRedirect>
          <ModalP>Already Have an account?</ModalP>
          <ModalP onClick={() => {
            setOpenedSignUp(false);
            setOpenedSignIn(true);
            setCredentials({
              email: '',
              password: '',
              confirmPassword: ''
            })}
          }>Log In</ModalP>
          </FooterRedirect>
          
          <ModalButton onClick={handleRegister}>Sign Up</ModalButton>
        </ButtonContainer>
        
        </ModalContainer>
        </form>
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
        transitionTimingFunction="ease"
        position='center'
        title='Login Form'
      >
        <form>
        <ModalContainer>
          {error && <h1>{error}</h1>}
          
          
        <InputContainer>
        <InputField type='email' name='email' placeholder='' id='email' onChange={handleChange} required/>
        <InputLabel for='email'>Enter Email</InputLabel>
        </InputContainer>
        <InputContainer>
        <InputField type='password' name='password' placeholder='' id='password' onChange={handleChange} required/>
        <InputLabel for='password'>Enter Password</InputLabel>
        </InputContainer>
        <ButtonContainer>
          <FooterRedirect>
          
          <ModalP>Don't have an account?</ModalP>
          <ModalP onClick={() => {
            setOpenedSignIn(false);
            setOpenedSignUp(true);
            setCredentials({
              email: '',
              password: '',
              confirmPassword: ''
            })
            }
          }>Register</ModalP>
          </FooterRedirect>
          
          <ModalButton onClick={handleLogin}>Sign In</ModalButton>
        </ButtonContainer>
        
        </ModalContainer>
        </form>
      </Modal>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Yi Zhou</NavLogo>
            <MobileIcon onClick={toggle}>
              <HamburgerIcon></HamburgerIcon>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='about'>Features</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink onClick={() => {setOpenedSignUp(true)}}>Sign Up</NavBtnLink>
              <NavBtnLink onClick={() => {setOpenedSignIn(true)}}>Sign In</NavBtnLink>
            </NavBtn>
            
          
        </NavbarContainer>
    </Nav>
    
    </>
    
  )
}

export default Navbar