import Button from "./button.jsx";
import "./InputForm.css";

export default function InputForm(){
    
    return (
        <div className="div">
            <form action="post">
                <h2>Add to Queue</h2>
                <input type="text" placeholder="Customer Name" />
                <select required placeholder="Select a Service">
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Support">Support</option>
                </select>
                <Button
                text="Add Customer"
                bgcolor="#5e67ff"
                width="100%"
                pd="0.5rem"
                onClick={()=>{}}
                ></Button>
            
            </form>
        </div>
       
    );
}