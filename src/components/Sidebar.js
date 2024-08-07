import { Component } from "react";
import styled from "styled-components";

const Bar = styled.aside`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 75px;
   height: 100%;
   overflow: hidden;
   background-color: #1d283c;

   @media (max-width: 1024px) { 
     display: none;
   }
`
const Home = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.50rem;
    width: 4rem; 
  height: 4rem;
  border-radius: 0.25rem;
   background-color: #919191;
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

const image = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem"
}

const logout = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem"
}

const home = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem",
}


export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                "https://cdn-icons-png.flaticon.com/512/569/569232.png",
                "https://cdn-icons-png.flaticon.com/512/1870/1870140.png",
                "https://cdn-icons-png.flaticon.com/128/10579/10579554.png",
                "https://cdn-icons-png.flaticon.com/512/580/580012.png",
                "https://cdn-icons-png.flaticon.com/128/3616/3616227.png",
                "https://cdn-icons-png.flaticon.com/128/3481/3481409.png",
                "https://cdn-icons-png.flaticon.com/128/3481/3481115.png"
            ]
        }
    }
    render() {
        return (
            <>
                <Bar>
                    <Home>
                        <img style={home} src="https://cdn-icons-png.flaticon.com/128/10579/10579364.png" alt="home-icon" />
                    </Home>
                    <IconDiv>
                        {this.state.images.map((item,index) => (
                            <Icons>
                                <img style={image} src={item} key={index}  alt="home-icon" />
                            </Icons>
                        ))}
                    </IconDiv>
                    <LogOut>
                        <img style={logout} src="https://cdn-icons-png.flaticon.com/512/573/573134.png" alt="icon" />
                    </LogOut>
                </Bar>
            </>
        )
    }
}