import "./ComboBox.css"

export default function ComboBox({ options, setData, keyName, data }) {
  const onSelection = (event) => {
    setData({ ...data, [keyName]: event.target.value });
  };

  return (
    <div className="ComboBox">
      <select onChange={onSelection} value={data[keyName] || ""}>
        <option value="" disabled>
          -- Please select an option --
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
