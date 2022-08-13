import React, {useState} from 'react';
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import * as Styled from "./styled"
import DropdownMenu from "../DropdownMenu";
import DropdownLanguage from "../../smart/DropdownLanguage";

const Index = () => {
    return (
        <Styled.HeaderInfo>
           <DropdownLanguage/>
        </Styled.HeaderInfo>
    );
};

export default Index;