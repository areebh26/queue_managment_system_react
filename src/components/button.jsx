export default function Button({text,bgcolor,width,pd,onClick}){
    
    return (
        <button 
        style={{
            backgroundColor:{bgcolor},
            width:{width},
            padding:{pd}
        }}
        onClick={onClick}
        >{text}</button>
    );
}