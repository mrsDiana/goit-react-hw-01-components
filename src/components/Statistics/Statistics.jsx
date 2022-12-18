import PropTypes from 'prop-types';
import { Stat, StatTitle, StatList, StatItem, StatLable, } from './Statistics.styled';
import { getRandomHexColor } from './GetRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Stat>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{backgroundColor: getRandomHexColor(), }}>
              <StatLable>{label}</StatLable>
              <span>{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </Stat>
  );
};



Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
