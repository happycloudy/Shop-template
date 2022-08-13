import React, {useState} from 'react';
import Dropdown from "../../simple/Dropdown";
import DropdownItem from "../../simple/DropdownItem";
import DropdownMenu from "../../simple/DropdownMenu";
import {useToggle} from "../../../core/hooks/useToggle";

const Index = () => {
    const [show, toggleShow] = useToggle(false)
    const [language, setLanguage] = useState('RU')

    const handleSelectLanguage = (value: string) => setLanguage(value)

    return (
        <Dropdown>
            <DropdownItem onTrigger={toggleShow}>
                {language}
            </DropdownItem>

            <DropdownMenu active={show}>
                <DropdownItem onSelect={handleSelectLanguage}>
                    EN
                </DropdownItem>
                <DropdownItem onSelect={handleSelectLanguage}>
                    RU
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Index;