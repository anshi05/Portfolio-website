import React from "react";
import CodingStats from "../CodingStats";

export default function Library() {
	return (
		<div className="hlibrary homebox overflow-hidden">
			<p className="cristik text-white text-4xl  p-6">
				DSA
				<p className="opacity-60 text-xl">Tracker</p>
			</p>
			
			<CodingStats leetcodeHandle="intruder_05" codeforcesHandle="intruder_05" />
		</div>
	);
}
