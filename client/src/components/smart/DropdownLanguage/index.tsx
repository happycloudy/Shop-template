import React, {useState} from 'react';
import Dropdown from "../../simple/Dropdown";
import DropdownItem from "../../simple/DropdownItem";
import DropdownMenu from "../../simple/DropdownMenu";
import {useToggle} from "../../../core/hooks/useToggle";

const Index = () => {
    const [show, toggleShow] = useToggle(false)
    const [language, setLanguage] = useState('RU')

    const handleSelectLanguage = (value: string) => {
        setLanguage(value)
        toggleShow()
    }


    return (
        <Dropdown>
            <DropdownItem onTrigger={toggleShow} active={show}>
                {language}
            </DropdownItem>

            <DropdownMenu active={show}>
                <DropdownItem animated onSelect={handleSelectLanguage} active={show}>
                    EN
                </DropdownItem>
                <DropdownItem animated onSelect={handleSelectLanguage} active={show}>
                    RU
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Index;