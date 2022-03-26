
import { useEffect, useState, ChangeEvent } from 'react'

import PropTypes from 'prop-types';

export function Modal<T>({ visible, setVisible, columns, selectedItem, onClose, onSubmit }: IModal<T>) {
    const [newSelectedItem, setNewSelectedItem] = useState<T>(selectedItem);
    const [disabled, setDisabled] = useState<boolean>(true); //button disable
    const [initial, setInitial] = useState(selectedItem); //initial item

    // close modal 
    window.onclick = function (event) {
        if (event.target.id === 'myModal') {
            setVisible(false);
            onClose();
            setNewSelectedItem(selectedItem);
        }
    }

    useEffect(() => {
        setNewSelectedItem(selectedItem);
        setInitial(selectedItem);
    }, [selectedItem])

    //update User
    const handleUpdateUser = () => {
        onSubmit(newSelectedItem);
        setVisible(false);
    }

    // input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSelectedItem({ ...newSelectedItem, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        setDisabled(!(JSON.stringify(initial) !== JSON.stringify(newSelectedItem) && Object.keys(newSelectedItem).every(e => !!newSelectedItem[e]))); // is data same and is any item empty?
    }, [newSelectedItem, initial]);

    return (
        <div id="myModal" className="modal" style={{ display: visible ? 'block' : 'none' }}>
            <div className="modal-content">
                <span onClick={() => {
                    onClose();
                    setNewSelectedItem(selectedItem);
                }}
                    className="close">&times;</span>
                {newSelectedItem &&
                    columns.map((col, index) => (
                        <div key={index.toString()} className="form__group field">
                            <input
                                onChange={handleChange}
                                value={newSelectedItem[Object.keys(selectedItem)[index + 1]]}
                                type="input"
                                className="form__field"
                                placeholder={col.name}
                                name={Object.keys(selectedItem)[index + 1]}
                                required />
                            <label htmlFor={col.selector?.toString()} className="form__label">{col.name}</label>
                        </div>
                    ))}
                <div className="buttonContainer" style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
                    <button disabled={disabled} onClick={() => handleUpdateUser()}>Save</button>
                </div>
            </div>
        </div>
    )
}


