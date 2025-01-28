import { Routes, Route } from "react-router";
import { useData } from "./DataSetter";
import "./Addons.css";
import { useState } from "react";
import FoodImage from "../../Dependencies/Addon-Food.png";
import BaggageImage from "../../Dependencies/Addon-Baggage.png";
import TransportImage from "../../Dependencies/Addon-Transport.png";

const Addon = () => {
  const {data, setData} = useData()
  const [active, setActive] = useState(data.SelectedAddonIndex || -1);

  const addons = [
    { image: FoodImage, Text: "FOOD" },
    { image: BaggageImage, Text: "BAGGAGE" },
    { image: TransportImage, Text: "TRANSPORT" },
  ];

  const SelectAddon = ({ index, addon }) => {
    if (index === active){
        setActive(-1)
        setData((prevData) => {
            const newData = { ...prevData };
            delete newData.SelectedAddonIndex;
            delete newData.SelectedAddon;
            return newData;
        });
        return
    }
    setActive(index);
    const selectedAddon = addon.toUpper();
    setData((prevdata) => ({
        ...prevdata, "SelectedAddonIndex": index
    }))
    setData((prevdata) => ({
        ...prevdata, "SelectedAddon": selectedAddon
    }))
  };

  return (
    <section className="AddonsContainer">
      {[
        addons.map((item, index) => (
          <div
            className={`addon ${active === index && "Active"}`}
            key={`addon-${index}`}
            onClick={() => SelectAddon(index, item.Text)}
          >
            <img src={item.image} alt="" key={`addon-image-${index}`} />
            <p key={`addon-text-${index}`}>{item.Text}</p>
          </div>
        )),
      ]}
    </section>
  );
};

export default function Addons() {
  return (
    <Routes>
      <Route path="addons" element={<Addon></Addon>}></Route>
    </Routes>
  );
}
