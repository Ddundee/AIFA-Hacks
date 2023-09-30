import Link from "next/link"
import NavBar from "../../component/navBar"
import './home.css'
export default function Home() {
  return (
    <div className="index">
      <div className="div">
        <NavBar />
        <div className="group-2">
          <div className="frame-3">
            <Link className="text-wrapper-4" href={'/questionarrie'}>Evaluate your carbon footprint</Link>
            <img
              className="img"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651866de8ebbada1a7a18b8a/img/vector-1.svg"
            />
          </div>
          <div className="frame-4">
            <Link className="text-wrapper-4" href="/learn-more">Learn More</Link>
            <img
              className="img"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651866de8ebbada1a7a18b8a/img/vector-1.svg"
            />
          </div>
          <div className="overlap-group">
            <div className="text-wrapper-5">What is your footprint?</div>
            <p className="p">Get to know about your carbon footprint!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
