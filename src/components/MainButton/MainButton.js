import React  from 'react';
import './MainButton.scss';

const MainButton = ({ textButton }) => {
    return (

        <button className="btn__main">{textButton}</button>

    );
}

export default MainButton ;