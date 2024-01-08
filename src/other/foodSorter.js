export default function foodSorter(foods, sortBy) {
  const sortedList = foods.toSorted((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.toUpperCase().localeCompare(b.name);
      case "type":
        return a.type.toUpperCase().localeCompare(b.type);
      case "quantity":
        return a.quantity - b.quantity;
      default:
        return a.name.toUpperCase().localeCompare(b.name);
    }
  });

  const sameList = JSON.stringify(foods) === JSON.stringify(sortedList);
  return sameList ? sortedList.reverse() : sortedList;
}
