import React from 'react';
import * as Styled from './styled'

const Index = ({children}: Props) => {
    return (
        <Styled.AppContainer>
            {children}
        </Styled.AppContainer>
    );
};



interface Props {
    children: any
}

export default Index;