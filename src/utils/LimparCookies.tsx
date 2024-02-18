import Cookies from 'js-cookie'

export default function limparCookies() {
  // Limpa os cookies
  localStorage.clear()
  Cookies.remove('token')
}
