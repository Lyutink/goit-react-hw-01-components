import styled from "@emotion/styled";

const ProfileCard = styled.div`
  max-width: 320px;
  text-align: center;
  color: black;
  border-radius: 12px;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
  background-color: white;
`;

const Discription = styled.div`
  padding-bottom: 12px;
`;

const Avatar = styled.img`
  max-width: 50%;
  margin-top: 24px;
  margin-bottom: 8px;
  border: 1px solid rgb(0 0 0/ 0.5);
  border-radius: 50%;
`;

const Name = styled.p`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Tag = styled.p`
  margin-bottom: 8px;
  color: gray;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Location = styled.p`
  margin-bottom: 8px;
  color: gray;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  border-top: 1px solid #9aa5a8;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #d8ecf1;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-basis: calc((100% - 30px) / 3);
  :not(:last-child) {
    border-right: 1px solid #9aa5a8;
  }
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: gray;
`;

const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
`;
export {
  ProfileCard,
  Discription,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
};
// const StatName = styled.span`
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.colors.mainColor};
//   font-weight: 400;
// `;

// const StatValue = styled.span`
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.colors.mainColor};
//   font-weight: 500;
// `;

// export {
//   ProfileWrapper,
//   ProfileDescr,
//   ProfileAvatar,
//   ProfileName,
//   ProfileNickName,
//   ProfileLocation,
//   StatsList,
//   StatsItem,
//   StatName,
//   StatValue,
// };
