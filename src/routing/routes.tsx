import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import LayoutPage from "../pages/LayoutPage";
import IslasPage from "../pages/IslasPage";
import BosquePage from "../pages/BosquePage";
import CaletaPage from "../pages/CaletaPage";

const router = createBrowserRouter([
    {   
        path: '/', 
        element: <LayoutPage />, 
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'islas', element: <IslasPage /> },
            { path: 'bosque', element: <BosquePage /> },
            { path: 'CaletaPage', element: <CaletaPage /> },
        ]
    }
])

export default router