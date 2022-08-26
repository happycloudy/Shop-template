import React from 'react';
import * as Styled from './styled'
import UserIcon from "../../../assets/icons/user.svg";

const Index = () => {
    return (
        <Styled.HeaderUser>
            <img src={UserIcon}/>
            Арион
        </Styled.HeaderUser>
    );
};


export default Index;