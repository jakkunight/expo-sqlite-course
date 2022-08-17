import React from "react";
import { useWindowDimensions } from "react-native";
import { NativeBaseProvider, Heading, Center } from "native-base";

const App = () => {
	const screenSize = useWindowDimensions();
	return (
		<NativeBaseProvider>
			<Center bgColor={"#000000"} h={screenSize.height} w={screenSize.width} >
				<Heading color={"#AAAAAA"}>
					{"Hello Doumo!"}
				</Heading>
			</Center>
		</NativeBaseProvider>
	);
};

export default App;
