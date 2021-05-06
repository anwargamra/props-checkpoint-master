import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";
import PropTypes from "prop-types";
import ProfileItems from "./ProfileItems";
const styleObject = { display: "flex" , justifyContent: "center", backgroundColor: "black"}
const styleObject1 = { paddingTop: "10px",paddingRight: "10px",paddingBottom: "300px",
  paddingLeft: "10px" }
const styleObject2 = { color: "#919aa3 ", textAlign: "center",}

const Profile = ({
  fullName,
  bio,
  handleAlert,
  children,
  Email,
  phoneNumber,
}) => {
  return (
    <div style={styleObject}>
      <div className="page-content page-container" id="page-content">
        <div style={styleObject1}>
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">{children}</div>
                      <h5 >{fullName} </h5>
                      <h6>{bio}</h6>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information Contact
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 style={styleObject2} >{Email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 style={styleObject2}>{phoneNumber}</h6>
                        </div>
                      </div>

                      <div className="row">                         
                          <p className=" f-w-600 m-b-20 p-b-5 b-b-default ">Master Thesis subject</p>
                          <h6 style={styleObject2}>Data Driven Computational mechanics</h6>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => handleAlert(" I'm Gamra Anwar")}
                          >
                            show my name
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "This is the Name",
  bio: "this the biography",
  handleAlert: " Alert",
  children: "image",
  Email: "this is his email",
  phoneNumber: "this is his phone number",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  handleAlert: PropTypes.func,

  Email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default Profile;
