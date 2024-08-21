import './Calculator.css';

function Calculator() {

  return (
    <section className="calculator-bmi">
      <div className="calculator">
        <div className="bmi-index">
          <h2>BMI Calculator</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years ald.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years ald.
          </p>
          <div className="input">
            <div>
              <input type="number" id="height" placeholder="Your Height" />
              <span>cm</span>
            </div>
            <div>
              <input type="number" id="weight" placeholder="Your Weight" />
              <span>kg</span>
            </div>
          </div>
        </div>
        <div className="action">
          <div className="result">
            <h4>Your BMI :</h4>
            <span id="result"></span>
          </div>
          <br /><br />
          <div className="img-bmi">
            <div className="after"></div>
            <img src="./src/img/bmi-index.jpg" alt="bmi" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
