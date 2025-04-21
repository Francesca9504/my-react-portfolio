import backgroundImg from "../asset/background-img.jpg"; // Adjust the path to your actual file location

const Home = () => {
  return (
    <section
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>Welcome to My Portfolio</h4>
      <p2>Francesca Lorthe</p2>
    </section>
  );
};

export default Home;
