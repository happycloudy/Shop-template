import React from 'react';
import * as Styled from './styled'

const Index = ({children, ...props}: IProps) => {
    return (
        <Styled.Dropdown>
            {children}
        </Styled.Dropdown>
    );
};



interface IProps {
    children: any
}

export default Index;