import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    titleInput: '',
    amountInput: '',
    typeInput: '',
    initialHistoryList: [],
  }

  onCreateHistory = () => {
    const {
      initialHistoryList,
      titleInput,
      amountInput,
      typeInput,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    const newHistoryItem = {
      id: uuidv4(),
      titleInput,
      amountInput,
      typeInput,
    }

    let a
    let b

    if (typeInput === 'Expenses') {
      a = expensesAmount + parseInt(amountInput)
    } else {
      a = expensesAmount
    }

    if (typeInput === 'Income') {
      b = incomeAmount + parseInt(amountInput)
    } else {
      b = incomeAmount
    }

    this.setState(prevState => ({
      initialHistoryList: [...prevState.initialHistoryList, newHistoryItem],
      titleInput: '',
      typeInput: '',
      amountInput: '',
      expensesAmount: a,
      incomeAmount: b,
      balanceAmount: b - a,
    }))
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeType = event => this.setState({typeInput: event.target.value})

  onDeleteHistory = id => {
    const {
      initialHistoryList,
      balanceAmount,
      incomeAmount,
      expensesAmount,
      amountInput,
    } = this.state
    const filteredResults = initialHistoryList.filter(each => each.id !== id)
    this.setState({initialHistoryList: filteredResults})
  }

  render() {
    const {
      balanceAmount,
      incomeAmount,
      expensesAmount,
      titleInput,
      amountInput,
      typeInput,
      initialHistoryList,
    } = this.state

    console.log(expensesAmount)

    return (
      <div className="bg-container">
        <div className="indigo-container">
          <h1 className="profile-name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="add-transaction-history-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction">Add Transaction</h1>
            <div className="label-inputs">
              <label htmlFor="title" className="label-design">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input-design"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="label-inputs">
              <label htmlFor="amount" className="label-design">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                className="input-design"
                value={amountInput}
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="label-inputs">
              <label htmlFor="select" className="label-design">
                TYPE
              </label>
              <select
                value={typeInput}
                id="select"
                className="input-design"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <button
                onClick={this.onCreateHistory}
                type="button"
                className="add-btn"
              >
                Add
              </button>
            </div>
          </div>
          <div className="add-transaction-container">
            <h1 className="add-transaction">History</h1>
            <div className="add-history-element">
              <div className="row-container">
                <p className="column-names">Title</p>
                <p className="column-names">Amount</p>
                <p className="column-names">Type</p>
              </div>
            </div>
            <ul className="add-history-element">
              {initialHistoryList.map(each => (
                <TransactionItem
                  initialHistoryList={each}
                  onDeleteHistory={this.onDeleteHistory}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
