import PropTypes from "prop-types";

import {
  TransactionHistoryTable,
  TransactionHead,
  TransactionHeadTr,
  TransactionHeadTh,
  TransactionBody,
  TransactionBodyTr,
  TransactionBodyTd,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TransactionHead>
        <TransactionHeadTr>
          <TransactionHeadTh>Type</TransactionHeadTh>
          <TransactionHeadTh>Amount</TransactionHeadTh>
          <TransactionHeadTh>Currency</TransactionHeadTh>
        </TransactionHeadTr>
      </TransactionHead>

      <TransactionBody>
        {items.map((item) => (
          <TransactionBodyTr key={item.id}>
            <TransactionBodyTd>{item.type}</TransactionBodyTd>
            <TransactionBodyTd>{item.amount}</TransactionBodyTd>
            <TransactionBodyTd>{item.currency}</TransactionBodyTd>
          </TransactionBodyTr>
        ))}
      </TransactionBody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
