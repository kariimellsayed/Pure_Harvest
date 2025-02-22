// Header
import Header from "../../../Components/Website/Home/Header/Header.js";
// Achieve
import Achieve from "../../../Components/Website/Home/Achieve/Achieve.js";
// Services
import OurServices from "../../../Components/Website/Home/Services/Services.js";
// Answer
import Answer from "../../../Components/Website/Home/Answer/Answer.js";

export default function MainWeb() {
  return (
    <>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/*Start Our Achievements */}
      <Achieve />
      {/*End Our Achievements */}

      {/* Start Our Services */}
      <OurServices />
      {/* End Our Services */}

      {/* Start Answers */}
      <Answer />
      {/* End Answers */}
    </>
  );
}
