import {useDispatch, useSelector} from "react-redux";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "../App.css";
import {ACTIONS} from "../store";
function Slider() {
    const {images, count} = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={() => {
                    dispatch({type:ACTIONS.PREV_SLIDE})
                }}/>
                <div
                    style={{
                        width: "100%",
                        height: "800px",
                        backgroundImage:`url(${images[count].image_url})`,
                    }}
                >
                    <p className="paragraph-1">The Picture with number {count === images.length - 1 ? ": Last Picture " : ""}</p>
                </div>
                <FaArrowAltCircleRight className="right-arrow" onClick={() => {
                    dispatch({type:ACTIONS.NEXT_SLIDE})
                }}/>
            </section>
        </div>
    )
};

export default Slider;