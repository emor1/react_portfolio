import React, {useState} from "react";
import './Popup.css'

//参考： https://reffect.co.jp/react/react-modal

const Popup = () =>{
    const [isShown, setIsShown] = useState(false);

    const handleCardClick = () =>{
        setIsShown(true);
    }

    const handleCardCloseClick = () =>{
        setIsShown(false);
    }

    return(
        <div className="popup-menu-container">
            <button onClick={handleCardClick}>
                Menu
            </button>
            <div className={`popup-menu ${isShown ? 'shown': ''}`}>
                <div>Menu</div>
                <button onClick={handleCardCloseClick}>
                    close
                </button>
            </div>
        </div>
    )
}

export default Popup;