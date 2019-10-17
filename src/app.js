import React from 'react'
import styles from './index.less'
import { HeaderBase, HeaderNav } from './Header'
import SiderNav from './SiderNav'
import { menuData } from './constant'

const getHeaderMenu = data => {
	const { pathname } = window.location
	const pathResult = '/' + pathname.split('/')[1]
	const result = data.map(item => {
		if (item.url === pathResult) {
			return {
				name: item.name,
				url: item.url,
				actived: true
			}
		} else {
			return {
				name: item.name,
				url: item.url,
				actived: false
			}
		}
	})

	return result
}

const getSiderMenu = data => {
	const { pathname } = window.location
	const pathResult = '/' + pathname.split('/')[1]
	let result = []
	data.forEach(item => {
		if (item.url === pathResult) {
			result = item.children
		}
	})
	return result
}

export default function(props) {
	const navBoxStyles = {
		height: '100%'
	}

	const { list } = menuData
	const headerMenus = getHeaderMenu(list)

	const siderMenus = getSiderMenu(list)

	return (
		<div id='portalLayout' style={navBoxStyles}>
			<HeaderBase />
			<div id='portalNavBox' style={navBoxStyles}>
				<HeaderNav menus={headerMenus} />
				<SiderNav menus={siderMenus} />
				<div id='app' className={styles.portalContent}>
					{props.children}
				</div>
			</div>
		</div>
	)
}
