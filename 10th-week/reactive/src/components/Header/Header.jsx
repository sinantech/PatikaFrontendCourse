import './Header.css';

function Header() {
  
  window.addEventListener('scroll', function() { 
    let header = document.querySelector('header');
    let show = document.querySelector("#navbar");
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 20) {
        header.style.backgroundColor = '#325492'; 
        show.style.backgroundColor ='#325492';
    }else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        show.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    }
    });
  return (
    <header id="header">
      <div>
        <img src="../src/img/logo.png" alt="logo" />
      </div>
      <nav id="navbar">
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#trainer">Trainer</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#" className="join-btn">JOIN US</a>
      </nav>
     
    </header>
  )
}

export default Header
