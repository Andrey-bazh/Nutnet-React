import React from "react";
import './Expertise.scss'
import '../TitleComponent/TitleComponent'
import TitleComponent from "../TitleComponent/TitleComponent";


function Expertise() {
    return (
        <section className="expertise" id="expertise">
            {/*<TitleComponent headerText='EXPERTISE' description='Lorem ipsum dolor sit amet proin gravida nibh vel velit'/>*/}
            <h2 className="expertise__title">EXPERTISE</h2>
            <p className="expertise__paragraph">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
            <div className="expertise__container">

                <div className="expertise__service">
                    <div className="expertise__logo development"></div>
                    <p className="expertise__name">WEB DESIGN &amp; DEVELOPMENT</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

                <div className="expertise__service">
                    <div className="expertise__logo branding"></div>
                    <p className="expertise__name">BRANDING IDENTITY</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

                <div className="expertise__service">
                    <div className="expertise__logo mobile"></div>
                    <p className="expertise__name">MOBILE APP</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

                <div className="expertise__service">
                    <div className="expertise__logo search"></div>
                    <p className="expertise__name">SEARCH ENGINE OPTIMIZATION</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

                <div className="expertise__service">
                    <div className="expertise__logo games"></div>
                    <p className="expertise__name">GAME DEVELOPMENT</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

                <div className="expertise__service">
                    <div className="expertise__logo love"></div>
                    <p className="expertise__name">MADE WITH LOVE</p>
                    <p className="expertise__description">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
                </div>

            </div>
        </section>
    );
}

export default Expertise;