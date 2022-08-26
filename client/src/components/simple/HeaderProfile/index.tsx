import React from 'react';
import * as Styled from "./styled"
import DropdownLanguage from "../../smart/DropdownLanguage";
import HeaderUser from "../HeaderUser";

const Index = () => {
    return (
        <Styled.HeaderInfo>
            <DropdownLanguage/>
            <HeaderUser/>
        </Styled.HeaderInfo>
    );
};

export default Index;