import Profile from "./Profile.js";

import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";
import image from "./image.jpg";

const ProfileItems = () => {
  const handleAlert = (name) => {
    alert(`Hi ${name}`);
  };
  return (
    <div>
      <Profile
        fullName="Anwar GAMRA"
        bio="Gamra ANWAR ( born August,19 1994) knows that successful students become successful adults, He is a Web devolopper student and he has a master's degree student in mechanical engineer at the Université of Monastir "
        handleAlert={handleAlert}
        Email="gamraanwar@gmail.com"
        phoneNumber="53968527"
      >
        <img src={image} className="img-radius" alt="User-Profile-Image" />
      </Profile>
    </div>
  );
};

export default ProfileItems;
