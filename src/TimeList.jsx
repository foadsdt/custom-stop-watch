import { useContext } from "react";
import { TestContext } from "./TestContext";
import Item from "./Item";


const TimeList = (props) => {
    const context = useContext(TestContext)

    return (
        <div className="main_time_list">
            {context.timeArray.map((t)=>(
                <Item key={Math.random()}>{t}</Item>
            ))}
        </div>
    )

};

export default TimeList;
