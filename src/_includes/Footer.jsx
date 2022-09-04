import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="disclaimer">disclaimer Text</p>
      <br />
      <div class="flex-container">
        <div class="flex-items">navigation A</div>
        <div class="flex-items">page B</div>
        <div class="flex-items">Form C</div>
      </div>
      <br />
      <br />
      <div class="flex-container">
        <div class="flex-items">Instagram</div>
        <div class="flex-items">ArtStation</div>
        <div class="flex-items">SketchFab</div>
        <div class="flex-items">GitHub</div>
      </div>
      <br />
      <p className="copyright">Copyright Text</p>
    </footer>
  );
}
