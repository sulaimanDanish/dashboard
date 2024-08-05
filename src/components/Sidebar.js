import { Component } from "react";
import styled from "styled-components";

const Bar = styled.aside`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 5rem;
   height: 100%;
   overflow: hidden;
   background-color: #343434;
`
const Home = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.25rem;
    width: 4rem; 
  height: 4rem;
  border-radius: 0.25rem;
   &:hover{background-color: #919191;
`

const IconDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
  margin-top: 0.75rem;
  	border-top-width: 1px;
    border-color: rgba(156, 163, 175, 1);
`

const Icons = styled.a`
 display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem; 
  height: 3rem;
  	border-radius: 0.25rem;
    margin-top: 0.5rem;
    &:hover{background-color: #919191;
`
const LogOut = styled.a`
display: flex;
  align-items: center;
  justify-content: center;
  	width: 4rem;
    height: 4rem;
    margin-top: auto;  
    border-radius: 0.25rem;
     &:hover{background-color: #919191;
`

export default class Sidebar extends Component {

    render() {
        return (
            <>
                <Bar>
                    <Home>
                    </Home>
                    <IconDiv>
                        <Icons>
                        </Icons>
                        <Icons>
                        </Icons>
                        <Icons>
                        </Icons>
                        <Icons>
                        </Icons>
                    </IconDiv>
                    <IconDiv>
                        <Icons>
                        </Icons>
                        <Icons>
                        </Icons>
                        <Icons>
                        </Icons>
                    </IconDiv>
                    <LogOut>

                    </LogOut>
                </Bar>
            </>
        )
    }
}