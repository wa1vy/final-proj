import React, {useState} from 'react';

const Bookmark = () => {
    let [iconClass, setIconClass] = useState('bi bi-bookmark')

    function handleChangeIcon() {
        if (iconClass === 'bi bi-bookmark') {
            setIconClass('bi bi-bookmark-fill')
        } else if (iconClass === 'bi bi-bookmark-fill') {
            setIconClass('bi bi-bookmark')
        }
        return iconClass
    }

    return (
        <div>
            <i onClick={handleChangeIcon} className={iconClass}></i>
        </div>
    );
};

export default Bookmark;
