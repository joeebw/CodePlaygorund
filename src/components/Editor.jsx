import "codemirror/lib/codemirror.css";
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from "react-codemirror2-react-17";
import { useState } from "react";



function Editor(props) {
  const [open, setOpen] = useState(true);

  const {
    language,
    displayName,
    value,
    onChange
  } = props;

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed' }`}>
      <div className="editor-title">
        {displayName}
        <i onClick={() => setOpen(prevOpen => !prevOpen)} className={`fa-solid ${open ? "fa-solid fa-down-left-and-up-right-to-center" : 'fa-up-right-and-down-left-from-center'}`}></i>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: 'material',
          mode: language
        }}
      />
    </div>
  )
}

export default Editor
