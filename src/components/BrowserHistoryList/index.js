import './index.css'

const BrowserHistoryList = props => {
  const {historyListItems, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListItems

  const onclickDeleteButton = () => {
    deleteListItem(id)
  }
  return (
    <li className="list-container">
      <div className="time-container">
        <p>{timeAccessed}</p>
      </div>
      <div className="main-container1">
        <div className="url-container">
          <img src={logoUrl} alt="domain logo" className="img" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={onclickDeleteButton}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistoryList
