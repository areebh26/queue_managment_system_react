import './queueDisplay.css'
import Button from "./button.jsx";



export default function QueueDisplay({queue,removeCustomer,changeStatus}){
    return (
        <div className="first-container">
            <div className="second-container">
                <h2>Current Queue</h2>
                {
                    queue.length===0 ? (<p>No customers</p>) : queue.map((customer)=>{
                        return (<div>
                            <h2>{customer.name}</h2>
                            <p>service : {customer.service}</p>
                            <p>{customer.status}</p>
                            {
                                customer.status==="waiting" ?  (<Button
                                                text="Serve"
                                                bgcolor="green"
                                                width="10%"
                                                pd="0.5rem"
                                                onClick={()=>{changeStatus(customer.id,"serving");
                                                    (<Button
                                                    text="Complete"
                                                    bgcolor="blue"
                                                    width="10%"
                                                    pd="0.5rem"
                                                    onClick={(e)=>{
                                                    e.target.style.display="none"
                                                    
                                                    changeStatus(customer.id,"completed")
                                                    
                                                }}
                                                />)

                                                }}
                                                />) : customer.status==="serving" ? (<Button
                                                text="Complete"
                                                bgcolor="blue"
                                                width="10%"
                                                pd="0.5rem"
                                                onClick={(e)=>{
                                                    e.target.style.display="none"
                                                    
                                                    changeStatus(customer.id,"completed")
                                                    
                                                }}
                                                />) : (<span></span>)
                            }
                            <Button
                                            text="Remove"
                                            bgcolor="red"
                                            width="10%"
                                            pd="0.5rem"
                                            onClick={()=>{removeCustomer(customer.id)}}
                                            />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}