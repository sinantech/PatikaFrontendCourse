import './Trainer.css';

function Trainer() {
  return (
    <section className="trainer" id="trainer">
    <div className="title">
      <h2 className="best-trainers">OUR BEST TRAINERS</h2>
      <div className="shadow"></div>
      <p className="trainer-parag">
        Lorem ipsum is not simply random text. It has roots in a piece of
        classical at <br />
        Hampden-Sydney College
      </p>
    </div>
    <div className="trainer-cards">
      <div className="trainer-card">
        <img className="card-img" src="./src/img/trainer1.jpg" alt="trainer1" />
        <div className="trainer-info">
          Jane Doe <br />
          Cardio Trainer
        </div>
        <div className="befores"></div>
        <div className="afters"></div>
      </div>
      <div className="trainer-card">
        <img className="card-img" src="./src/img/trainer2.jpg" alt="trainer2" />
        <div className="trainer-info">
          John Doe <br />
          Cardio Trainer
        </div>
        <div className="befores"></div>
        <div className="afters"></div>
      </div>
      <div className="trainer-card">
        <img className="card-img" src="./src/img/trainer3.jpg" alt="trainer3" />
        <div className="trainer-info">
          Jane Doe <br />
          Pilates Trainer
        </div>
        <div className="afters"></div>
        <div className="befores"></div>
      </div>
    </div>
  </section>
  )
}

export default Trainer
