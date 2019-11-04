import React from 'react';

export default props => {
    return (
        <div>
            <button onClick={() => props.onChange(props.indx, props.count - 1)}
            >-
            </button>
            <input type="number" value={props.count}
                onChange={(e)=> {
                    props.onChange(props.indx, e.target.value);
            }}/>
            <button onClick={() => {
                props.onChange(props.indx, props.count + 1);
            }
            }>+
            </button>
        </div>
    );
}
