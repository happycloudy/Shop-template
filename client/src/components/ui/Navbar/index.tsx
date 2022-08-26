import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: IProps) => {
    return (
        <Styled.NavBar>
            {children}
        </Styled.NavBar>
    );
};



interface IProps {
    children: any
}

export default Index;