import React, { useState } from "react";
import mic from "../../Assets/mic.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const spkData = {
  script: "",
  link: "",
  topic: "",
  minutes: "",
  speaker1: "",
  speaker2: "",
  // speaker3: "",
  speaker1_age: "",
  speaker2_age: "",
  // speaker3_age: "",
  speaker1_gender: "",
  speaker2_gender: "",
  // speaker3_gender: "",
  speaker1_accent: "",
  speaker2_accent: "",
  // speaker3_accent: "",
};
function PodcastGenerator() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [speakerData, setSpeakerData] = useState(spkData);
  const handleChange = (e) => {
    setSpeakerData((s) => ({ ...s, [e.target.name]: e.target.value }));
    console.log(speakerData);
  };

  const podcastGenerateHandler = () => {
    const url = "send_content";
    // const url = process.env.REACT_APP_BASE_URL + 'send_content';
    const data = {
      speaker1: speakerData.speaker1,
      speaker2: speakerData.speaker2,
      speaker1_age: speakerData.speaker1_age,
      speaker2_age: speakerData.speaker2_age,
      speaker1_gender: speakerData.speaker1_gender,
      speaker2_gender: speakerData.speaker2_gender,
      speaker1_accent: speakerData.speaker1_accent,
      speaker2_accent: speakerData.speaker2_accent,
      content: speakerData.link,
    };
    setIsLoading(true);
    axios
      .post(url, data)
      .then((response) => {
        // Handle the API response data here (if needed)
        console.log("Data sent successfully:", response.data);
        setIsLoading(false);
        navigate("/podcastDownloader");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error("Error sending data:", error);
        setIsLoading(false);
      });
  };
  return (
    <>
      <div id="podcastGenerator" className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            {/* Row 1 */}
            <div className="row row1">
              <div className="col-sm-12 col-md-4 img">
                <img src={mic} alt="" />
              </div>
              <div className="col-sm-12 col-md-8 ">
                <h3>
                  Collab<span style={{ color: "#F54748" }}>Talk.ai</span>
                </h3>
                <h1>
                  <span style={{ color: "#F54748" }}>Get</span> Started
                </h1>
              </div>
            </div>
            {/* Row 2 */}
            <div className="row">
              <div className="col">
                <div class="input-group flex-nowrap">
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Your Script"
                    aria-label="yourscript"
                    aria-describedby="addon-wrapping"
                    style={{ backgroundColor: "#FDECEC" }}
                    rows="8"
                    cols="40"
                    name="script"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="row row3 my-4">
              <div className="col or">OR</div>
            </div>
            {/* Row 4 */}
            <div className="row row4 mb-5">
              <div className="col-sm-12 col-md-8 rd">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-8 ">
                    <div class="input-group flex-nowrap my-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Link"
                        aria-label="yourlink"
                        aria-describedby="addon-wrapping"
                        style={{ backgroundColor: "#FDECEC" }}
                        name="link"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col or">OR</div>
                    <div class="input-group flex-nowrap my-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Topic"
                        aria-label="yourtopic"
                        aria-describedby="addon-wrapping"
                        style={{ backgroundColor: "#FDECEC" }}
                        name="topic"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-sm-4 mt-md-0">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-8">
                    <div class="mb-3">
                      <label for="minutes" class="form-label">
                        Length of your podcast
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="minutes"
                        placeholder="minutes"
                        style={{ backgroundColor: "#FDECEC" }}
                        name="minutes"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            {/* Row 5 */}
            <div className="row my-5 py-4">
              <div className="col">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="speaker1" class="form-label">
                            Speaker 1
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="speaker1"
                            placeholder="Name"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker1"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="speaker2" class="form-label">
                            Speaker 2
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="speaker2"
                            placeholder="Name"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker2"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="speaker3" class="form-label">
                            Speaker 3 (Optional)
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="speaker3"
                            placeholder="Name"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker3"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="gender1" class="form-label">
                            Gender
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="gender1"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker1_gender"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              gender
                            </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="gender2" class="form-label">
                            Gender
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="gender2"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker2_gender"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              gender
                            </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="gender3" class="form-label">
                            Gender
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="gender3"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker3_gender"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              gender
                            </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="age1" class="form-label">
                            Age
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="age1"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker1_age"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              age
                            </option>
                            <option value="young">young</option>
                            <option value="old">old</option>
                            <option value="middle aged">middle aged</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="age2" class="form-label">
                            Age
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="age2"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker2_age"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              age
                            </option>
                            <option value="young">young</option>
                            <option value="old">old</option>
                            <option value="middle aged">middle aged</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="age3" class="form-label">
                            Age
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="age3"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker3_age"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              age
                            </option>
                            <option value="young">young</option>
                            <option value="old">old</option>
                            <option value="middle aged">middle aged</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="accent1" class="form-label">
                            Accent
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="accent1"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker1_accent"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              Accent
                            </option>
                            <option value="american">american</option>
                            <option value="british">british</option>
                            <option value="australian">australian</option>
                            <option value="indian">indian</option>
                            <option value="african">african</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="accent2" class="form-label">
                            Accent
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="accent2"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker2_accent"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              Accent
                            </option>
                            <option value="american">american</option>
                            <option value="british">british</option>
                            <option value="australian">australian</option>
                            <option value="indian">indian</option>
                            <option value="african">african</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  {/* <div className="col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-8">
                        <div class="mb-3">
                          <label for="accent3" class="form-label">
                            Accent
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="accent3"
                            style={{ backgroundColor: "#FDECEC" }}
                            name="speaker3_accent"
                            onChange={handleChange}
                          >
                            <option value="" selected>
                              Accent
                            </option>
                            <option value="american">american</option>
                            <option value="british">british</option>
                            <option value="australian">australian</option>
                            <option value="indian">indian</option>
                            <option value="african">african</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* Row 6 */}
            <div className="row row6">
              <div className="col">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                    <p>
                      Generate Conversational podcasts using your favorite news
                      articles or simply by giving a topic.{" "}
                    </p>
                  </div>
                  <div className="col-3"></div>
                </div>
                <div className="row my-4 pb-5">
                  <div className="col" style={{ textAlign: "center" }}>
                    <Link
                      className="btn btn-lg py-3 px-5 generateButton"
                      style={{
                        backgroundColor: "#F54748",
                        color: "white",
                        position: "relative",
                      }}
                      onClick={isLoading ? null : podcastGenerateHandler} // Disable the onClick event while loading
                    >
                      {isLoading ? (
                        <ThreeDots
                          height="80"
                          width="80"
                          radius="9"
                          color="white"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                          className="loader"
                          style={{
                            position: "absolute",
                            bottom: "-12px",
                            left: "43px",
                          }}
                        />
                      ) : (
                        <span>Generate</span>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default PodcastGenerator;
