// React Router Dom
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./layout/rootLayout"


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create a theme instance.


// Pages
import {Finance, Admin, History, Return, Conclusion, Conversion, Calendar} from "./pages";


const App = () => {

  const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Admin/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/history/:id" element={<History/>} />
        <Route path="/return/:id" element={<Return/>} />
        <Route path="/conclusion" element={<Conclusion/>} />
        <Route path="/conversion" element={<Conversion/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Route>
    )
  )

  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
      
    </>
  )
}

export default App