function Article ({title, author, content }){
    return(
        <article>
           <h2> {title}</h2>
           <p style={{color:'#666', fontSize: '14px'}}> Par {author}  </p>
           <p> {content}</p>
          
        </article>
    )
}

export default Article;