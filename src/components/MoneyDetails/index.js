// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container-elements">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="imgs"
        />
        <div className="balance-details-container">
          <p className="your-balance">Your Balance</p>
          <p data-testid="balanceAmount" className="total-balance">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="imgs"
        />
        <div className="balance-details-container">
          <p className="your-balance">Your Income</p>
          <p data-testid="incomeAmount" className="total-balance">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="imgs"
        />
        <div className="balance-details-container">
          <p className="your-balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="total-balance">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
