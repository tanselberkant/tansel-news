import { Route, Routes } from 'react-router-dom';
import AuthRouter from './routes/AuthRouter';
import Login from './pages/auth/Login';
import UserRouter from './routes/UserRouter';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import NewsPage from './pages/NewsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AuthRouter />}>
          <Route path={'/login'} element={<Login />} />
        </Route>
        <Route element={<UserRouter />}>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
