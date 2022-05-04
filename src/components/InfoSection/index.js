import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img,Fun1,Fun2,Fun3,Fun4, TopInfo, BottomInfo, InfoP} from './InfoElements'
import {Button} from '../ButtonElements'
import createImg from '../../images/create.svg'
import readImg from '../../images/read.svg'
import updateImg from '../../images/update.svg'
import deleteImg from '../../images/delete.svg'

const InfoSection = () => {
  return (
    <>
    <InfoContainer>
        <InfoWrapper>
            <TopInfo>
                <Heading>
                    Features
                </Heading>

                <Subtitle> 
                    With this application, you'll be able to do:
                </Subtitle>
            </TopInfo>
            <BottomInfo>
                <Fun1>
                    <ImgWrap>
                        <Img src={createImg}/>
                    </ImgWrap>
                    <InfoP>Create</InfoP>
                </Fun1>
                <Fun2>
                    <ImgWrap>
                        <Img src={readImg}/>
                    </ImgWrap>
                    <InfoP>Read</InfoP>
                </Fun2>
                <Fun3>
                    <ImgWrap>
                        <Img src={updateImg}/>
                    </ImgWrap>
                    <InfoP>Update</InfoP>
                </Fun3>
                <Fun4>
                    <ImgWrap>
                        <Img src={deleteImg}/>
                    </ImgWrap>
                    <InfoP>Delete</InfoP>
                </Fun4>
            </BottomInfo>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection