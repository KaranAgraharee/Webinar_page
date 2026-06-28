import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MotionButton } from '../assets/animations/reveal.jsx'
import { useRegisterWebinar } from '../hooks/useRegisterWebinar.js'
import { formatWebinarPrice } from '../utils/webinar.js'
import { CTA } from '../assets/Constants/Cta_footer'

// ─── Registration Modal ───────────────────────────────────────────────────────

function RegistrationModal({ isOpen, onClose, webinar }) {
  const { register, status, message, isRegistered } = useRegisterWebinar()
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' })
  const navigate = useNavigate()

  const isLoading = status === 'loading'
  const isSuccess = status === 'success' || isRegistered

  // Navigate to success page as soon as registration is confirmed.
  // This hook MUST live above any early returns (Rules of Hooks).
  useEffect(() => {
    if (isSuccess) {
      const t = setTimeout(() => {
        sessionStorage.setItem('registrationSuccess', 'true')
        onClose()
        navigate('/registration-success')
      }, 400)
      return () => clearTimeout(t)
    }
  }, [isSuccess, navigate, onClose])

  // Early return AFTER all hooks have been called
  if (!isOpen) return null

  const validate = () => {
    const e = { name: '', phone: '', email: '' }
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors)
      return
    }
    setErrors({ name: '', phone: '', email: '' })
    await register(form)
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <div className="reg-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="reg-modal-title">

      <div className="reg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="reg-modal__close" onClick={onClose} aria-label="Close">×</button>

        <div className="reg-modal__header">
          <div className="reg-modal__icon">🎓</div>
          <h2 id="reg-modal-title" className="reg-modal__title">Register for Webinar</h2>
          {webinar && (
            <p className="reg-modal__subtitle text-pink-700">
              {webinar.title} · {formatWebinarPrice(webinar.price)}
            </p>
          )}
        </div>

        {isSuccess ? (
          <div className="reg-modal__success">
            <div className="reg-modal__success-icon">✅</div>
            <h3>You're registered!</h3>
            <p>{message || 'Check your email for confirmation details.'}</p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="reg-modal__form" onSubmit={handleSubmit} noValidate>
            <div className="reg-field">
              <label htmlFor="reg-name">Full Name *</label>
              <input
                id="reg-name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange('name')}
                disabled={isLoading}
                autoComplete="name"
              />
              {errors.name && <span className="reg-field__error">{errors.name}</span>}
            </div>

            <div className="reg-field">
              <label htmlFor="reg-phone">Phone Number *</label>
              <input
                id="reg-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange('phone')}
                disabled={isLoading}
                autoComplete="tel"
              />
              {errors.phone && <span className="reg-field__error">{errors.phone}</span>}
            </div>

            <div className="reg-field">
              <label htmlFor="reg-email">Email Address *</label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange('email')}
                disabled={isLoading}
                autoComplete="email"
              />
              {errors.email && <span className="reg-field__error">{errors.email}</span>}
            </div>

            {message && status === 'error' && (
              <p className="reg-modal__api-error" role="alert">{message}</p>
            )}

            <MotionButton
              type="submit"
              className="btn btn-primary reg-modal__submit"
              disabled={isLoading}
            >
              {isLoading
                ? 'Processing…'
                : webinar?.price > 0
                  ? `Pay ${formatWebinarPrice(webinar.price)} & Register`
                  : 'Pay and Register'}
            </MotionButton>

            <p className="reg-modal__privacy text-blue-700">
              🔒 Your information is secure and will only be used for this webinar.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Register Button ──────────────────────────────────────────────────────────

const Register = ({ className = 'btn btn-primary', label, pulse = false }) => {
  const { webinar, webinarLoading } = useRegisterWebinar()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const buttonLabel = label ?? (
    webinar
      ? `${CTA.buttonText} · ${formatWebinarPrice(webinar.price)}`
      : CTA.buttonText
  )

  const buttonText = webinarLoading ? 'Loading…' : buttonLabel

  return (
    <>
      <div className="register-action">
        <MotionButton
          type="button"
          className={className}
          onClick={() => setIsModalOpen(true)}
          disabled={webinarLoading}
          pulse={pulse}
        >
          Register
        </MotionButton>
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        webinar={webinar}
      />
    </>
  )
}

export default Register
