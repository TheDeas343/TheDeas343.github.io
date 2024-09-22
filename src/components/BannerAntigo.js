
import "../styles/Banner.css"
import fotoPerfil from "../assets/img/foto_perfil.png"


function Banner()  {
 

  return (
    <div className = "div-banner">
      <section className="banner" >
        <section className ="content">
          <span className = "banner-text" >Hi! I'm Andreas Cisi </span>
          <h1 className="gradient-text">Software Developer</h1>
           </section>
        <div className = "div-foto">
          <section className = "foto">
            <img src= {fotoPerfil} alt="Minha Foto" />
          </section>
        </div>
    </section>

    
    </div>
  )
}

export default Banner;