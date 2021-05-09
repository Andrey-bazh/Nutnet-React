import React from 'react';
import './Header.scss'

import TitleComponent from '../TitleComponent/TitleComponent';
import MainButton from "../MainButton/MainButton";

const HeaderMain = () => {
    return (
        <section className='header__content'>
            <div className="wrapper__main">
                <div className="content__inner">
                    <TitleComponent headerText='We Are Awesome Creative Agency'/>
                    <p className="header__text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                        accumsan ipsum velit.
                    </p>
                    <MainButton textButton='LEARN MORE'/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;
