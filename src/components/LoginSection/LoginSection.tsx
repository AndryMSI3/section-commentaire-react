import React from 'react'
import './LoginSection.scss'  // Import du fichier de styles SCSS

// Interface des props pour le composant LoginSection
interface LoginSectionProps {
  loginLink?: string | (() => void)  // Lien ou fonction pour l'action de connexion
  signUpLink?: string | (() => void)  // Lien ou fonction pour l'action d'inscription
  onLogin?: string | (() => void)  // Fonction ou lien de connexion personnalisé
  onSignUp?: string | (() => void)  // Fonction ou lien d'inscription personnalisé
}

const LoginSection = ({
  loginLink,
  signUpLink,
  onLogin,
  onSignUp
}: LoginSectionProps) => {
  // Fonction appelée lors du clic sur le bouton "Log In"
  const handleLoginClick = () => {
    const loginAction = onLogin || loginLink  // Priorité à la fonction `onLogin`, sinon utilise `loginLink`
    if (typeof loginAction === 'function') {
      loginAction()  // Si c'est une fonction, on l'appelle
    } else if (loginAction) {
      window.location.href = loginAction  // Sinon, on redirige vers l'URL fournie
    }
  }

  // Fonction appelée lors du clic sur le bouton "Sign Up"
  const handleSignUpClick = () => {
    const signUpAction = onSignUp || signUpLink  // Priorité à la fonction `onSignUp`, sinon utilise `signUpLink`
    if (typeof signUpAction === 'function') {
      signUpAction()  // Si c'est une fonction, on l'appelle
    } else if (signUpAction) {
      window.location.href = signUpAction  // Sinon, on redirige vers l'URL fournie
    }
  }

  return (
    <div className='signBox'>  {/* Conteneur principal pour la section de connexion */}
      <div className='signLine'>Log in or sign up to leave a comment</div>  {/* Message invitant l'utilisateur à se connecter ou s'inscrire */}
      <div>
        {/* Bouton pour la connexion */}
        <button className='loginBtn' name='login' onClick={handleLoginClick}>
          Log In
        </button>
        {/* Bouton pour l'inscription */}
        <button className='signBtn' name='signup' onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default LoginSection
