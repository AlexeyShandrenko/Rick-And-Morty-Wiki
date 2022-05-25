const Picker = ({ count, name, select }) => {
  const createList = (count) => {
    let result = [];
    for (let i = 1; i <= count; i++) {
      result.push(i);
    }
    return result;
  };

  return (
    <form>
      <select onChange={select}>
        <option selected disabled>
          Choose...
        </option>
        {createList(count).map((value) => {
          return (
            <option key={value} value={value}>
              {name} - {value}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Picker;
