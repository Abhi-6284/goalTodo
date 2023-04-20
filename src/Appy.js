import React, {useState} from 'react';
import './Appy.css'

// don't change the Component name "App"
export default function App() {
    const [isColor, setIsColor] = useState(true);
    
    const onClickHandle = () => {
        if(isColor===true){
            setIsColor(false)
        }else{
            setIsColor(true)
        }
    }
    
    return (
        <div>
            <p style={{color: isColor? 'red':'white'}}>Style me!</p>
            <button onClick={onClickHandle}>Toggle style</button>
        </div>
    );
}
