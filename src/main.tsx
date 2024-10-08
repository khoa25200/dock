import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/home/HomePage.tsx';
// import ContextProvider from './libs/context/index.tsx';
import { ROUTES } from './configs/constants/routes.ts';
import ProfilePage from './pages/profile/ProfilePage.tsx';
import AboutPage from './pages/about/about.tsx';
import SignUpPage from './pages/account/SignUpPage/SignUpPage.tsx';
import SignInPage from './pages/account/SignInPage/SignInPage.tsx';
import AuthPage from './pages/account/AuthPage/AuthPage.tsx';
import ChatPage from './pages/chat/chat.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />

      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route path={ROUTES.CHAT} element={<ChatPage />} />
    </>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextProvider> */}
    <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </StrictMode>
);
