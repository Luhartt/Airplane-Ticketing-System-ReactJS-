export default function ComboBox({ options, setData,keyName, data }) {
  const onSelection = (event) => {
    setData({ ...data, [keyName]: event.target.value });
    };
  
  return (
    <div className="ComboBox">
      <img src="" alt="" />
      <select onChange={onSelection} value={data[keyName] || ""}>
        {options.map((item, index) => (
          <option key = {index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
