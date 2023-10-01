import Link from 'next/link';
import './learn_more.css'

export default function LearnMore() {
    return (
        <div className="index">
          <div className="div">
            <div className="overlap">
              <div className="overlap-group">
                <div className="text-wrapper">Learn More!</div>
                <p className="what-is-a-carbon">
                  What is a carbon footprint and sustainability? <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· A carbon footprint is the total amount of greenhouse
                  gases, primarily carbon dioxide (CO2), and other pollutants emitted into the atmosphere as a result of
                  human activities.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Sustainability is the practice of using resources in a way that meets present needs without compromising
                  the ability of future generations to meet their needs.
                  <br />
                  <br />
                  How to Reduce Your Carbon Footprint Through Transportation
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Drive less
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Go easy on the acceleration and brakes
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Carpool
                  <br />
                  <br />
                  How to Reduce Your Carbon Footprint Through Food
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Choose organic and local foods that are in season
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Reduce your food waste
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· Use reusable cups, plates, utensils, bottles and containers
                  <br />
                  <br />
                  There are hundreds of other ways to decrease your carbon footprint that can be found in the resources
                  below! Take your first step to save our planet!
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· https://www.constellation.com/energy-101/energy-innovation/how-to-reduce-your-carbon-footprint.html#transportation
                </p>
                <img
                  className="final-removebg"
                  alt="Final removebg"
                  src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651875f5f34d7bc175bb24fc/img/top10-final-removebg-preview-1.png"
                />
              </div>
              <img
                className="image"
                alt="Image"
                src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651875f5f34d7bc175bb24fc/img/image-2.png"
              />
            </div>
            <div className="group">
              <div className="text-wrapper-2">CarbonTrack</div>
              <div className="frame">
                <div className="text-wrapper-3">Home</div>
                <div className="text-wrapper-4">Learn More</div>
                <div className="div-wrapper">
                  <Link className="text-wrapper-4" href={"/questionarrie"}>Questionarrie</Link>
                </div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-5">Learn More</div>
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651866de8ebbada1a7a18b8a/img/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      );
}