import "../../App.css";

export function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-orbit">
        <span></span>
      </div>
      <p className="loader-text">Loading content</p>
    </div>
  );
}
