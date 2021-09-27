import {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services"
import axios from 'axios';

function LikeButton(props) {

    const params = useParams();
    const history = useHistory();
    // const [ count, setCount ] = useState(0);
    const [like, setLike ] = useState(0)

    // const likes = props.likes.find((like) => like.id === params.id);

    const increment = () => {
        setLike(like + 1);
      }
   ;



     
    const handleEvent = async (e) => {
        e.preventDefault();
        const newLike = {
            like,
            blog : [params.id]
        } 
      
        
        await axios.post(baseURL+"/likes", { fields: newLike }, config);
        // props.setToggleFetch((curr) => !curr);
        history.push(`/Blog/${params.id}`)
    }


    
    return (
        <div>
            <form className="like-form"onSubmit={handleEvent}>
             <button className="like-button" type="submit" onClick={(e) => increment(e.target.vlaue)}>
                <ThumbUpIcon className='icon' /><br/>
                <h5>{like} likes</h5>
                {/* <h5>{likes.field.like}</h5> */}
              </button>
            </form>
        </div>
    )
}

export default LikeButton