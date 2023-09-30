import { PersonCard } from "../../../component/PersonCard/personCard"
import './about_us.css'

export default function AboutUs() {
        return (
            <div className="index">
              <div className="div-2">
                <div className="frame">
                  <PersonCard text="Dhanush" text1="" />
                  <PersonCard text="Ashwin" text1="" />
                  <PersonCard text="Jayant" text1="" />
                </div>
                <div className="text-wrapper">About Us</div>
                <p className="p">Meet the faces behind CarbonTrack</p>
                <div className="group">
                  <p className="at-carbontrack-we">
                    <span className="span">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At CarbonTrack, we are on a mission to empower individuals,
                      businesses, and communities to take meaningful steps toward a sustainable future. We believe that every
                      action counts, and by understanding and reducing our carbon footprints, we can collectively make a
                      significant impact on the health of our planet.
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our mission is simple yet powerful: to provide the tools and
                      knowledge needed to make informed choices that reduce carbon emissions and promote a more sustainable way
                      of life. We envision a world where environmental consciousness is not just a choice but a way of life,
                      where individuals and organizations alike take responsibility for their carbon footprints and work
                      together to create a more sustainable future for generations to come.
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      Our Values
                      <br />
                    </span>
                    <span className="span">
                      Sustainability: We are committed to promoting sustainable practices in every aspect of life. Our app is
                      designed to help you make sustainable choices that benefit both the planet and future generations.
                      <br />
                      Accessibility: We believe that everyone should have access to the information and tools needed to reduce
                      their carbon footprint. Our app is user-friendly and accessible to people from all walks of life.
                      <br />
                      Education: Knowledge is the first step toward change. We provide educational resources and information to
                      help you understand the impact of your choices and the importance of reducing carbon emissions.
                      <br />
                      Community: We believe that change is most effective when we work together. Our app fosters a sense of
                      community by connecting like-minded individuals and organizations striving for a greener future.
                      <br />
                      Innovation: We are committed to staying at the forefront of technology and research to continuously
                      improve our carbon footprint calculator and provide the most accurate and up-to-date information.
                      <br />
                      Join us on our journey towards a more sustainable future. Together, we can make a difference, one
                      footprint at a time.
                    </span>
                  </p>
                </div>
                <div className="group-2">
                  <div className="text-wrapper-3">CarbonTrack</div>
                  <div className="frame-2">
                    <div className="text-wrapper-4">Home</div>
                    <div className="text-wrapper-5">Learn More</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-5">Resources</div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="text-wrapper-6">Learn More</div>
                    <img
                      className="img"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/6518667a3915e9964b3cb837/releases/651866de8ebbada1a7a18b8a/img/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) 
    
}