import React from 'react';
import TitleComponent from "../TitleComponent/TitleComponent";
import './MeatTeam.scss'
import MainButton from "../MainButton/MainButton";

function MeatTeam() {
    return (
        <section className="team" id="team">
            <div className="team_container">
                <TitleComponent className='title__team' headerText='MEET OUR AMAZING TEAM' description='Lorem ipsum dolor sit amet proin gravida nibh vel velit'/>
                {/*<h2 className="team__title">MEET OUR AMAZING TEAM</h2>*/}
                {/*<p className="team__paragraph">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>*/}

                <div className="team__list">

                    <div className="team__card">
                        <div className="team__card-photo"></div>
                        <span className="team__card-name">SEMF UCUK</span>
                        <span className="team__card-speciality">CEO &amp; FOUNDER</span>
                    </div>

                    <div className="team__card">
                        <div className="team__card-photo"></div>
                        <span className="team__card-name">DIK ADALIN</span>
                        <span className="team__card-speciality">ENGINEERING</span>
                    </div>

                    <div className="team__card">
                        <div className="team__card-photo"></div>
                        <span className="team__card-name">JENG KOL</span>
                        <span className="team__card-speciality">DESIGNER</span>
                    </div>

                    <div className="team__card">
                        <div className="team__card-photo"></div>
                        <span className="team__card-name">PET ROMAK</span>
                        <span className="team__card-speciality">MARKETING</span>
                    </div>

                </div>
                <span className="team__join-us">Become part of our dream team, let’s join us !</span>
               <MainButton textButton='WE ARE HIRING'/>
            </div>
        </section>
    );
}

export default MeatTeam;
