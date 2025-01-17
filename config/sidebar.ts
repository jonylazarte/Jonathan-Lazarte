import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/shakadevv',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yehonatanlazarte/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jonathan-lazarte-3a71622b3/',
    icon: FaLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@jaydarianbeats4862',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/jonylazarte',
    icon: FaGithub,
  },
]
