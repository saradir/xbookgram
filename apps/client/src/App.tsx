import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { PublicRoute } from '@/components/PublicRoute';
import { Layout } from '@/components/Layout';
import { LoginPage } from '@/pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Feed</div>} />
          <Route path="/posts/:postId" element={<div>Post detail</div>} />
          <Route path="/users/:userId" element={<div>User profile</div>} />
        </Route>
        <Route path="/onboarding" element={<div>Onboarding</div>} />
      </Route>
    </Routes>
  );
}

export default App;
