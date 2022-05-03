import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: no-wrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

    &:hover{
        transition: all 0.7s ease-in-out;
        background: white;
        color: black;
    }

`