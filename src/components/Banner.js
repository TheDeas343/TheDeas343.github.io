
import "../styles/Banner.css"
import fotoPerfil from "../assets/img/foto_perfil.png"


function Banner()  {
 

  return (
    <div className = "div-banner">
      <section className="banner" >
        <section className ="content">
          <span className = "banner-text" >Hi! I'm Andreas Cisi </span>
          <h1 className="gradient-text">Software Developer</h1>
          <span className = "banner-text">I'm a Computer Engineering student at Unicamp since 2021.</span>
          <span className = "banner-text">I began my journey by participating in Mathematics and Physics Olympiads in high school, which sparked my fascination with exact sciences. Along with my drawing skills, the field of game development has always caught my attention, which is why I decided to pursue a degree in Computer Engineering.</span>
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