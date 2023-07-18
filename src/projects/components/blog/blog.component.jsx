import "./blog.styles.scss";
import Title from "../title/title.component"

import React from 'react'
import Button from "../button/button.component"

const Blog = ({theme, handleClick}) => {

  return (
    <div className="blog-container">
        <Title text={`My Blog ${theme} theme `}/>
        <span className="switch">
            <Button classes={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} `} onClick={handleClick} text={theme}/>
        </span>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus veniam ex atque voluptatibus provident in voluptas mollitia error excepturi voluptates asperiores laudantium expedita totam animi deserunt et voluptatem facere labore, quas laborum maxime perspiciatis minus dicta? Sed eveniet quas ipsa dignissimos nesciunt itaque voluptatem delectus praesentium fuga accusantium repellat excepturi, debitis temporibus repudiandae voluptatibus molestiae suscipit alias consequuntur dolores nobis. Commodi, deserunt velit incidunt dolorum molestiae fuga! Architecto, sed! Iste perspiciatis optio in? Ducimus qui, saepe eaque quisquam molestiae nobis rerum? Voluptatem esse cupiditate laboriosam quasi adipisci non culpa voluptates voluptate totam! Quisquam, voluptate voluptatibus nemo officiis velit consequatur?
        </p>
    </div>
  )
}

export default Blog;