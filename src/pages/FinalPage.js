import React from "react";

const FinalPage = () => {
    return (
        <div>
            <div className={'mainIconDiv'}>
                <img src={require('../assets/images/CrewIcon.png')} alt={'aA'} className={'mainImg'}/>
            </div>
            <div className={'mainIconDiv'}>
            <img src={require('../assets/images/Cool.png')} alt={'aA'} className={'coolImg'}/>
            </div>
            <h1 className={'finalText'}>You’ve enabled Crew!</h1>
            <div className={'buttonDiv'}>
            <a href="myextensionapp://" className={'linkToApp'}>Return to APP</a>
            </div>
        </div>
    )
};

export default FinalPage;
