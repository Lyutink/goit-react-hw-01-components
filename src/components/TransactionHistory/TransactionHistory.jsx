import PropTypes from "prop-types";

import {
  TransactionHistoryWrapper,
  TransactionHistoryTable,
  TransactionHead,
  TransactionHeadTr,
  TransactionHeadThType,
  TransactionHeadThCurrency,
  TransactionBodyTr,
  TransactionBodyTdType,
  TransactionBodyTdCurrency,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryTable>
        <TransactionHead>
          <TransactionHeadTr>
            <TransactionHeadThType>Type</TransactionHeadThType>
            <th>Amount</th>
            <TransactionHeadThCurrency>Currency</TransactionHeadThCurrency>
          </TransactionHeadTr>
        </TransactionHead>

        <tbody>
          {items.map((item) => (
            <TransactionBodyTr key={item.id}>
              <TransactionBodyTdType>{item.type}</TransactionBodyTdType>
              <td>{item.amount}</td>
              <TransactionBodyTdCurrency>
                {item.currency}
              </TransactionBodyTdCurrency>
            </TransactionBodyTr>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </TransactionHistoryWrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
