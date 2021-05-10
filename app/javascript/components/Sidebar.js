import React, { useState } from 'react'

const Sidebar = () => {
	return (
		<aside className="menu is-hidden-mobile">
		<p className="menu-label">
			Compute
		</p>
		<ul className="menu-list">
			<li><a className="is-active">VMs</a></li>
			<li><a>Docker</a></li>
			<li><a>VPN</a></li>
			<li><a>Functions</a></li>
		</ul>
		<p className="menu-label">
			Storage
		</p>
		<ul className="menu-list">
			<li><a>Storage Space</a></li>
			<li><a>Storage Access</a></li>
		</ul>
		<p className="menu-label">
			Database
		</p>
		<ul className="menu-list">
			<li><a>MySQL</a></li>
			<li><a>PostgreSQL</a></li>
			<li><a>MongoDB</a></li>
			<li><a>Redis</a></li>
		</ul>
		</aside>
	)
}

export default Sidebar
