import React from "react";

   function SkillList() {
    return (
      <div className="skill-list">
        <Skill name="Html $ CSS" bg="red" emoji="🙋‍♂️" />
        <Skill name="javaScript" bg="green" emoji="🙋‍♂️" />
        <Skill name="Svelte" bg="blue" emoji="👶" />
        <Skill name="WEB DESIGN" bg="orange" emoji="🙋‍♂️" />
        <Skill name="REACT" bg="brown" emoji="👶" />
        <Skill name="GIT & GITHUB" bg="yellow" emoji="👍" />
      </div>
    );
  };

function Skill(props) {
  return (
    <span style={{ background: props.bg }} className="skill">
      {props.name} <p>{props.emoji}</p>
    </span>
  );
}

export default SkillList;
