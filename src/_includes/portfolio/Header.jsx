import "../styles/header.css";

export default function jumbotron({ backgroundUrl }) {
  const componentStyle = (backgroundUrl = "") => ({
    backgroundImage: `url("${backgroundUrl}")`,
  });
  return (
    <header className="container">
      <div className="headerImage" style={componentStyle(backgroundUrl)}></div>
      <span>
        <h1>Header</h1>
        <p>some text over here</p>
      </span>
    </header>
  );
}
