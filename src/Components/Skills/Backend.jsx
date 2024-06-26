import React from "react";
import SkillBox from "./SkillBox";
import { backend } from "./data";

const Backend = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Backend</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					{backend.map((skill) => {
						return <SkillBox name={skill.name} level={skill.level} key={skill.name} icon={skill.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Backend;
