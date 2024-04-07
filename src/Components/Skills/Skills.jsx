import React from "react";
import Frontend from "./Frontend";
import Tools from "./Backend";
import Database from "./Database";
import ProgrammingLanguages from "./ProgrammingLanguages";
import "./Skills.css";

const Skills = () => {
	return (
		<section className='section skills' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My Technical Level</span>
			<div className='skills__container container grid'>
				<Frontend />
				<ProgrammingLanguages />
				<Tools />
				<Database />
			</div>
		</section>
	);
};

export default Skills;
