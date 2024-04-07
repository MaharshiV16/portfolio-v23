import React from "react";
import SkillBox from "./SkillBox";
import { database } from "./data";

const Database = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Database</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					{database.map((skill) => {
						return <SkillBox name={skill.name} level={skill.level} key={skill.name} icon={skill.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Database;
