import React, { useState } from "react";
import dataStore from "../store/dataStore";
import Listitem from "./Listitem";
import CreateModal from "./CreateModal";
import { observer } from "mobx-react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const List = () => {
  const [slider, setSlider] = useState(0);
  const [date, setDate] = useState(null);
  const [filterDate, setFilterDate] = useState(null);


  if (dataStore.isLoading) {
    return (
      <div className="spinner">
        <Spinner animation="border" />
      </div>
    );
  }
  const showList = dataStore.jam3yas
    .filter((jam3ya) => {
      if(filterDate === null) return true ;
      

     else return jam3ya.startDate > filterDate})
      
    .filter((jam3ya) => jam3ya.amount > slider)
    .map((list) => <Listitem list={list} />);
    // console.log(moment().format());
    
    const handleDate = (e) => {
      const tempDate=moment(e).format();
      console.log(moment(e).format());
      console.log(tempDate);
       setDate(e);
       setFilterDate(tempDate)
      // setDate(moment(e).format());

     console.log(e);
      
    }

  if (!showList) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="create-btn">
        <div className="container filter">
          <div className="slider">
            <h5>Amount &nbsp;</h5>
            <input
              type="range"
              name="vol"
              min="0"
              max="100000"
              onChange={(e) => setSlider(e.target.value)}
            />
            <p>{slider}</p>
          </div>
          <div className="date-picker">
            <h5>Date &nbsp;</h5>
            <DatePicker
              placeholderText="Select End Date"
              dateFormat="Pp"
              selected={date}
              onChange={handleDate}
            />
          </div>
        </div>
        <CreateModal />
      </div>
      <div className="align-list">{showList}</div>
    </div>
  );
};

export default observer(List);
