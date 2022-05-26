// import React from 'react'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { colourOptions } from "./Data1";
import { default as ReactSelect } from "react-select";
// import "./styles.css";
import { components } from "react-select";
import { useState } from 'react';

function MultiSelect2() {

    const [state,setstate]= useState({optionSelected: null})

   const handleChange = (selected) => {
       setstate({
          optionSelected: selected
        });
      };

    const Option = (props) => {
        return (
          <div>
            <components.Option {...props}>
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
              />{" "}
              <label>{props.label}</label>
            </components.Option>
          </div>
        );
      };
    return (
        <div>
            <span
                class="d-inline-block"
                data-toggle="popover"
                data-trigger="focus"
                data-content="Please selecet account(s)">
                <ReactSelect
                    options={colourOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{
                        Option
                    }}
                    onChange={handleChange}
                    allowSelectAll={true}
                    value={state.optionSelected}/>
            </span>
        </div>
    )
}

export default MultiSelect2