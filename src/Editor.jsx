import { Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";

const Editor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [codePenCode, setCodePenCode] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCodePenCode(`
     <html>
     <style>${css}</style>
     <script>${js}</script>
     <body>${html}</body>
     </html>
   `);
    }, 200);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
      <div className="input">
      <h2>Online Code Editor</h2>
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <label htmlFor="html">HTML</label>
              <Input.TextArea
                placeholder="html"
                rows={14}
                value={html}
                onChange={(e) => setHtml(e.target.value)}
              />
            </Col>
            <Col xs={24} md={8}>
              <label htmlFor="css">CSS</label>
              <Input.TextArea
                placeholder="css"
                rows={14}
                value={css}
                onChange={(e) => setCss(e.target.value)}
              />
            </Col>
            <Col xs={24} md={8}>
              <label htmlFor="js">JAVASCRIPT</label>
              <Input.TextArea
                placeholder="javascript"
                rows={14}
                value={js}
                onChange={(e) => setJs(e.target.value)}
              />
            </Col>
          </Row>
        </div>
      </div>
      <iframe
        title="output"
        sandbox="allow-scripts"
        width={"100%"}
        height={"100%"}
        srcDoc={codePenCode}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Editor;
