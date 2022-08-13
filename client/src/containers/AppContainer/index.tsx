import React from 'react';
import * as Styled from './styled'

const Index = ({children}: IProps) => {
    return (
        <Styled.AppContainer>
            {children}
        </Styled.AppContainer>
    );
};



interface IProps {
    children: any
}

export default Index;