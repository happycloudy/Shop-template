import {useCallback, useState} from "react";

export const useToggle = (initialState: boolean = false): [boolean, any, any, any] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback((): void => setState(state => !state), []);
    const off = useCallback((): void => setState(false), []);
    const on = useCallback((): void => setState(true), []);

    return [state, toggle, off, on]
}