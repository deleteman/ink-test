'use strict';
const React = require('react');
const {Box} = require('ink');
const importJsx = require('import-jsx');
const {useState} = require('react')

const Prompter = importJsx('./components/prompter');
const Results = importJsx('./components/results');

const App = () => { 
	let [output, setOutput] = useState("");

	return (
	<Box flexDirection='column'>
		
		<Results resultStr={output}/>		
				
		<Prompter setOutput={setOutput}/>
	</Box>
)};

module.exports = App;
