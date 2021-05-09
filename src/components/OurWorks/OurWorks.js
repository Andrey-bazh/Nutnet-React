import React from "react";
import {Link} from 'react-router-dom';
import './OutWorks.scss';
import iconSeeAllProjects from '../../images/right-arrow.svg'
import MainButton from "../MainButton/MainButton";
import work1 from '../../images/works/grey1.png'
import work2 from '../../images/works/grey2.png'
import work3 from '../../images/works/grey3.png'
import work4 from '../../images/works/grey4.png'




const worksPaths = [
   work1, work2, work3, work4,
   work1, work3, work2, work4,
   work3, work2, work4, work1
];

const WorkItem = ({src}) => {
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
                    {worksPaths.map((workItem, index) => <WorkItem src={workItem} key={index}/>)}
                </ul>
                <MainButton textButton='LOAD MORE'/>
            </section>
        </>
    );
}

export default OurWorks;