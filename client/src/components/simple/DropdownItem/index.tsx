import React from 'react';
import * as Styled from './styled'

const Index = ({children, onTrigger, onSelect, active, ...props}: IProps) => {
    if (onTrigger) {
        return (
            <Styled.DropdownItem onClick={onTrigger} isTrigger active={active} {...props}>
                {children}
            </Styled.DropdownItem>
        );
    } else {
        return (
            <Styled.DropdownItem onClick={onSelect ? () => onSelect(children) : undefined} active={active} {...props}>
                {children}
            </Styled.DropdownItem>
        );
    }
};


interface IProps {
    children: any
    onTrigger?: () => void
    onSelect?: (value: string) => void
    active?: boolean
    animated?: boolean
}

export default Index;