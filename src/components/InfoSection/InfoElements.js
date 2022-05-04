import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px){
        padding: 100px 0;

    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    
`


export const Column1 = styled.div`
    margin-bottom: 0.5em;
    padding: 0 1em;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 0.5em;
    padding: 0 1em;
    grid-area: col2;
    display: grid;
    grid-template-areas: 'f1 f2 f3 f4';

    @media screen and (max-width: 768px){
        grid-template-areas:'f1 f2'
                            'f3 f4';
    }

    @media screen and (max-width: 480px){
        grid-template-areas:'f1' 
                            'f2'
                            'f3'
                            'f4';
    }
    grid-gap: 2em;
`       

export const Fun1 = styled.div`
    grid-area: f1;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    color: white;
    border-right: 2px solid #cfd4d1;
    padding-right: 2em;

    @media screen and (max-width: 480px){
        border-bottom: 2px solid #cfd4d1;
        padding: 0 0 2em 0; 
    }
`
export const Fun2 = styled.div`
    grid-area: f2;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    color: white;
    border-right: 2px solid #cfd4d1;
    padding-right: 2em;

    @media screen and (max-width: 768px){
        border-right: none;
    }
    @media screen and (max-width: 480px){
        border-bottom: 2px solid #cfd4d1;
        padding: 0 0 2em 0; 
    }
`
export const Fun3 = styled.div`
    grid-area: f3;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    color: white;
    border-right: 2px solid #cfd4d1;
    padding-right: 2em;

    @media screen and (max-width: 480px){
        border-bottom: 2px solid #cfd4d1;
        padding: 0 0 2em 0; 
    }
`
export const Fun4 = styled.div`
    grid-area: f4;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    color: white;
    
    @media screen and (max-width: 480px){
        margin-bottom: 3em;
    }

`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    

`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: black;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 3em;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
    display: flex;
    justify-content: center;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const InfoP = styled.p`
    color: black;
    font-family: 'Spectral', serif;
    font-size: 30px;
    letter-spacing: 1.7px;
    font-weight: 500;
`

export const TopInfo = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
`
export const BottomInfo = styled.div`
    display: grid;
    grid-template-areas: 'f1 f2 f3 f4';
    grid-gap: 3em;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-template-areas:'f1 f2'
                            'f3 f4';
    }

    @media screen and (max-width: 480px){
        grid-template-areas:'f1' 
                            'f2'
                            'f3'
                            'f4';
    }
    
`
