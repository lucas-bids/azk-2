const SearchBar = ({ value = "", onChange }) => {
  return (
    <form className="mt-4 w-full" action="">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="Search"
        className="w-full rounded-[24px] border border-gray-300 px-5 py-4 text-2xl text-gray-500 focus:outline-none"
      />
    </form>
  );
};

export default SearchBar;
