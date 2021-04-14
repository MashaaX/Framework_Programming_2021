import React, {Component} from "react";
import Post from "../../component/BlogPost/Post";
import './BlogPost.css';

class BlogPost extends Component{
    state = {
        listArtikel: []
        // insertArtikel: {
        //     userId: 1,
        //     id: 1,
        //     title: "",
        //     body: ""
        // }
    }

    ambilDataDariServerApi = () => {
        fetch('http://localhost:3001/posts')
        .then(Response => Response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerApi()
    }

    handleHapusArtikel = (data) =>{
        fetch("http://localhost:3001/posts/${data}",{method:'DELETE'})
            .then(res =>{
                this.jsonHasilAmbilDariAPI()
            })
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/> 
                    })
                }
            </div>
        )
    }
}
export default BlogPost;