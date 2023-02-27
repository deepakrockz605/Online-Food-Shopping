import React, { useEffect } from "react";
import Home from "./Home";

const GetIntouch = () => {
  useEffect(() => {
    window.scrollTo(0, 450);
  }, []);

  return (
    <div>
      <Home />
      <div
        className="ourStory--section getintouch--section paddling-top-20 paddling-bottom-30"
        id="StoryGetInTouch---section"
      >
        {/* <h1 className="text-center open_sanssemibold color-2e2e2e">Get In Touch</h1> */}
        <section className="story--dishSection">
          <div className="container-fluid">
            <div className="container">
              <div className="story--subHeader-box">
                <h2 className="story--subHeader text-center">
                  COME AND SEE US
                </h2>
                <h1 className="text-center open_sanssemibold color-2e2e2e story--Header">
                  Make your reservation at <br />
                  Delicious Restaurant
                </h1>
                <span className="border-dotCircle"></span>
              </div>
              <div>
                <p className="story--paraInfo">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="vc_columnInner__row paddling-top-20 rowColumnInnrOne">
                <div className="row">
                  <div className="col-md-6 rowColumnInnrOneIn">
                    <div className="vc_columnInner">
                      <div className="wpb_wrapper">
                        <h2 className="wpb_wrapper__heading">The History</h2>
                        <div className="wpb_wrapper__info">
                          The{" "}
                          <strong style={{ color: "#a20f0f " }}>
                            History of Kitchens
                          </strong>{" "}
                          and Cooks gives further intimation on Mr Boulanger
                          usual menu, stating confidently that “Boulanger served
                          salted poultry and fresh eggs, all presented without a
                          tablecloth on small marble tables”. Numerous
                          commentators have also referred to the supposed
                          restaurant owner’s eccentric habit of touting for
                          custom outside his establishment, dressed in
                          aristocratic fashion and brandishing a sword<p></p>
                          <br />
                          According to Miss Spang, there is not a shred of
                          evidence for any of it. She said: These legends just
                          get passed on by hearsay and then spiral out of
                          control. Her interest in{" "}
                          <strong style={{ color: "#a20f0f" }}>
                            Boulanger
                          </strong>{" "}
                          dates back to a history of food seminar in Paris in
                          the mid-1990s
                        </div>
                      </div>
                    </div>
                    <div className="ornamenet"></div>
                  </div>

                  <div className="col-md-6 abutImg">
                    <img
                      src={require("../Images/about01.jpg")}
                      alt="img"
                      className="img-fluid "
                    />
                  </div>
                </div>
              </div>

              <div className="vc_columnInner__row paddling-bottom-30 paddling-top-20 rowColumnInnrTwo">
                <div className="row">
                  <div className="col-md-6 abutImg">
                    <img
                      src={require("../Images/about05.jpg")}
                      alt="img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="vc_columnInner">
                      <div className="wpb_wrapper">
                        <div className="wpb_wrapper__info">
                          The{" "}
                          <strong style={{ color: "#a20f0f " }}>
                            History of Kitchens
                          </strong>{" "}
                          and Cooks gives further intimation on Mr Boulanger
                          usual menu, stating confidently that “Boulanger served
                          salted poultry and fresh eggs, all presented without a
                          tablecloth on small marble tables”. Numerous
                          commentators have also referred to the supposed
                          restaurant owner’s eccentric habit of touting for
                          custom outside his establishment, dressed in
                          aristocratic fashion and brandishing a sword<p></p>
                          <br />
                          According to Miss Spang, there is not a shred of
                          evidence for any of it. She said: These legends just
                          get passed on by hearsay and then spiral out of
                          control. Her interest in{" "}
                          <strong style={{ color: "#a20f0f " }}>
                            Boulanger
                          </strong>{" "}
                          dates back to a history of food seminar in Paris in
                          the mid-1990s
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="restaurent_timings--parallax">
            <div className="container">
              <div className="timings--container">
                <div className="restaurent_timings">
                  <h1 className="text-center font-30 color-ffffff opening-hrs story--Header">
                    Opening Hours
                  </h1>
                  <span className="border-dotCircle"></span>
                </div>

                <div className="timing--section">
                  <div className="container">
                    <div className="row margin-top-50">
                      <div className="col-md-4">
                        <div className="sun--image text-center">
                          <span className="icon-sun"></span>
                          <p className="timings_Header">Lunch</p>
                          <p className="timings_SubHeader">
                            12:00 PM - 4:00 PM
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="moon--image text-center">
                          <span className="icon-moon"></span>
                          <p className="timings_Header">Dinner</p>
                          <p className="timings_SubHeader">
                            07:00 PM - 12:00 AM
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="cheer--image text-center">
                          <span className="icon-cheers"></span>
                          <p className="timings_Header">Bar</p>
                          <p className="timings_SubHeader">
                            08:00 PM - 12:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactus__section">
            <h3 className="text-center open_sanssemibold color-2e2e2e story--Header paddling-top-30 paddling-bottom-20 ">
              Contact US
            </h3>
            <span className="border-dotCircle"></span>

            <div className="container">
              <p className="story--paraInfo">
                To Reserve a Table Please Fill the below details and Mentioned
                the number of Persons
              </p>
              <div className="row margin-top-30">
                <div className="col-md-8 pr-0 contactUs--column">
                  <div className="contactUs--image"></div>
                </div>
                <div className="col-md-4 contactUs--borderShadow">
                  <div className="contactusForm">
                    <div className="input-icons">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="input-icons margin-top-20">
                      <i className="fa fa-mobile icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Mobile"
                      />
                    </div>

                    <div className="input-icons margin-top-20">
                      <i className="fa fa-envelope icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group margin-top-20">
                      <textarea
                        name="txtMsg"
                        className="form-control formComment"
                        placeholder="Your Message *"
                        style={{
                          width: "100%",
                          height: "70px",
                          maxHeight: "90px",
                        }}
                      ></textarea>
                    </div>

                    <div className="text-center margin-top-20">
                      <button className="btn btn-primary contactSubmit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetIntouch;
