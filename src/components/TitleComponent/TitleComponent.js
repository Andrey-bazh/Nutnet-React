import React  from 'react';
import './TitleComponent.scss';

const TitleComponent = ({ headerText, description }) => {
    return (
        <section className='section-header'>
            <h3 className='section-header__text'>{headerText}</h3>
            { description && <span className='section-header__description'>{description}</span> }
        </section>
        
    );
}

export default TitleComponent;