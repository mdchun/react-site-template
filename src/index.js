import ReactDOM from 'react-dom'
import React from 'react'
import { Button, Menu, Layout } from 'antd'
const { SubMenu } = Menu
import styles from './index.less'
import App from './app.tsx'

ReactDOM.render(<App />, document.getElementById('root'))

// 热更新
if (module.hot) {
	module.hot.accept()
}
