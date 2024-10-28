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
import Loading from './components/loadings/Loading.tsx';
import { Provider } from 'react-redux';
import { store } from './libs/redux/store.ts';

// Lazy load the pages
const HomePage = lazy(() => import('./pages/home/HomePage.tsx'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage.tsx'));
const SignUpPage = lazy(
  () => import('./pages/account/SignUpPage/SignUpPage.tsx')
);
const SignInPage = lazy(
  () => import('./pages/account/SignInPage/SignInPage.tsx')
);
const VerifyPage = lazy(
  () => import('./pages/account/VerifyPage/VerifyPage.tsx')
);
const ChatPage = lazy(() => import('./pages/chat/ChatPage.tsx'));
const SignInOtpPage = lazy(
  () => import('./pages/account/SignInOtpPage/SignInOtpPage.tsx')
);
const AboutPage = lazy(() => import('./pages/about/about.tsx'));
const Workspace = lazy(() => import('./pages/workspace/Workspace.tsx'));

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
      <Route
        path={ROUTES.ABOUT}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <AboutPage />
          </Suspense>
        }
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
        path={ROUTES.VERIFY}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <VerifyPage />
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
      <Route
        path={ROUTES.WORKSPACE}
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <Workspace />
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
