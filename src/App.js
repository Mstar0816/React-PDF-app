import React from "react";
import samplePDF1 from "../src/resume.pdf";
const App = () => {
	return (
		<>
			<center>
				<h1>Welcome to Geeks for Geeks</h1>
				<h3>Click on below link to open
					PDF file in new tab</h3>
				<a href={samplePDF1} target="_blank"
					rel="noreferrer">
					Open First PDF
				</a> <br></br>
				
			</center>
		</>
	);
};

export default App;
