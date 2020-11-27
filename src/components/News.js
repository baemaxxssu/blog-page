import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import post from '../data/posts.json'

function News() {
	return (
		<div className="custom-container">
			<h1>NEWS</h1>
			<div className="custom-row">
				{post.map(posts => (
					<div className="custom-column-4" key={posts.id}>
						<div className="blog-wrapper">
							<img src={posts.image} alt={posts.title} className="custom-img-fluid" />
							<h1>{posts.title}</h1>
							<small>{posts.date}</small>
							<p>{posts.excerpt}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default News