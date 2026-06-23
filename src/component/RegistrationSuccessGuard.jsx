import { Navigate } from 'react-router-dom'

/**
 * RegistrationSuccessGuard
 *
 * Protects the /registration-success route so it can only be accessed
 * immediately after a successful registration (when the sessionStorage
 * flag "registrationSuccess" has been set by the registration flow).
 *
 * If the flag is absent — e.g. the user types the URL directly, refreshes
 * after the flag was cleared, or opens it in a new tab — they are silently
 * redirected to the home page with no flash of the success content.
 */
export default function RegistrationSuccessGuard({ children }) {
  const hasFlag = sessionStorage.getItem('registrationSuccess') === 'true'

  if (!hasFlag) {
    // Replace the history entry so the back-button does not loop back here
    return <Navigate to="/" replace />
  }

  return children
}
