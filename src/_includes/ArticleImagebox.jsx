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
