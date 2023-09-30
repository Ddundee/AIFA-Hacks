import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="group">
          <div className="text-wrapper">CarbonTrack</div>
          <div className="frame">
            <Link className="text-wrapper-2" href={'/'}>Home</Link>
            <Link className="text-wrapper-3" href={'/about-us'}>About Us</Link>
            <div className="div-wrapper">
              <Link className="text-wrapper-3" href={'/resources'}>Resources</Link>
            </div>
          </div>
          <div className="frame-2">
            <Link className="text-wrapper-4" href={'/learn-more'}>Learn More</Link>
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651866de8ebbada1a7a18b8a/img/vector.svg"
            />
          </div>
        </div>
    )
}