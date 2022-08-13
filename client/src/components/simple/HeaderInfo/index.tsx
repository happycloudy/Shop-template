import React from 'react';
import Logo from "../../../assets/icons/logo.svg";
import NavBar from "../../ui/NavBar";
import NavItem from "../NavItem";
import Header from "../../ui/Header";

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