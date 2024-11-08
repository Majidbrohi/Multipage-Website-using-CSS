
import Image from "next/image";
import c1 from "../img/c1.jpg";
import c2 from "../img/c2.jpg";
import c3 from "../img/c3.jpg";
import c4 from "../img/c4.jpg";
import c5 from "../img/c5.jpg";
import c6 from "../img/c6.jpg";
import c7 from "../img/c7.jpg";
import c8 from "../img/c8.jpg";



export default function Home() {
  return (
    
   <div className="mbox">
   
    <div className="box1">
       <br />
    <div className="box2">
      <h1 className="box2-h1">Modern Interior Design Studio</h1>
      <p className="box2-p">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
      <button className="box2-btn">shop now</button>
      <button className="box2-btn">explore</button>
    </div></div>
    <center>
    <div className="heading">
    <h1 className="haeding-h1">our catalogue</h1>
    </div></center>
    <div className=" box3 ">
      
      <div className="box3-div ">
      <Image src={c1} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c2} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c3} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c4} alt="" width={250} className="box3-img"/>
      </div> 
      <div className="box3-div ">
      <Image src={c5} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c6} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c7} alt="" width={250} className="box3-img"/>
      </div>
      <div className="box3-div ">
      <Image src={c8} alt="" width={250} className="box3-img"/>
      </div>
    </div>
   </div>
  );
}
