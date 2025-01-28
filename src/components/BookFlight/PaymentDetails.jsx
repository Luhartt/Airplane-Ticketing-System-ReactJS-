import {navigate, Routes, Route, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './style.css';


const PaymentDetailsContents = () => {
    // const Type = "One Way"
    // const MockData = {

    //     adultCount: 1,
    //     childrenCount: 2,
    //     infantCount: 3
    // }
}

export default function PaymentDetails() {
  return (
    <Routes>
        <Route path = "payment-details" element={<PaymentDetailsContents></PaymentDetailsContents>}></Route>
    </Routes>
  );
}
