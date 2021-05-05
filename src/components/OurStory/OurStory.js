import React, { useState, useRef, useEffect } from 'react';
import figlogo from '../../images/figurelogo.png'
import playLogo from '../../images/play.png'
import './Ourstory.scss'
import '../Header/Header.scss';
import MainButton from "../MainButton/MainButton";

function useOutsideClicker(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}

const Modal = ({ title, content, actions, onClose }) => {
    const modalRef = useRef(null);
    useOutsideClicker(modalRef, onClose);

    return (
        <div ref={modalRef} className='modal'>
            <div className='modal__title-container'>
                {title}
            </div>
            <div className='modal__content-container'>
                {content}
            </div>
            <div className='modal__actions-container'>
                {actions}
            </div>
        </div>
    );
}

const VideoModalContent = () => {
    return (
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KvUgaHTNit4" title="YouTube video player"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        );
}


const VideoModalActions = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>
}

const OurStory = () => {
    const [openModal, setOpenModal] = useState(false);
    const videoModalActions = <VideoModalActions text='close' onClick={() => setOpenModal(false)} />
    const videoModalContent = <VideoModalContent />

    return (
        <>
            <section className='ourstory'>
                <div className="wrapper__main">
                    <div className="ourstory__inner">
                        <div className='ourstory__image-container'>
                            <img className='ourstory__image' src={figlogo} alt="biglogo" />
                        </div>

                        <div className="ourstory__content">
                            <h3 className='ourstory__title'>OUR STORY</h3>
                            <p className='ourstory__description'>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                        </p>
                            <p className="ourstory__description">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.м</p>
                            <MainButton textButton='LEARN MORE'/>
                        </div>
                    </div>
                </div>
                <div className='ourstory__block-with-image'>
                    <button className='ourstory__play-button' onClick={() => setOpenModal(true)}>
                        <img className='ourstory__play-button-image' src={playLogo} alt='play button' />
                    </button>
                </div>
            </section>
            { openModal && <Modal title="it's my modal" content="it's modal content" onClose={() => setOpenModal(false)} actions={videoModalActions} content={videoModalContent} />}
        </>
    );
};

export default OurStory;
