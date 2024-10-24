import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import ContextProvider from './libs/context/index.tsx';
import { ROUTES } from './configs/constants/routes.ts';
import { Provider } from 'react-redux';
import store from './libs/redux/index.ts';
import Loading from './components/loadings/Loading.tsx';
import AboutPage from './pages/about/about.tsx';

// Lazy load the pages
const HomePage = lazy(() => import('./pages/home/HomePage.tsx'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage.tsx'));
const SignUpPage = lazy(() => import('./pages/account/SignUpPage/SignUpPage.tsx'));
const SignInPage = lazy(() => import('./pages/account/SignInPage/SignInPage.tsx'));
const AuthPage = lazy(() => import('./pages/account/AuthPage/AuthPage.tsx'));
const ChatPage = lazy(() => import('./pages/chat/ChatPage.tsx'));
const SignInOtpPage = lazy(() => import('./pages/account/SignInOtpPage/SignInOtpPage.tsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.HOMEPAGE}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <ProfilePage />
          </Suspense>
        }
      />
      <Route path={ROUTES.ABOUT} element={<AboutPage />}
      />
      <Route
        path={ROUTES.SIGNUP}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SIGNIN}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <SignInPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.AUTH}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <AuthPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SIGNIN_OTP}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <SignInOtpPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.CHAT}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <ChatPage />
          </Suspense>
        }
      />
    </>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
