const e = React.createElement;

function LikeButton(){
return e(
    'button',
    {
        onClick: ()=> alert('Done')
    },
    'Like'
    );
}

    //const button=()=>{
    //    return<button>Like</button>
    //}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);