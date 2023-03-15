import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';

const Root = () => {

    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    const modeChangeHandler = () => {
        setMode(prevMode => prevMode === "light" ? "dark" : "light")
    }
    return (
        <ThemeProvider theme={darkTheme}>
            <Navbar onModeChange={modeChangeHandler} mode={mode} />
        </ThemeProvider>
    )
}

export default Root