import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { PublicRoute } from '@/components/PublicRoute';
import { Layout } from '@/components/Layout';
import { LoginPage } from '@/pages/LoginPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { FeedPage } from './pages/FeedPage';
import { ProfilePage } from './pages/ProfilePage';
import { PostPage } from './pages/PostPage';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/users/:userId" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
