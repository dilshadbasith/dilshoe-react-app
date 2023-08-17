import { Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate=useNavigate();
  return (
    <Carousel id="home">
      <Carousel.Item>
        <Image
          src={require("./images/img1.jpg")}
          alt="Photo"
          className="w-100"
        />
        <Carousel.Caption>
          <button className="shopmenbtn" onClick={()=>navigate('/productmen')}>Shop Men</button>&nbsp;&nbsp;
          &nbsp;&nbsp;
          <button className="shopmenbtn"  onClick={()=>navigate('/productwomen')}>Shop Women</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={require("./images/img2.jpg")}
          alt="Photo"
          className="w-100"
        />
        <Carousel.Caption>
          <button className="shopmenbtn" onClick={()=>navigate('/productmen')}>Shop Men</button>&nbsp;&nbsp;
          &nbsp;&nbsp;
          <button className="shopmenbtn"  onClick={()=>navigate('/productwomen')}>Shop Women</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={require("./images/img3.jpg")}
          alt="Photo"
          className="w-100"
        />

        <Carousel.Caption>
          <button className="shopmenbtn" onClick={()=>navigate('/productmen')}>Shop Men</button>&nbsp;&nbsp;
          &nbsp;&nbsp;
          <button className="shopmenbtn" onClick={()=>navigate('/productwomen')}>Shop Women</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
