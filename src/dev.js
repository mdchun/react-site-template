import ReactDOM from 'react-dom'
import React from 'react'
import { Button, Menu, Layout } from 'antd'
const { SubMenu } = Menu
import Test from 'Test'
import styles from './index.less'
import App from './app.tsx'

const T = () => {
	return (
		<div>
			<Button className={styles.testBtn} type='primary'>
				2132111
			</Button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
