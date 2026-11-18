import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/SiteLayout';
import Home from '@/pages/Home';
import Protocolo from '@/pages/Protocolo';
import Personalidades from '@/pages/Personalidades';
import PersonalidadeDetalhe from '@/pages/PersonalidadeDetalhe';
import Dicas from '@/pages/Dicas';
import Depoimentos from '@/pages/Depoimentos';
import Sobre from '@/pages/Sobre';
import NaoEncontrado from '@/pages/NaoEncontrado';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/protocolo" element={<Protocolo />} />
        <Route path="/personalidades" element={<Personalidades />} />
        <Route path="/personalidades/:slug" element={<PersonalidadeDetalhe />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
