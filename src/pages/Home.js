import React, {useState} from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";
import { init } from "@emailjs/browser";

export default function Home() {

  const [state, setState] = useState({});

  const handleStateUpdate = (field, value) => {
    setState({
      ...state,
      field, value
    })
  }
  init("user_Q4YWJFQfUGRN7ZrNUUSm3")

  const handleSubmit = () => {
    console.log(state)
  } 

  return (
    <>
    <Header isHomepage={true} />
    <div className="container homepageContainer">
      <FadeIn transitionDuration={2000}>
        <div className="centerJustify homeheight">
        <p className="homeText">BOOK YOUR STAY WITH US TODAY</p>
        <div className="aboutUsButton">
          <a href="/booking" className="aboutUsText">
            BOOK NOW
          </a>
        </div>
      </div>
      </FadeIn>
    </div>

    <div className="homeAboutSectionCon">
    <div className="homeAboutSectionContainer">
      <div className="homeAboutSection">
        <Fade>
        <h1 className="homeAboutSectionHeader">Accomodations</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio dui, cursus et dolor a, sagittis sagittis tortor. Praesent urna sapien, interdum at lectus sit amet, facilisis tristique diam. Sed magna velit, dictum eu ligula vel, dictum aliquam neque. Morbi et nisi ultricies, efficitur mauris ac, condimentum erat. Ut tempus lectus ac porta consectetur. Suspendisse nulla ipsum, volutpat eu velit id, volutpat malesuada ipsum. Vestibulum nibh leo, scelerisque at dictum id, semper non odio.</p>
        <p>Etiam semper sodales lacus. Aliquam blandit purus felis, ut vulputate nisi volutpat sit amet. Pellentesque egestas nulla eu libero condimentum lobortis. Aenean at convallis odio, eget porttitor leo. Suspendisse lacinia sem fermentum accumsan consectetur. Nullam dictum sapien at nunc varius, vitae dictum leo luctus. Etiam in imperdiet sem. Quisque quis rutrum turpis. Fusce sodales enim elit, nec lacinia nibh ultricies ac. Vestibulum at nisl justo. Suspendisse at malesuada massa, nec ultricies tortor. Fusce volutpat massa nec diam lacinia egestas eu ac neque. Vestibulum eget nisi ultrices sapien ultricies pulvinar vitae ac sapien. Nam nisl leo, mollis quis neque a, finibus imperdiet tellus. Cras tempus enim et porttitor hendrerit.</p>
        <div className="homeButton">
          <a href="/booking" className="homeButtonText">Reserve Cabin</a>
        </div>
        <img src="Abstract-Flower.png" alt="flower" className="flowerImage" />
        </Fade>
      </div>
    </div>

    <div className="homeAboutSectionContainer">
      <div className="homeAboutSection">
        <Fade>
        <h1 className="homeAboutSectionHeader">About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio dui, cursus et dolor a, sagittis sagittis tortor. Praesent urna sapien, interdum at lectus sit amet, facilisis tristique diam. Sed magna velit, dictum eu ligula vel, dictum aliquam neque. Morbi et nisi ultricies, efficitur mauris ac, condimentum erat. Ut tempus lectus ac porta consectetur. Suspendisse nulla ipsum, volutpat eu velit id, volutpat malesuada ipsum. Vestibulum nibh leo, scelerisque at dictum id, semper non odio.</p>
        <p>Etiam semper sodales lacus. Aliquam blandit purus felis, ut vulputate nisi volutpat sit amet. Pellentesque egestas nulla eu libero condimentum lobortis. Aenean at convallis odio, eget porttitor leo. Suspendisse lacinia sem fermentum accumsan consectetur. Nullam dictum sapien at nunc varius, vitae dictum leo luctus. Etiam in imperdiet sem. Quisque quis rutrum turpis. Fusce sodales enim elit, nec lacinia nibh ultricies ac. Vestibulum at nisl justo. Suspendisse at malesuada massa, nec ultricies tortor. Fusce volutpat massa nec diam lacinia egestas eu ac neque. Vestibulum eget nisi ultrices sapien ultricies pulvinar vitae ac sapien. Nam nisl leo, mollis quis neque a, finibus imperdiet tellus. Cras tempus enim et porttitor hendrerit.</p>
        <div className="homeButton">
          <a href="/about" className="homeButtonText">Meet the Founders</a>
        </div>
        </Fade>
      </div>
    </div>

    <div className="homeAboutSectionContainer">
      <div className="homeAboutSection">
        <Fade>
        <h1 className="homeAboutSectionHeader">Wedding Venue Inquiry</h1>
        <p>Tell us about your event and we will reach out to you shortly.</p>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" placeholder="Name" value={state.name} onChange={(e) => handleStateUpdate("name", e.target.value)} />

          <label>Future Spouses Name:</label>
          <input type="text" placeholder="Future Spouses Name" value={state.spouseName} onChange={(e) => handleStateUpdate("spouseName", e.target.value)} />

          <label>Email:</label>
          <input type="text" placeholder="Email" />

          <label>Year and Possible Season of Event:</label>
          <input type="text" placeholder="Year and Season" />

          <label>Any Details About Your Event. The More the Merrier:</label>
          <input type="text" placeholder="Details" />
          <div className="homeButton homeButtonText" onClick={handleSubmit}>
            Send
          </div>
        </form>
        
        <img src="Abstract-Flower.png" alt="flower" className="flowerImage" />
        </Fade>
      </div>
    </div>
    </div>
    </>
    
  );
}
