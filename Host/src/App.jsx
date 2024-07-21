import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './Home/Home';
import NotFound from "./not-found";
import Loading from "./layout/Loading";
import AuthProvider from "./hooks/useAuth";

// Remote Apps
const Remote1 = lazy(() => import('Remote1/Remote1'))

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/App/Remote1" element={<Remote1 />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
