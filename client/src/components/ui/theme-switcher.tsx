import { Button } from './button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme-provider';

const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();
    return (
        <div className="flex">
            <Button
                variant="outline"
                className="rounded-full p-2"
                size="icon"
                onClick={() => {
                    setTheme(theme == "dark" ? "light" : "dark");
                }}
            >
                {
                    theme == "dark" ? <Sun size={24} /> : <Moon size={24} />
                }
            </Button>
        </div>
    );
};

export default ThemeSwitcher;