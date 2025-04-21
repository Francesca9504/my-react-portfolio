import bird1 from "../asset/bird1.jpg";
import bird2 from "../asset/bird2.jpg";
import orange1 from "../asset/orange1.jpg";
import orange2 from "../asset/orange2.jpg";
import portrait1 from "../asset/portrait1.jpg";
import portrait2 from "../asset/portrait2.jpg";

const Projects = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>My 3D Art Projects</h1>
      <ul>
        <h3>The Bird</h3>
        <p>
          This bird sculpture is a piece I created by hand, using plaster to
          sculpt the intricate details and capture the natural movement of the
          bird. The work is a 3D representation that highlights my skill and
          passion for transforming a simple medium into a abstract lifelike form
        </p>

        <div className="image-container">
          <img
            src={bird1}
            alt="Screenshot of project 1 - image 1"
            className="project-image"
          />
          <img
            src={bird2}
            alt="Screenshot of project 1 - image 2"
            className="project-image"
          />
        </div>

        <h3>Orange Disco</h3>
        <p>
          For this project, I used 3D shapes like squares and rectangles to
          create three painting studies, with one inspired by an orange and a
          disco ball. I explored hiding and revealing shapes creatively, using
          the orange theme to blend patterns and colors within the disco ball
          and surrounding elements.
        </p>

        <div className="image-container">
          <img
            src={orange1}
            alt="orange disco ball part 1"
            className="project-image"
          />
          <img
            src={orange2}
            alt="orange disco ball part 2"
            className="project-image"
          />
        </div>

        <h3>Francesca's Portrait</h3>
        <p>
          For this project, I created a representational portrait using
          oil-based clay, guided by reference photos of myself from multiple
          angles. I used an additive approach to sculpt my facial features,
          starting with the bone structure and gradually adding detail to create
          a realistic and dimensional likeness
        </p>

        <div className="image-container">
          <img
            src={portrait1}
            alt="Francesca personal portrait 1"
            className="project-image"
          />
          <img
            src={portrait2}
            alt="Francesca personal portrait 2"
            className="project-image"
          />
        </div>
      </ul>
    </section>
  );
};

export default Projects;
