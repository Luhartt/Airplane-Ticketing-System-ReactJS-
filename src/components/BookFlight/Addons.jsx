import { Routes, Route } from "react-router";
import { useData } from "./DataSetter";
import "./Addons.css";
import { useState } from "react";
import FoodImage from "../../Dependencies/Addon-Food.png";
import BaggageImage from "../../Dependencies/Addon-Baggage.png";
import TransportImage from "../../Dependencies/Addon-Transport.png";
import { Buttons } from "../Button";

const Addon = () => {
  const { data, setData } = useData();
  const [active, setActive] = useState(data.SelectedAddonIndex || -1);

  const addons = [
    { image: FoodImage, Text: "FOOD" },
    { image: BaggageImage, Text: "BAGGAGE" },
    { image: TransportImage, Text: "TRANSPORT" },
  ];

  const SelectAddon = (index, addonText) => {
    if (index === active) {
      setActive(-1);
      setData((prevData) => {
        const newData = { ...prevData };
        delete newData.SelectedAddonIndex;
        delete newData.SelectedAddon;
        return newData;
      });
      return;
    }
    setActive(index);
    const selectedAddon = addonText.toLowerCase();
    setData((prevdata) => ({
      ...prevdata,
      SelectedAddonIndex: index,
    }));
    setData((prevdata) => ({
      ...prevdata,
      SelectedAddon: selectedAddon,
    }));
  };

  const handleContinue = () => {
    console.log(data);
  }
  const handleBack = () => {
    console.log(data);
  }

  return (
    <section className="AddonsContainer">
      <div className="AddonsWrapper">
        {[
          addons.map((addon, index) => (
            <div
              className={`addon ${active === index && "Active"}`}
              key={`addon-${index}`}
              onClick={() => SelectAddon(index, addon.Text)}
            >
              <img src={addon.image} alt="" key={`addon-image-${index}`} />
              <p key={`addon-text-${index}`}>{addon.Text}</p>
            </div>
          )),
        ]}
      </div>
      <div className="buttons">
        <Buttons.BackButton
          text={"Back"}
          handleClick={handleBack}
        ></Buttons.BackButton>
        <Buttons.ContinueButton
          text={"Continue"}
          handleClick={handleContinue}
        ></Buttons.ContinueButton>
      </div>
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
