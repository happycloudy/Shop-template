import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: IProps) => {
    return (
        <Styled.NavItem>
            {children}
        </Styled.NavItem>
    );
};



interface IProps {
    children: any
}

export default Index;