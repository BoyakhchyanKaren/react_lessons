import "../App.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AddStatus} from "../Store/Status/action";

function AddStatuss () {
    const {status} = useSelector((state) => state.statusReducer);
    const {comments} = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    const [sts, setSts] = useState({
        id: 0,
        status_content:"",
        comment: {
            content:''
        },
    });
    return (
        <div>
            <h2>Picture</h2>
            <img src="https://tse1.mm.bing.net/th?id=OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj&pid=Api&P=0&w=242&h=183" alt="Crankshaft"/>
            <textarea className="area" value={sts.status_content} placeholder="Write some status" onChange={(e) => setSts({...sts,status_content: e.target.value })}/>
            <button
                onClick={() => {
                    dispatch(AddStatus({newStatus:sts}))
                    setSts({
                        id: 0,
                        status_content:"",
                        comment: {
                            content: "",
                        },
                    })
                }}
                className="btn btn-info"
            >
                add status
            </button>
        </div>
    )
};
export default AddStatuss;