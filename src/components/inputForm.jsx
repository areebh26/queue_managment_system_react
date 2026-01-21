import Button from "./button.jsx";
import { useState } from 'react';
import "./InputForm.css";

export default function InputForm({addToQueue}){
        let [name,setName] = useState("");
        let [service,setService] = useState("");
        function Customer(name,service,id,status){
            this.name=name;
            this.service=service;
            this.id=id;
            this.status=status;
        }
        function handleSubmission(e){
            e.preventDefault();
            if(!name.trim() || !service.trim()){
                return
            }
            addToQueue(new Customer(name,service,Date.now(),"waiting"));
            setName("");
            setService("");
            
        }

    
    return (
        <div className="div">
            <form >
                <h2>Add to Queue</h2>
                <input type="text" placeholder="Customer Name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} />
                <select value={service} onChange={(e)=>{
                    setService(e.target.value);
                }}required placeholder="Select a Service">
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Support">Support</option>
                </select>
                <Button
                text="Add Customer"
                bgcolor="#5e67ff"
                width="100%"
                pd="0.5rem"
                onClick={handleSubmission}
                />
            </form>
        </div>
       
    );
}