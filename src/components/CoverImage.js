import "../components/coverImage.css";
import Cover_Image from "../assets/cover_image.png";

const CoverImage = () => {
  return (
    <div className="coverImage-container">
      <img src={Cover_Image} alt="cover-pic-woman-and-car"></img>
    </div>
  );
};

export default CoverImage;
