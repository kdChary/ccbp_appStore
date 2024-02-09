import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
