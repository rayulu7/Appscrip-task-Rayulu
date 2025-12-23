import { useState } from "react";

export default function Filters({ filters, setFilters }) {
  const [openSections, setOpenSections] = useState({
    ideal: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    pattern: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const unselectAll = () => {
    setFilters({ men: false, women: false, kids: false });
  };

  return (
    <aside className="filters">
      <label className="checkbox">
        <input type="checkbox" /> CUSTOMIZABLE
      </label>

      <div className="filter">
        <button
          className="filter-head"
          onClick={() => toggleSection("ideal")}
          type="button"
        >
          <span>IDEAL FOR</span>
          <span className={openSections.ideal ? "rotate" : ""}>⌄</span>
        </button>

        {openSections.ideal && (
          <div className="filter-body">
            <button className="unselect" onClick={unselectAll}>
              Unselect all
            </button>

            <label>
              <input
                type="checkbox"
                checked={filters.men}
                onChange={() => handleChange("men")}
              />
              Men
            </label>

            <label>
              <input
                type="checkbox"
                checked={filters.women}
                onChange={() => handleChange("women")}
              />
              Women
            </label>

            <label>
              <input
                type="checkbox"
                checked={filters.kids}
                onChange={() => handleChange("kids")}
              />
              Electronics
            </label>
          </div>
        )}
      </div>

      {[
        { key: "occasion", label: "OCCASION" },
        { key: "work", label: "WORK" },
        { key: "fabric", label: "FABRIC" },
        { key: "segment", label: "SEGMENT" },
        { key: "pattern", label: "PATTERN" },
      ].map(({ key, label }) => (
        <div className="filter" key={key}>
          <button
            className="filter-head"
            onClick={() => toggleSection(key)}
            type="button"
          >
            <span>{label}</span>
            <span className={openSections[key] ? "rotate" : ""}>⌄</span>
          </button>

          {openSections[key] && (
            <div className="filter-body">
              <p className="all">All</p>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
