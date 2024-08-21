import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div>
          <a href="" className="power-btn">POWERFULL</a><br />
          <span>Group</span><br />
          <span>Practice</span><br />
          <span>With Trainer</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel tenetur
          delectus dolorum minima vitae quas id rerum eligendi magnam officiis
          quaerat, dolores suscipit quos facilis, quibusdam itaque officia.
          Eaque inventore optio in magni odit quod rem dolorum voluptates fugit
          amet.
        </p>
        <div className="hero-btns">
          <br />
          <a href="" className="sign-btn">Sign Up</a>
          <a href="" className="details-btn">Details</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
