import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const { likePost, numberOfLikes } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div onClick={() => likePost()} className='like-section-wrapper'>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>Likes: {numberOfLikes}</p>
    </div>
  );
};

export default LikeSection;
