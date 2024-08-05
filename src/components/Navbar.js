import { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   height: 5rem;
   overflow: hidden;
   background-color: #343434;
`

export default class Navbar extends Component{
  
  
    render(){
        return(
            <>
                <Nav>

                </Nav>
            </>
        )
    }
}