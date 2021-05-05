import { Link } from 'react-router-dom';
import './OutWorks.scss';
import iconSeeAllProjects from '../../images/imgseeall.svg'
import MainButton from "../MainButton/MainButton";

function OurWorks() {
    return (
        <section className="our-works">
            <div className="our-works__container">
                <h2 className="our-works__title">OUR WORKS</h2>
                <Link className="our-works__link" to="/">See All Project in dribbble
                    <img className="our-works__arrow" src={iconSeeAllProjects} alt="arrow" />
                </Link>
            </div>
            <div className="our-works__images">
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
                <div className="our-works__image"></div>
            </div>
            <MainButton textButton='LOAD MORE'/>
        </section>
    );
}

export default OurWorks;