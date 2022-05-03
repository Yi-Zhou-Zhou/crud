import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Info, ArrowDown} from './HeroElements'
import Video from '../../videos/HeroVideo.mp4'
import {Button} from '../ButtonElements.js'

const HeroSection = () => {
    const [isHover, setIsHover] = useState(false)

    const onHover = () => {
        setIsHover(!isHover)
    }

    
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Simple CRUD Application made with REACT Library
            </HeroH1>
            <HeroP>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </HeroP>
            <HeroBtnWrapper>
                <Button onMouseEnter={onHover} onMouseLeave={onHover}>  More information {isHover ? <ArrowDown/>: <Info/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection