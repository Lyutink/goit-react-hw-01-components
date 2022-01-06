import styled from "@emotion/styled";

const TransactionHistoryTable = styled.table`
  margin-top: 24px;
  width: 100%;

  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid rgb(0 0 0/ 0.5);
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
  background-color: white;
`;

const TransactionHead = styled.thead`
  background-color: #76bdff;
`;

const TransactionHeadTr = styled.tr`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: white;
`;

const TransactionHeadTh = styled.th`
  margin: 0;
  padding: 16px;
  width: 33%;
`;

const TransactionBody = styled.body``;

const TransactionBodyTr = styled.tr`
  margin: 0;
  padding: 8px;

  font-weight: 500;
  :not(:last-child) {
    border-bottom: 1px dashed gray;
  }
`;

const TransactionBodyTd = styled.td`
  width: 100%;
  padding: 8px;
  width: 33%;
  text-align: center;
`;

export {
  TransactionHistoryTable,
  TransactionHead,
  TransactionHeadTr,
  TransactionHeadTh,
  TransactionBody,
  TransactionBodyTr,
  TransactionBodyTd,
};
