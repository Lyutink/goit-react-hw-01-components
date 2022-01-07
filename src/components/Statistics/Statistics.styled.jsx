import styled from "styled-components";

const StatisticsSection = styled.section`
  max-width: 320px;
  margin-top: 24px;
  text-align: center;
  border: 1px solid rgb(0 0 0/ 0.5);
  border-radius: 12px;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
  background-color: white;
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  padding-top: 32px;
  padding-bottom: 32px;
  color: gray;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid rgb(0 0 0/ 0.5);
`;

const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b0c8f5;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1px 0;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
`;

const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
`;

export { StatisticsSection, Title, StatList, StatListItem, Label, Percentage };
