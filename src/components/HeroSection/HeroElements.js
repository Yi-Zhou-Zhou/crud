import styled from 'styled-components'
import { ArrowDownIcon, InfoIcon } from '@chakra-ui/icons'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    lefT: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    letter-spacing: 2px;
    text-align: center;
    font-family: 'Spectral', serif;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 1.2rem;
    color: #fff;
    font-size: 24px;
    text-align: center;
    font-weight: 200;
    letter-spacing: 2px;
    max-width: 600px;
    font-family: 'Karla', sans-serif;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Info = styled(InfoIcon)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowDown = styled(ArrowDownIcon)`
    margin-left: 8px;
    font-size: 20px;
`