import React from "react";
import {Link} from 'react-router-dom';
import './OutWorks.scss';
import iconSeeAllProjects from '../../images/right-arrow.svg'
import MainButton from "../MainButton/MainButton";


const worksPaths = [
    {src: "../../images/works/grey1.png"},
    {src: "../../images/works/grey2.png"},
    {src: "../../images/works/grey3.png"},
    {src: "../../images/works/grey4.png"},
    // {src: "../../images/works/grey1.png"},
    // {src: "../../images/works/grey2.png"},
    // {src: "../../images/works/grey3.png"},
    // {src: "../../images/works/grey4.png"},
    // {src: "../../images/works/grey1.png"},
    // {src: "../../images/works/grey2.png"},
    // {src: "../../images/works/grey3.png"},
    // {src: "../../images/works/grey4.png"},
];

const workItem = ({src}) => {
    return (
        <li className='our-works__item'>
            <img src={src} className='our-works__item-img' alt="work__description"/>
        </li>
    )
}

function OurWorks() {
    return (
        <>
            <section className="our-works" id='works'>
                <div className="our-works__container">
                    <h2 className="our-works__title">OUR WORKS</h2>
                    <Link className="our-works__link" to="/">
                        <span className='our-works__link-text'>See All Project in dribbble</span>
                        <img className="our-works__arrow" src={iconSeeAllProjects} alt="right-arrow"/>
                    </Link>
                </div>
                <ul className="our-works__items">
                    {worksPaths.map((workItem, index) => <workItem src={worksPaths.src} key={index}/>)}
                </ul>
                <MainButton textButton='LOAD MORE'/>
            </section>
        </>
    );
}

export default OurWorks;