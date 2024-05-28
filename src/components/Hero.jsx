import "../App.css";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="button-container">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          width="530px"
          height="487px"
          src="../../public/Images/shoe_image.png"
          alt="hero-image"
        />
      </div>
    </main>
  );
};

export default Hero;
