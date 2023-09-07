import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const element = document.getElementById('actionButton')
    const navigation = useNavigate()
    console.log(element);
    useEffect(()=>{
        if (element?.innerHTML) {
            navigation('/finalPage')
        }
    }, [element, navigation])
    return (
        <div>
            <div className={'mainIconDiv'}>
                <img src={require('../assets/images/CrewIcon.png')} alt={'aA'} className={'mainImg'}/>
            </div>
            <h1>Enable Crew on Safari</h1>
            <p>
                We newer sell, store or view your data. Check out our <a href={'google.com'}>privacy policy</a> to learn
                more.
            </p>
            <div className={'greyContainer'}>
                <p className={'text'}>1. Tap the <b>aA</b> in the address bar</p>
                <img src={require('../assets/images/AaImage.png')} alt={'aA'} className={'imagePng'}/>
            </div>
            <div className={'greyContainer'}>
                <p className={'text'}>2. Then go to <b>Manage Extension</b></p>
                <img src={require('../assets/images/Puzzle.png')} alt={'extensionIcon'} className={'imagePng'}/>
            </div>
            <div className={'greyContainer'}>
                <p className={'text'}>3. Toggle on <b>"Crew Extension"</b> and select <b>"Done"</b></p>
                <img src={require('../assets/images/SwitchButton.png')} alt={'switchButton'} className={'imagePng'}/>
            </div>
        </div>
    )
};

export default Home;
