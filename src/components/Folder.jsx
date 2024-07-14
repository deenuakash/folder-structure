import { useState } from 'react';
import { data as item } from '../utils/data';

const Folder = () => {
  const [data, setData] = useState(item);

  return (
    <>
      {data?.map((item, i) => (
        <SubFolder item={item} key={i} />
      ))}
    </>
  );
};

const SubFolder = ({ item }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const handleButtonClick = isFolder => {
    setExpand(true);
    setShowInput({ isVisible: true, isFolder: isFolder });
  };

  const handleInputEnter = e => {
    if (e.keyCode !== 13) return;
    const { value } = e.target;
    console.log(value);
    setShowInput({ isFolder: null, isVisible: false });
  };

  if (item.isFolder) {
    return (
      <div className="container">
        <div className="folder">
          <span
            onClick={() => setExpand(!expand)}
            style={{ cursor: 'pointer' }}
          >
            {!expand ? '📁 ' : '📂 '}
            {item.name}
          </span>
          <div className="buttons">
            <button onClick={e => handleButtonClick(true)}>+ Folder</button>
            <button onClick={e => handleButtonClick(false)}>+ File</button>
          </div>
        </div>
        {expand && (
          <div className="items">
            {showInput.isVisible && (
              <span className="input">
                {showInput.isFolder ? '📁 ' : '📄 '}
                <input
                  type="text"
                  autoFocus
                  onBlur={() =>
                    setShowInput({ ...setShowInput, isVisible: false })
                  }
                  onKeyDown={handleInputEnter}
                />
              </span>
            )}
            {item.children.map((item, i) => (
              <div key={i} style={{ marginLeft: 30 }}>
                <SubFolder item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div className="file">📄 {item.name}</div>;
  }
};

export default Folder;
