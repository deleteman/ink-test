'use strict';
const React = require('react');
const {Text, Box,} = require('ink');

const Result = ({resultStr}) => {

    return (
        <Box>
			<Box width="100%" borderStyle='single' padding={2} flexDirection="column">
				<Text color="greenBright">Hi there, please enter your command below</Text>
				<Text>Result: {resultStr}</Text>
			</Box>
		</Box>
    )
}

module.exports = Result
