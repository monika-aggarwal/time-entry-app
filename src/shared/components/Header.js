import react from 'react'

const Header = ({ onClick }) => {
  return <header>
    <div>Time Entry App</div>
    <div>
      <div onClick={() => onClick(false)}>Add Task</div>
      <div onClick={() => onClick(true)}>View Task</div>
    </div>
  </header>
}

export default Header