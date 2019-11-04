import React from 'react';
import Counter from './counter.js'

export default (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td >
                <Counter
                    onChange={props.onChange}
                    indx={props.indx}
                    count={props.count} />
            </td>
            <td className="action">
                <button onClick={()=>props.onRemove(props.indx)}>remove</button>
            </td>
        </tr>
    );
}
