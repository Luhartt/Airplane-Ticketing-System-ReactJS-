import { Routes, Route, useNavigate } from "react-router";
import { useData } from "./DataSetter";
import "./Addons.css";
import { useState } from "react";
import FoodImage from "../../Dependencies/Addon-Food.png";
import BaggageImage from "../../Dependencies/Addon-Baggage.png";
import TransportImage from "../../Dependencies/Addon-Transport.png";
import { Buttons } from "../Button";

const Addon = () => {
  const { data, setData } = useData();
  const [selectedAddonIndeces, setSelectedAddonIndeces] = useState(data.SelectedAddonIndex || []);
  const navigate = useNavigate();

  const addons = [
    { image: FoodImage, Text: "FOOD" },
    { image: BaggageImage, Text: "BAGGAGE" },
    { image: TransportImage, Text: "TRANSPORT" },
  ];


  const SelectAddon = (index ) => {
    setSelectedAddonIndeces((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((i) => i !== index);
        } else {
          return [...prevSelected, index];
        }
      });

    setData((prevData) => {
      const newData = { ...prevData };
      newData.SelectedAddonIndex = newData.SelectedAddonIndex || [];
      if (newData.SelectedAddonIndex.includes(index)) {
        newData.SelectedAddonIndex = newData.SelectedAddonIndex.filter((i) => i !== index);
      } else {
        newData.SelectedAddonIndex = [...newData.SelectedAddonIndex, index];
      }
      return newData;
    });
  };

  const handleContinue = () => {
    console.log(data);
    navigate("/book-flights/payment-details");
  }
  const handleBack = () => {
    navigate("/book-flights/passenger-details");
  }

  return (
    <section className="AddonsContainer">
      <div className="AddonsWrapper">
        {[
          addons.map((addon, index) => (
            <div
              className={`addon ${selectedAddonIndeces.includes(index) && "Active"}`}
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
