import React from 'react'
import { title, headerContainer, btnCont } from 'src/shared/components/style'
const Header = ({ onClick, children }) => {
  return <header css={headerContainer}>
    <div css={title}>Time Entry App</div>
    <div css={btnCont}>
      {children}
      <button onClick={() => onClick(false)}>Add Task</button>
      <button onClick={() => onClick(true)}>View Task</button>
    </div>
  </header>
}

export default Header
