import React from 'react';
import {HeaderContainer} from "./styled";
import HeaderInfo from "../../components/simple/HeaderInfo";
import HeaderProfile from "../../components/simple/HeaderProfile";

const Index = () => {
    return (
        <HeaderContainer>
            <HeaderProfile/>
            <HeaderInfo/>
        </HeaderContainer>
    );
};

export default Index;