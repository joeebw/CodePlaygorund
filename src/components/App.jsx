import { useEffect, useState } from 'react';
import './App.css';
import Editor from './Editor';

const storage =  localStorage.getItem('bodyVariables') ? JSON.parse(localStorage.getItem('bodyVariables')) : null;

function App() {
  const [html, setHtml] = useState(() => storage.html ? storage.html : '')
  const [css, setCss] = useState(() => storage.css ? storage.css : '')
  const [js, setJs] = useState(() => storage.js ? storage.js : '')


  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `

  useEffect(() => {
    localStorage.setItem('bodyVariables', JSON.stringify({
      html: html,
      css: css,
      js: js 
    }))
  },[html,css,js])

  return (
    <>    
      <div className='pane top-pane'>
        <Editor language='xml' displayName='HTML' value={html} onChange={setHtml}/>
        <Editor language='css' displayName='CSS' value={css} onChange={setCss} />
        <Editor language='javascript' displayName='JS' value={js} onChange={setJs} />
      </div>
      <div className='pane'>
        <iframe 
          srcDoc={srcDoc}
          title='output' 
          sandbox='allow-scripts'
          style={{border: '0'}}
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default App;
