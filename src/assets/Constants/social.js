import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdSms } from 'react-icons/md'

export const shareContent = {
  title: 'Free Live Webinar for Married Couples',

  message:
    "Sometimes the first step to healing your marriage isn't fixing your partner—it's reconnecting with yourself. Join Khushboo Khushnay's FREE live webinar and discover practical tools, emotional clarity, and a new perspective. Register here:",
}

export const getShareLinks = (fullMessage) => [
  {
    label: 'WhatsApp',
    href: `https://wa.me/?text=${encodeURIComponent(fullMessage)}`,
    icon: FaWhatsapp,
    className: 'share-whatsapp',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: FaInstagram,
    className: 'share-instagram',
    copyOnClick: true,
  },
  {
    label: 'Gmail',
    href: `mailto:?subject=${encodeURIComponent(shareContent.title)}&body=${encodeURIComponent(fullMessage)}`,
    icon: MdEmail,
    className: 'share-gmail',
  },
  {
    label: 'Message',
    href: `sms:?body=${encodeURIComponent(fullMessage)}`,
    icon: MdSms,
    className: 'share-sms',
  },
]
