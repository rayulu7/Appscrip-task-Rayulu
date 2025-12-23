export default function Filters() {
  return (
    <aside className="filters">
      <label className="checkbox">
        <input type="checkbox" /> CUSTOMIZABLE
      </label>

      <div className="filter">
        <div className="filter-head">
          <span>IDEAL FOR</span>
          <span>⌄</span>
        </div>
        <p className="unselect">Unselect all</p>
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Baby & Kids</label>
      </div>

      {["OCCASION", "WORK", "FABRIC", "SEGMENT", "PATTERN"].map(item => (
        <div className="filter" key={item}>
          <div className="filter-head">
            <span>{item}</span>
            <span>⌄</span>
          </div>
          <p className="all">All</p>
        </div>
      ))}
    </aside>
  );
}
