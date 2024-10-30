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
import store, { persistor } from './libs/redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './configs/constants/privateRoute.tsx';

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
      <Route element={<PrivateRoute />}>
        <Route
          path={ROUTES.PROFILE}
          element={
            <Suspense
              fallback={<Loading isLoading={true} isInfinitive={false} />}
            >
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <Suspense
              fallback={<Loading isLoading={true} isInfinitive={false} />}
            >
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHAT}
          element={
            <Suspense
              fallback={<Loading isLoading={true} isInfinitive={false} />}
            >
              <ChatPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.WORKSPACE}
          element={
            <Suspense
              fallback={<Loading isLoading={true} isInfinitive={false} />}
            >
              <Workspace />
            </Suspense>
          }
        />
      </Route>
      <Route
        path={ROUTES.HOMEPAGE}
        element={
          <Suspense
            fallback={<Loading isLoading={true} isInfinitive={false} />}
          >
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.SIGNUP}
        element={
          <Suspense
            fallback={<Loading isLoading={true} isInfinitive={false} />}
          >
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SIGNIN}
        element={
          <Suspense
            fallback={<Loading isLoading={true} isInfinitive={false} />}
          >
            <SignInPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.VERIFY}
        element={
          <Suspense
            fallback={<Loading isLoading={true} isInfinitive={false} />}
          >
            <VerifyPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SIGNIN_OTP}
        element={
          <Suspense
            fallback={<Loading isLoading={true} isInfinitive={false} />}
          >
            <SignInOtpPage />
          </Suspense>
        }
      />
    </>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
