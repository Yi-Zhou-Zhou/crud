import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 968px){
        transition: 0.8s all ease;
    }
    
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR) `
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 24px;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color:white;

        display: block;
        position: absolute;
        top: 10px;
        right: 20px;
        tranform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
    }

`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid #01bf71;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 768px){
        display: none;
    }

`

export const NavBtnLink = styled.button`
    border-radius: 58px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 0.5rem 1.3rem;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        transition: all 1s ease-in-out;
        background: white;
        color: black;
    }

`

export const ModalContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
`


export const InputContainer = styled.div`
    position: relative;
    height: 3rem;
`
export const InputField = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: .5rem;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown):not(:focus) + label
    {
        transition: all 0.3s ease-in-out;
        top: -1rem;
        color: black;
    }

    &:focus,
    &:not(:placeholder-shown):not(:focus)
    {
        border-width: 2px;
    }
`

export const InputLabel = styled.label`
    position: absolute;
    left:1rem;
    top: 0.5rem;
    padding: 0.25rem;
    background: #fff;
    transition: all 0.3s ease;
    color: gray;

`

export const ButtonContainer = styled.div`
    display: flex;
    height: 3rem;
    justify-content: space-between;
`

export const ModalButton = styled.button`
    height: 100%;
    background-color: #01bf71;
    padding: 0.7rem 2rem;
    border-radius: 50px;
`

export const ModalP = styled.p`
    height: 100%;
    color: gray;
    &:nth-child(2){
        text-decoration:underline;
        cursor: pointer;
        text-underline-offset: 3px;
        &:hover{
            color: black;
        }
    }
`

export const FooterRedirect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`