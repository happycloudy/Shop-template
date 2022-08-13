import React from 'react';
import * as Styled from './styled'

const Index = ({children, active, ...props}: IProps) => {
    return (
        active ?
            <Styled.DropdownMenu {...props}>
                {children}
            </Styled.DropdownMenu> :
            <></>
    );
};


interface IProps {
    children: any
    active: boolean
}

export default Index;