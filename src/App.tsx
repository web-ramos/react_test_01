import { FC } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Posts from './pages/Posts'
import Users from './pages/Users'

const App: FC = () => {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Users />} />
          <Route path='users/:userId/posts' element={<Posts />} />
          <Route path="*" element={<Users />} />
        </Route>
      </Routes>

      <Outlet />
    </>
  );
}

export default App