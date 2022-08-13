import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: Props) => {
    return (
        <Styled.NavBar>
            {children}
        </Styled.NavBar>
    );
};



interface Props {
    children: any
}

export default Index;