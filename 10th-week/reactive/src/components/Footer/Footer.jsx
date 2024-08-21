import './Footer.css';

function Footer() {
  return (
    <footer>
    <div>
      <img src="./src/img/logo.png" alt="logo" height="70rem" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facere
        blanditiis vero nostrum fugiat ea dolorem quos, tempore praesentium
        officiis voluptates a eos. Illo blanditiis fugit placeat accusamus
        veritatis molestiae maxime enim corporis, temporibus aperiam nesciunt
        neque voluptatem dolore dicta impedit, iste eveniet tempore nemo iusto
        assumenda rem repudiandae sed.
      </p>
    </div>
    <div className="footer-links">
      <div>
        <p style={{fontSize: "1.7rem"}}>Information</p>
        <br />
        <a href="">About Us</a><br />
        <a href="">Classes</a><br />
        <a href="">Blog</a><br />
        <a href="">Contact</a>
      </div>
      <div>
        <p style={{fontSize: "1.7rem"}}>Helpful Links</p>
        <br />
        <a href="">Services</a><br />
        <a href="">Supports</a><br />
        <a href="">Terms & Condition</a><br />
        <a href="">Privacy Policy</a>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer
