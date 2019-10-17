import App from '../dist/bundle.js'
import ReactDOM from 'react-dom'
import React from 'react'
import { Button, Menu, Layout } from 'antd'
const { SubMenu } = Menu

const Test = () => {
	return (
		<div>
			<Button type='primary'>2132111</Button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
