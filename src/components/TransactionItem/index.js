// Write your code here
import './index.css'

const TransactionItem = props => {
  const {initialHistoryList, onDeleteHistory} = props
  const {titleInput, amountInput, typeInput, id} = initialHistoryList

  const onSelectDel = () => onDeleteHistory(id)

  return (
    <li className="row-container">
      <p className="column-names-2">{titleInput}</p>
      <p className="column-names-2">Rs {amountInput}</p>
      <p className="column-names-2">{typeInput}</p>
      <div>
        <button
          type="button"
          data-testid="delete"
          className="del-btn"
          onClick={onSelectDel}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
