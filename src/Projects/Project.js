import "./Project.css";

const Project = ({ img }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a target="_blank" rel="noreferrer">
        <img src={img} className="p-img" />
      </a>
    </div>
  );
};

export default Project;