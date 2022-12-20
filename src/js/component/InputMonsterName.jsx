import React from 'react';

const InputMonsterName = (props) => {
    return ( 
        <>
        <input type="text" placeholder='Monster Name' onInput={props.handleFilter}/>
        </>
    );
}

export default InputMonsterName;