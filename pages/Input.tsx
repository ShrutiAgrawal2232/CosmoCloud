import React from "react";
import styles from '@/styles/Home.module.css'
export default function Input({ objValue, onChange, index, deleteField, handleTypeChange, handleIsRequiredChange, handleAddChildField }) {
    const { type, value, isRequired, child } = objValue;
    return (
        <>
            <div className={styles.formBox}>
                <div>{index + 1}</div>
                <input
                    type={"text"}
                    value={value || ""}
                    onChange={(e) => onChange(e, index)}
                    name={index + 1}
                    placeholder="add value"
                    required={isRequired}
                />
                <select onChange={(e) => handleTypeChange(e, index)} value={type} >
                    <option value={"text"}>text</option>
                    <option value={"boolean"}>boolean</option>
                    <option value={"object"}>object</option>
                    <option value={"string"}>string</option>
                </select>
                <label className={styles.switch}>
                    isRequired
                    <input type="checkbox" checked={isRequired} onChange={(e) => handleIsRequiredChange(e, index)} />
                </label>
                {type === 'object' && <div onClick={(e) => handleAddChildField(e, index)}>+</div>}
                <div onClick={(e) => deleteField(e, index)}>X</div>
            </div>
            {child.map((obj: any, ind: number) => (
                <Input
                    key={ind}
                    objValue={obj}
                    onChange={onChange}
                    index={ind}
                    deleteField={deleteField}
                    handleTypeChange={handleTypeChange}
                    handleIsRequiredChange={handleIsRequiredChange}
                    handleAddChildField={handleAddChildField}
                />
            ))}
        </>

    );
}