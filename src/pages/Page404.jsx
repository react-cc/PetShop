import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Page404 = () => {
  return (
    <main className="container flex flex--center flex--column">
      <img className='dog-image' src={image} alt="404" />
      <p className="notfound-text">Página no encontrada</p>
    </main>
  );
};

export default Page404;