'use strict';
const React = require('react');
const {useState} = require('react')
const {Text, Box, useInput} = require('ink');
const { runCommand } = require('../lib/stringer');

function handleInput(acc, setAcc, setOutput) {
    return function (str, key) {
        if(key.backspace) {
            setAcc(acc.substring(0, acc.length - 1))            
        } else {
            setAcc(acc+ str)
        }


        if(key.return) {
            runCommand(acc, setOutput)
            setAcc("")
        }
    }
}

const Prompter = ({setOutput}) => {

    let [input, setInput] = useState("")

    useInput( handleInput(input, setInput, setOutput))
    return (
    <Box>
        <Box width="100%" borderStyle='double' padding={2}>
            <Text>
                Your command: {input}
			</Text>
		</Box>
	</Box>)
}

module.exports = Prompter