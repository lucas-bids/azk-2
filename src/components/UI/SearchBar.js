import TextField from "./TextField";

const SearchBar = ({ value = "", onChange }) => {
  return (
    <form className="mt-4 w-full" action="">
      <TextField
        variant="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
