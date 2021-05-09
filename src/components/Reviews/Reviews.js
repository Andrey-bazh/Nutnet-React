import React, {useState} from "react";
import ReviewsState from "./ReviewsState";
import './Reviews.scss';


const AvatarPhotos = ({currentAvatar, avatarList, onAvatarClick }) => {

    return (
        <ul className='avatar__items'>
            {avatarList && avatarList.map((avatarData, index) => (
                <li key={index} onClick={() => onAvatarClick(avatarData.id)} className={currentAvatar === avatarData.avatar ? 'current__avatar' : ''}>
                    <img className='current__avatar-image' src={avatarData.avatar} alt="avaphoto"/>
                </li>
            ))}
        </ul>
    )
}


const Review = ({reviewData, onAvatarClick}) => {
    const {comment, name, speciality, avatar} = reviewData || {};
    const avatarList = ReviewsState.map(({avatar,id}) => ({avatar,id}));

    return (
        <section className='content__wrap' id='people'>
            <div className='review'>
                <div className="review__container">
                    <div className='review__quotes'>&#8220;</div>
                    <div className="review__comment">{comment}</div>
                    <span className="review__name">{name}</span>
                    <span className="review__speciality">{speciality}</span>
                </div>
            </div>
            <AvatarPhotos avatarList={avatarList} currentAvatar={avatar} onAvatarClick={onAvatarClick} />
        </section>
    )
}


const Reviews = () => {
    const [selectedComment, setSelectedComment] = useState(3)
    const handleAvatarClick = (id) => {
        setSelectedComment(id)
    }

    return (
        <div className='reviews'>
            <Review reviewData={ReviewsState[selectedComment - 1]} onAvatarClick={handleAvatarClick}/>
        </div>
    );
};

export default Reviews;
