import React, { Component } from 'react'

export class news extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div className="my-3">
        <div className="card">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p clasName="card-text"><small className="text-body-secondary">By {author?author:"Unkown"} on {new Date(date).toGMTString()} ago</small></p>
    <a href={newsUrl}className="btn btn-primary">ReadMore</a>
  </div>
</div> </div>
    )
  }
}

export default news