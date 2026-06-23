import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Hero,
  Social_Media,
  Header,
  Testimonial,
  Footer,
  Features,
  Faq,
  TruthLearn,
  CtaSection,
} from './component'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import ProtectedAdminRoute from './component/ProtectedAdminRoute.jsx'
import RegistrationSuccess from './pages/RegistrationSuccess.jsx'
import RegistrationSuccessGuard from './component/RegistrationSuccessGuard.jsx'
import './App.css'

function WebinarPage() {
  return (
    <div className="app-shell">
      <div className="global-background" aria-hidden="true">
        <div className="global-background__orb global-background__orb--left" />
        <div className="global-background__orb global-background__orb--right" />
      </div>

      <div className="app-content">
        <Header />

        <main>
          {/* <Hero />
          <Features />
          <TruthLearn />
          <Testimonial />
          <Social_Media />
          <Faq />
          <CtaSection /> */}
          <RegistrationSuccess />
        </main>

        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public webinar page */}
        <Route path="/" element={<WebinarPage />} />

        {/* Registration success page — guarded by sessionStorage flag */}
        <Route
          path="/registration-success"
          element={
            <RegistrationSuccessGuard>
              <RegistrationSuccess />
            </RegistrationSuccessGuard>
          }
        />

        {/* Admin portal */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        {/* Redirect /admin to dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App