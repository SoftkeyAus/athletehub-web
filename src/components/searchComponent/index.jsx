export function ListSearchComponent({ onSearch, searchValue, label }) {
  return (
    <div className="clearfix">
      <div className="pull-right">
        <label>{label}: </label><br />
        <input
          className="form-control"
          type="text"
          placeholder="Search.."
          value={searchValue}
          onChange={(e) => onSearch(e)} />
      </div>
    </div>
  )
}