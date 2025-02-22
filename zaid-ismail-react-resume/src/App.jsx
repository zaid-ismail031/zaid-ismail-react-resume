import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from './pages/PortfolioPage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='resume' element={<ResumePage />} />
      <Route path='portfolio' element={<PortfolioPage />} />
    </Route>
  )
);

const App = () => {

  return <RouterProvider router={router}/>
};

export default App;
