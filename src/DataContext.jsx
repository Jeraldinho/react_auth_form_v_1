import { createContext, useState } from "react";
import { useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState({});

	const [loginTextValue, setLoginTextValue] = useState('');
	const [passwordTextValue, setPasswordTextValue] = useState('');

	const accesses = {
		login: "developer21",
		password: "123456"
	}

	const setValues = (values) => {
		setData(prevData => ({
			...prevData,
			...values
		}))
	}

	return (
		<DataContext.Provider
			value={{
				data,
				setValues,
				loginTextValue,
				passwordTextValue,
				setLoginTextValue,
				setPasswordTextValue,
				accesses
			}}
		>
			{children}
		</DataContext.Provider>
	)
};

export const useData = () => useContext(DataContext);