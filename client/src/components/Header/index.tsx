import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: Props) => {
    return (
        <Styled.Header>
            {children}
        </Styled.Header>
    );
};



interface Props {
    children: any
}

export default Index;