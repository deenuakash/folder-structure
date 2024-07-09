import { useState } from 'react'
import { data } from '../utils/data.js'

const Folder = () => {
    return (
        <div>
            {data.map((item,i) =>
                <SubFolder item={item} key={i}/>
            )}
        </div>
    )
}

const SubFolder = ({ item }) => {

    const [expand, setExpand] = useState(false)

    const handleClick = () => {
        setExpand(!expand)
    }

    return (
        <div>
            {item.isFolder && <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleClick()}>+</span>}
            {item.name}
            {item.isFolder && expand &&
                (
                    <div style={{ marginLeft: 20}}>
                        {item.children.map((child, index) => (
                            <SubFolder key={index} item={child} />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Folder