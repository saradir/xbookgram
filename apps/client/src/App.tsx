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
import { SettingsLayout } from './pages/SettingsLayout';
import { UserInfoSettings } from './pages/UserInfoSettings';
import { PrivacySettings } from './pages/PrivacySettings';
import { MiscSettings } from './pages/MiscSettings';
import AuthCallbackPage from './pages/AuthCallbackPage';

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={ <AuthCallbackPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/users/:userId" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="settings" element={<SettingsLayout />}>
            <Route path="/settings/info" element={<UserInfoSettings />} />
            <Route path="/settings/privacy" element={<PrivacySettings />} />
            <Route path="/settings/misc" element={<MiscSettings />} />
          </Route>
        </Route>
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
