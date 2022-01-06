import PropTypes from "prop-types";
//import StaticsList from './StaticsList';
import {
  StatisticsSection,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <StatList>
        {stats.map((item) => (
          <StatListItem key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
