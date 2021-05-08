import './MainForm.scss';
import MainButton from "../MainButton/MainButton";

function MainForm() {
    return (
        <section className="news" >
            <h2 className="news__title">GIVE US A GOOD NEWS</h2>
            <form className="news__form" name="form" >
                <input className="news__input" type="text" placeholder="Name" required={true} name="name" />
                <input className="news__input" type="email" placeholder="Email" required={true} name="email" />
                <input className="news__input" type="text" placeholder="Subject" required={true} name="subject" />
                <textarea className="news__input news__text-area" form="form" required={true} placeholder="Your Massage" name="message" />
            </form>
            <MainButton сlassName='custom__btn-from' textButton='SUBMIT'/>
        </section>
    );
}

export default MainForm;