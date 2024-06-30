import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './Home/Home';
import NotFound from "./not-found";
import Loading from "./layout/Loading";

// Child App
const ChildApp1 = lazy(() => import('./ChildApp/ChildApp1'))


function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/ChildApp1" element={<ChildApp1 />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
