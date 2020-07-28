import React from "react";

const Translator = () => {
  return (
    <div className="row" style={{ marginTop: "8px" }}>
      <input type="text" placeholder="번역된 메시지" />
      <select>
        <option value="en">English</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
};

export default Translator;
