import './Purchase.css';

function Purchase() {
  return (
    <section className="purchase">
    <div className="title">
      <h2 style={{color: "#325492"}}>PURCHASE FROM US</h2>
      <div className="shadow"></div>
      <p style={{fontSize: "1.2rem", paddingTop: "2rem"}}>
        Lorem ipsum is not simply random text. It has roots in a piece of
        classical at <br />
        Hampden-Sydney College
      </p>
    </div>
    <div className="cards">
      <div className="card">
        <img src="./src/img/purchase1.jpg" alt="purchase1" />
        <h3>Kettlebell / 5kg</h3>
        <h5>
          <span style={{textDecoration: "line-throughe"}}>89,99$ </span>/ 59,9$
        </h5>
        <div className="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
          <h5>Add To Cart</h5>
        </div>
      </div>
      <div className="card">
        <img src="./src/img/purchase2.jpg" alt="purchase2" />
        <h3>Treadmill</h3>
        <h5>
          <span style={{textDecoration: "line-through"}}>899,99$ </span>/ 599,9$
        </h5>
        <div className="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="shop-icon"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
          <h5>Add To Cart</h5>
        </div>
      </div>
      <div className="card">
        <img src="./src/img/purchase3.jpg" alt="purchase3" />
        <h3>Adjustable Dumbbell</h3>
        <h5>
          <span style={{textDecoration: "line-through"}}>89,99$ </span>/ 59,9$
        </h5>
        <div className="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
          <h5>Add To Cart</h5>
        </div>
      </div>
      <div className="card">
        <img src="./src/img/purchase4.jpg"alt="purchase4" />
        <h3>Kettlebell / 3kg</h3>
        <h5>
          <span style={{textDecoration: 'line-through'}}>69,99$ </span>/ 49,9$
        </h5>
        <div className="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
          <h5>Add To Cart</h5>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default Purchase
