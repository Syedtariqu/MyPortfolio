import "./ProjectList.css";
import Project from "./Project";
import im1 from "../assets/Home/Resturent.png";
import im2 from "../assets/Home/Resturent_1.png";
import im3 from "../assets/Home/protfolio.png";
import im4 from "../assets/Home/pro.jpg";
import im5 from "../assets/Home/weather.png";
import im6 from "../assets/Home/expense.png";

const ProjectList = () => {
  return (
    <section id="project">
      <div className="pl">
        <div className="section_title">
          <h1>My <span>PRO</span>jects</h1>
        </div>
        <div className="pl-list">

          <Project img={im1} />
          <Project img={im2} />
          <Project img={im3} />
          <Project img={im4} />
          <Project img={im5} />
          <Project img={im6} />

        </div>
      </div>
    </section>
  );
};

export default ProjectList;