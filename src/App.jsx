import React, { useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  // If loading, show the loading page
  if (isLoading) {
    return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
       <Loading />
    </div>;
  }
  return (
    <>



      <RouterProvider router={routes} />
      <CssBaseline />
      <Toaster />

   
    </>
  );
}

export default App;