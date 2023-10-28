import data from "./truckdata.json"
import React, { useState } from "react";
export default function Truck(){
    const [addTruck, setAddTruck] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
  
    const[truck , setTruck] =useState(null);
    const[driver, setDriver] =useState(null);
    const[aDriver , setADriver] = useState(null);
    const[date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAddTruckClick = (order) => {
        setCurrentOrder(order);
        setAddTruck(true);
      };
    
      const handleTruckChange = (event) => {
        if (event.target.value != -1){
            setTruck(event.target.value);
        }
        else{
            setTruck(null)
        }
      };
    
      const handleDriverChange = (event) => {
        if (event.target.value != -1){
            setDriver(event.target.value);
        }
        else{
            setDriver(null)
        }
      };
    
      const handleADriverChange = (event) => {
        if (event.target.value != -1){
            setADriver(event.target.value);
        } 
        else{
            setADriver(null)
        } 
      };
    
      const handleDateChange = (event) => {
        setDate(event.target.value);
      };
    
      const handleTimeChange = (event) => {
        setTime(event.target.value);
      };

      const handleSubmit =()=>{
        /*implement the submit function here*/
        alert(`${date} , ${time} ${truck} ${driver} ${aDriver}`)
      };

      const renderDrivers = data.drivers.map((driver) => {
        return (
          <option key={driver.id} >
            {`${driver.id} - ${driver.name}`}
          </option>
        );
      });
      
      const renderADrivers = data.assistant_drivers.map((driver) => {
        return (
          <option key={driver.id} >
            {`${driver.id} - ${driver.name}`}
          </option>
        );
      });
      
      const renderTrucks = data.trucks.map((truck) => {
        return (
          <option key={truck.id} >
            {`${truck.id}`}
          </option>
        );
      });
      
      const renderOrders = data.orders.map((order) => (
        <tr  key={order.id}> 
            <th scope="row" className="p-2 text-center align-middle">{order.id}</th>
            <td className="pd-2 text-center align-middle">{order.date}</td>
            <td className="p-2 text-center align-middle">{order.store_id}</td>
            <td className="p-2 text-center align-middle">{order.truck_id === null ? (
                <button className="btn btn-link text-primary border-0" onClick={() => handleAddTruckClick(order)}>
                Add truck
               </button>
              
                ) : (
                order.truck_id
                )}
             </td>
        </tr>
          ));

    return (
        <div>
            {addTruck? (

            <div className="border border-secondary col-md-6 col-12 h-auto p-4 text-white mt-4 rounded mx-auto bg-dark">
            <h3 className="text-success text-lg">Order ID : {currentOrder.id}</h3>

            <div className="form-group mt-2">
                <label className="text-white text-sm" htmlFor="date">Select Date</label>
                <input
                  type="date"
                  className="form-control bg-secondary text-white p-2"
                  id="date"
                  required
                  onChange={handleDateChange}
                  value={date}
                />
            </div>

             <div className="form-group mt-2">
              <label className="text-white text-sm" htmlFor="time">
                Select Time
              </label>
              <input
                type="time"
                className="form-control bg-secondary text-white p-2"
                id="time"
                required
                onChange={handleTimeChange}
                value={time}
              />
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="trucks">
                Select Truck
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="trucks"
                required
                onChange={handleTruckChange}
                value={truck}
              >
                <option value={-1}>--Select Truck--</option>
                {renderTrucks}
              </select>
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="drivers">
                Select Driver
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="drivers"
                required
                onChange={handleDriverChange}
                value={driver}
              >
                <option value={-1}>--Select Driver--</option>
                {renderDrivers}
              </select>
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="Adrivers">
                Select Assistant Driver
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="Adrivers"
                required
                onChange={handleADriverChange}
                value={aDriver}
              >
                <option value={-1}>--Select Assistant Driver--</option>
                {renderADrivers}
              </select>
            </div>

            <div className="text-center mt-3">
              <button className="btn btn-primary p-2" onClick={handleSubmit} style={{ fontSize: 'smaller' }}>
                Submit
              </button>
            </div>
          </div>       
            ):(
              //   <table class="table table-hover ">
              //   <thead>
              //     <tr className="">
              //       <th scope="col">Order ID</th>
              //       <th scope="col">Date</th>
              //       <th scope="col">Store ID</th>
              //       <th scope="col">Truck ID</th>
              //     </tr>
              //   </thead>
              //   <tbody>
              //     {renderOrders}
              //   </tbody>
              // </table>
              <div className=" col-md-8 col-12 h-auto p-4 text-black mt-4  mx-auto ">
                <table className="table table-hover col-md-9 col-12 mx-auto text-black">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">Order ID</th>
                      <th scope="col" className="text-center">Date</th>
                      <th scope="col" className="text-center">Store ID</th>
                      <th scope="col" className="text-center">Truck ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderOrders}
                  </tbody>
                </table>
              </div>

            )}
        </div>
    )
}
