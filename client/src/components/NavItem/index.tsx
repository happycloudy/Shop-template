import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: Props) => {
    return (
        <Styled.NavItem>
            {children}
        </Styled.NavItem>
    );
};



interface Props {
    children: any
}

export default Index;