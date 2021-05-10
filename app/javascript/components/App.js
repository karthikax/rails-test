import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Compute from './Compute'

const App = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="columns">
					<div className="column is-3">
						<Sidebar />
					</div>
					<div className="column is-9">
						<Compute />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
