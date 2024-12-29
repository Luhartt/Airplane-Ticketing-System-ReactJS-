import e from "cors";

export default function ComboBox({options, setData, keyName, data}) {

  const onSelection = (Value) => {
    setData({...data, [keyName]: e.target.value})
  }
  
  return (
    <div className="ComboBox">
      <img src="" alt="" />
      <select onChange={onSelection} value={data[keyName] || ''}>
        {
            options.map((item, index)=>(
                <option value={item}>{item}</option>
            ))
        }
      </select>
    </div>
  );
}
