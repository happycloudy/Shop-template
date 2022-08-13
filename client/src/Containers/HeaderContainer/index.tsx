import React from 'react';
import Header from "../../components/Header";
import Logo from "../../assets/icons/logo.svg";
import NavBar from "../../components/NavBar";
import NavItem from "../../components/NavItem";

const Index = () => {
    return (
        <Header>
            <img src={Logo}/>
            <NavBar>
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    Bags
                </NavItem>
                <NavItem>
                    Sneakers
                </NavItem>
                <NavItem>
                    Belt
                </NavItem>
                <NavItem>
                    Contact
                </NavItem>
            </NavBar>
        </Header>
    );
};

export default Index;