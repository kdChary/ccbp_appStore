import './index.css'

const TabItem = props => {
  const {tabsList, tabClicked, isIdSame} = props

  const {tabId, displayText} = tabsList

  const changeTabStyle = () => {
    tabClicked(tabId)
  }
  const changeStyle = isIdSame ? 'highlight-tab' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${changeStyle}`}
        type="button"
        onClick={changeTabStyle}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
