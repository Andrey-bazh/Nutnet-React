import React, {useState, useEffect} from "react";
import ReviewsState from "./ReviewsState";
import './Reviews.scss'


const AvatarPhotos = ({currentAvatar,avatarList}) => {
    return(
        <ul className='avatar__items'>
            {  avatarList && avatarList.map((avatar,index)=>(
                <li key={index} className={currentAvatar && avatar? 'current__avatar' : '' }>
                    <img className='current__avatar-image' src={avatar} alt="avaphoto"/>
                </li>
            )) }
        </ul>
    )
}

const Review = ({comment, name, speciality,avatar}) => {
    const avatarList = ReviewsState.map(({avatar})=>avatar)

    console.log(avatarList)
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
        <AvatarPhotos avatarList={avatarList} currentAvatar={avatar}/>
        </section>
    )
}



const Reviews = () => {


    return (
        <div className='reviews'>
        <Review name={ReviewsState[0].name} speciality={ReviewsState[0].speciality} comment={ReviewsState[0].comment} />

        </div>
    );
};

export default Reviews;
