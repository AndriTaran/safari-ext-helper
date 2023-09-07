import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const SecondStep = () => {
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
            <h1>Always allow...</h1>
            <p id={'textText'}>
                To pop up at checkout, we need to be available! You can update these preferences in your iOS setting.
            </p>
            <div className={'greyContainer'}>
                <p className={'text'}>4. Tap the <b>Crew Extension</b></p>
                <img src={require('../assets/images/CrewIcon.png')} alt={'aA'} className={'imagePng'}/>
            </div>
            <div className={'greyContainer'}>
                <p className={'text'}>1. Tap <b>Always allow...</b> in the address bar <br/> <b>Always allow, on every
                    website</b></p>
                <img src={require('../assets/images/AlwayAllow.png')} alt={'aA'} className={'imagePng'}/>
                <img src={require('../assets/images/AAonWeb.png')} alt={'aA'} className={'imagePng'}/>
            </div>
        </div>
    )
};

export default SecondStep;
