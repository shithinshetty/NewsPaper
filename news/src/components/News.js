import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import Spinnder from './Spinnder'
import PropTypes from 'prop-types'



export default class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:'8',
        category:'health'
    }
    static defaultProps={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    articles=[
       
    ]
    constructor()
    {
        super()
        console.log("Constructor from the News")
        this.state={
         articles:this.articles,
         loading :false,
         page:1
        }
    }
    async componentDidMount()
    {
        
        let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6e8d3737ae548b18a183d3f1baf8354&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalresults:parsedData.totalResults,loading:false})
       
    }

    previousClick=async()=>
    {
        console.log("PrevClick was Clciked");
        let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=b6e8d3737ae548b18a183d3f1baf8354&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        
        console.log(parsedData);
         this.setState({
             page:this.state.page-1,
             articles:parsedData.articles,
             loading:false
         })
     }
    nxtClick= async ()=>
    {
        
       console.log("NextClick was Clciked");
       if(!(this.state.page+1>Math.ceil(this.state.totalresults/this.props.pageSize)))
       {
       
       let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6e8d3737ae548b18a183d3f1baf8354&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
       let data=await fetch(url);
       let parsedData=await data.json()
       
       console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
        })
    }
}

    
    render() {
 
        return (
            <div className="container my-3" >
                <h1 className='text-center'>DailyNews Top HeadLines</h1>
                {this.state.loading && <Spinnder/>}
                    <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                 
                
                return <div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                 })}
                 <div className='containter d-flex justify-content-between '>
                 <button  disabled={this.state.page<=1}type="button" className="btn btn-dark my-3"  onClick={this.previousClick}> &larr;Previous </button>
                 <button type="button" className="btn btn-danger my-3" onClick={this.nxtClick}>Next&rarr;</button>
                 </div>
             
            </div>
            </div>
        )
    }
}
