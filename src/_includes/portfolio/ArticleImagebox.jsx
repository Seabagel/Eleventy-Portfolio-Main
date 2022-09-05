export default function ArticleImagebox({
  imgURL,
  imgAlt,
  headerText,
  children,
}) {
  return (
    <article style={{flexBasis: "1"}}>
      <img src={imgURL} alt={imgAlt} />
      {headerText ? <h2>{headerText}</h2> : ""}
      {children}
    </article>
  );
}


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
