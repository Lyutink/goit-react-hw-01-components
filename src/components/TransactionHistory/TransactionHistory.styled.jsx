import styled from "styled-components";

const TransactionHistoryWrapper = styled.div`
  margin-top: 24px;
  min-width: 320px;
  border-radius: 12px;
  border: 1px solid rgb(0 0 0/ 0.5);
  background-color: white;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const TransactionHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
`;

const TransactionHead = styled.thead`
  border-bottom: 1px solid rgb(0 0 0/ 0.5);
  background-color: #76bdff;
`;

const TransactionHeadTr = styled.tr`
  text-transform: uppercase;
  color: white;
`;

const TransactionHeadThType = styled.th`
  border-top-left-radius: 12px;
  padding: 8px;
`;
const TransactionHeadThCurrency = styled.th`
  border-top-right-radius: 12px;
  padding: 8px;
`;

const TransactionBodyTr = styled.tr`
  text-align: center;
  color: gray;
  font-weight: 500;
  :nth-of-type(2n) {
    background-color: #dddada;
  }
`;

const TransactionBodyTdType = styled.td`
  padding: 8px;
  border-bottom-left-radius: 12px;
`;

const TransactionBodyTdCurrency = styled.td`
  padding: 8px;
  border-bottom-right-radius: 12px;
`;

export {
  TransactionHistoryWrapper,
  TransactionHistoryTable,
  TransactionHead,
  TransactionHeadTr,
  TransactionHeadThType,
  TransactionHeadThCurrency,
  TransactionBodyTr,
  TransactionBodyTdType,
  TransactionBodyTdCurrency,
};
