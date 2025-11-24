import { useState } from 'react';
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const [isLightMode, setisLightMode] = useState('false');

    return <button>{isLightMode ? <Moon /> : <Sun />}</button>
}