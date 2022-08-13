import React from 'react';
import * as Styled from './styled'

const Index = ({children, onTrigger, onSelect, ...props}: IProps) => {
    if (onTrigger) {
        return (
            <Styled.DropdownItem onClick={onTrigger} {...props}>
                {children}
            </Styled.DropdownItem>
        );
    } else {
        return (
            <Styled.DropdownItem onClick={onSelect ? () => onSelect(children) : undefined}  {...props}>
                {children}
            </Styled.DropdownItem>
        );
    }
};


interface IProps {
    children: any
    onTrigger?: () => void
    onSelect?: (value: string) => void
}

export default Index;