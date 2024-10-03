export function filterData(searchInput, restuarants) {
    const filterData = restuarants.filter((restuarant) =>
      restuarant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
  }