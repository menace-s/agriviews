import '../../styles/Register/style.css'
import image from '../../assets/images/signup/2.jpg'
import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';

interface dataConnect {
  email: string,
  password: string,
}

const Login: React.FC = () => {

  const [connectData, setConnectData] = useState<dataConnect>({
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConnectData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Données soumises :", connectData);
  }

  return (
    <div className='login-container'>
      <div className="login-content">
        <div className="left-login">
          <img src={image} alt="imge de connexion" className="img" />
        </div>
        <div className="right-login">
          <h2 className='title-conenct'>Bienvenue sur AgriDigital</h2>
          <p className='title-para'>Connectez-vous pour accéder à votre espace personnel.</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="email-input">
              <label htmlFor="email">Email</label>
              <input type="text" name='email' id='email' onChange={handleChange} value={connectData.email} placeholder='Adresse email...' />
            </div>
            <div className="email-input">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name='password' id='password' onChange={handleChange} value={connectData.password} placeholder='Mot de passe...' />
            </div>
            <div className="box-button mt-8">
              <button type="submit" className="bg-pureBlue m-auto p-3 uppercase text-whiteSignup text-center block rounded ">Se Connecter</button>
              <h3 className='text-xs mt-4 ml-8 text-gray mb-3'>Pas encore membre? <Link to='/signup' className='underline text-whiteBlue'>S'inscrire ici.</Link></h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
