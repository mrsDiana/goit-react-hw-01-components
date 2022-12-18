import PropTypes from 'prop-types';
import { UserProfile, UserIcon, User, UserName,UserTag, Statistics, StatisticsItem, StatisticsAmount, } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <User>
        <UserIcon src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>&#64;{tag}</UserTag>
        <p>{location}</p>
      </User>

      <Statistics>
        <StatisticsItem>
          <span>Followers</span>
          <StatisticsAmount>{stats.followers}</StatisticsAmount>
        </StatisticsItem>
        <StatisticsItem>
          <span>Views</span>
          <StatisticsAmount>{stats.views}</StatisticsAmount>
        </StatisticsItem>
        <StatisticsItem>
          <span>Likes</span>
          <StatisticsAmount>{stats.likes}</StatisticsAmount>
        </StatisticsItem>
      </Statistics>
    </UserProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
