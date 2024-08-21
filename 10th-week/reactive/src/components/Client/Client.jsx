import './Client.css';

function Client() {
  return (
    <section className="review" id="review">
      <div className="title">
        <h2 style={{color: "#325492"}}>REVIEW CLIENT</h2>
        <div className="shadow"></div>
        <p style={{fontSize: "1.2rem", paddingTop: "2rem"}}>
          Lorem ipsum is not simply random text. It has roots in a piece of
          classical at <br />
          Hampden-Sydney College
        </p>
      </div>
      <div className="client">
        <div className="client-head">
          <div className="client-title">
            <img src="./src/img/client1.jpg" alt="client1" className="client-img" />
            <div style={{padding: "0.3rem 1rem"}}>
              <span style={{fontSize: "1.3rem"}}><strong>Diet Expert</strong></span
              ><br /><br />
              <span><strong>CFO</strong></span>
            </div>
          </div>
          <div className="client-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur velit quis doloribus cupiditate dignissimos reiciendis
            praesentium nemo architecto reprehenderit eum optio ducimus at modi
            quisquam, labore ex. Est, repudiandae.
          </div>
        </div>
        <div className="client-head">
          <div className="client-title">
            <img src="./src/img/client2.jpg" alt="client2" className="client-img" />
            <div style={{padding: "0.3rem 1rem"}}>
              <span style={{fontSize: "1.3rem"}}
                ><strong>Cardio Trainer</strong></span
              ><br /><br />
              <span><strong>CEO</strong></span>
            </div>
          </div>
          <div className="client-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod deserunt vel, assumenda repellendus amet atque odio cumque ad
            repudiandae excepturi, illo iusto veritatis asperiores maxime
            exercitationem rem?
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
