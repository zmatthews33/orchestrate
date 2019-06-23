import React, {useState} from 'react'
import TodoList from '../Components/TodoList/TodoList'
import {Page} from '../Components/Containers/LayoutsElements'

function Todos() {

  return(
    <Page>
      <TodoList />
    </Page>
  )
}

export default Todos;