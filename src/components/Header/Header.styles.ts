import styled from 'styled-components'


export const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    box-shadow: 0px 2px 7px 2px rgba(0,0,0,.13);
    nav{
        ul{
            display: flex;
            padding: 0;
            list-style: none;
            li{
                a{
                    text-decoration: none;
                    color: var(--dark);
                    padding: 20px;
                    text-transform: titlecase;
                }
            }
        }
    }

    button{
        width: 170px;
        padding: 8px 0 10px 0;
        border: none;
        border-radius: 7px;
        font-size: 16px;
        cursor: pointer;
        background: var(--main-green);
        color: var(--light);
        font-weight: 600;
    }
`