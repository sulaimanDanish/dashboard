import { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: calc(100% - 30px);
   height: 75px;
   overflow: hidden;
   background-color: #1d283c;
   position:fixed;
   z-index:10;

   @media (max-width: 1024px) { 
      width: calc(100% - 15px);
   }

    @media (max-width: 425px) { 
      width: calc(100% - 5px);
   }
`
const search = {
    background: "#818589",
    height: "1rem",
    borderRadius: "0.5rem",
    padding: "0.5rem 0.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "10%"
}
const input = {
    background: "transparent",
    border: "none",
    outline: "none",
    fontWeight: "500",
    width: "100%"
}

const searchIcon = {
    height: "0.75rem",
    width: "0.75rem",
}

const IconsContainer = styled.div`
  display: flex;
  width:20%;
  margin-left: auto;
  justify-content: flex-end;
`

const Icons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  &:hover {
    background-color: #919191;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const ProfileContainer = styled.div`
  display: flex;
  width:10%;
  	justify-content: center;
`

const Profile = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
width: 3rem;
  height: 3rem;
   margin-top: 0.25rem;
`

const image = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem"
}

const profileIcon = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem"
}

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export default class Navbar extends Component {

    render() {
        return (
            <>
                <Nav>
                <HamburgerIcon>
                    <img style={image} src="https://cdn-icons-png.flaticon.com/128/8727/8727897.png" alt="menu-icon" />
                </HamburgerIcon>
                    <div style={search}>
                        <input type="text" name="search" placeholder="Search..." style={input} />
                        <span >
                            <img style={searchIcon} src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png" />
                        </span>
                    </div>
                    <IconsContainer>
                        <Icons href="#">
                            <img style={image} src="https://cdn-icons-png.flaticon.com/512/4206/4206318.png" alt="home-icon" />
                        </Icons>
                        <Icons href="#">
                            <img style={image} src="https://cdn-icons-png.flaticon.com/128/4206/4206344.png" alt="home-icon" />
                        </Icons>
                        <Icons href="#">
                            <img style={image} src="https://cdn-icons-png.flaticon.com/512/4206/4206363.png" alt="home-icon" />
                        </Icons>                        
                    </IconsContainer>
                    <ProfileContainer>
                        <Profile>
                            <img  style={profileIcon} src="https://cdn-icons-png.flaticon.com/128/1870/1870215.png" alt="profile"/>
                        </Profile>
                        </ProfileContainer>
                </Nav>
            </>
        )
    }
}