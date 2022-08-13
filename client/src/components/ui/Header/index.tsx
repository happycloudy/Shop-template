import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: IProps) => {
    return (
        <Styled.Header>
            {children}
        </Styled.Header>
    );
};



interface IProps {
    children: any
}

export default Index;