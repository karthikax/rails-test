import React, { useState, useEffect } from 'react'

const Compute = () => {
	const [ computes, setComputes ] = useState( [] )

	const getComputes = () => {
		if ( typeof fetch === 'undefined' ) return
		fetch( `${ window.location.origin }/api/v1/computes` )
			.then ( r => r.json() )
			.then( res => {
				if ( 'data' in res ) {
					setComputes( res.data )
				}
			} )
			.catch( e => console.log( e ) )
	}

	useEffect( () => {
		getComputes()
	}, [] )

	return (
		<main>
			<div className="card events-card">
				<header className="card-header">
					<p className="card-header-title">Compute Types</p>
				</header>
				<div className="card-table">
					<div className="content">
						<table className="table is-fullwidth is-striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>Power</th>
									<th>Memory</th>
									<th>Speed</th>
									<th>Storage</th>
									<th className="level-right">Action</th>
								</tr>
							</thead>
							<tbody>
								{ computes.map( compute => (
									<tr key={ compute.attributes.name }>
										<td>{ compute.attributes.name }</td>
										<td>{ compute.attributes.power }</td>
										<td>{ compute.attributes.memory }</td>
										<td>{ compute.attributes.speed }</td>
										<td>{ compute.attributes.storage }</td>
										<td className="level-right"><a className="button is-small is-primary" href="#">Launch</a></td>
									</tr>
								) ) }
							</tbody>
						</table>
					</div>
				</div>
				<footer className="card-footer">
					<a href="#" className="card-footer-item">View All</a>
				</footer>
				</div>
		</main>
	)
}

export default Compute
