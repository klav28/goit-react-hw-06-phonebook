import StyledFilter from './SearchForm.component';

export const SearchForm = () => {
  const handleFilterChange = ev => {
    console.log(ev.currentTarget.value);
  };

  return (
    <StyledFilter>
      <StyledFilter.Label>
        Filter by Names:
        <StyledFilter.Input
          type="text"
          name="find"
          onChange={handleFilterChange}
        />
      </StyledFilter.Label>
    </StyledFilter>
  );
};
