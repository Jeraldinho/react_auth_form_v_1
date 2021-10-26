import React, { useState, useEffect } from 'react';
import FormContainer from './FormContainer';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import { useForm } from 'react-hook-form';
import Form from './Form';
import { Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthUsersData } from '../redusers/authReducer';

const schema = yup.object().shape({
	login: yup
		.string()
		.required("Login is require field")
		.min(2, "Login must be at least 2 characters"),
	password: yup
		.string()
		.required("Password is require field")
		.min(3, "Password must be at least 3 characters")
		.max(20, "Password must be no more than 20 characters")
		.matches(/^[a-zA-Z0-9]{3,20}$/, "Password should contain letters and numbers")
})

const Login = () => {
	const history = useHistory();

	/* const {
		data,
		setValues,
		loginTextValue,
		setLoginTextValue,
		passwordTextValue,
		setPasswordTextValue,
		accesses
	} = useData(); */

	/* const [data, setData] = useState({}); */

	const [loginTextValue, setLoginTextValue] = useState('');
	const [passwordTextValue, setPasswordTextValue] = useState('');

	const accesses = {
		login: "developer21",
		password: "123456"
	}

	/* const setValues = (values) => {
		setData(prevData => ({
			...prevData,
			...values
		}))
	} */

	const dispatch = useDispatch()

	const [isFormValid, setFormValid] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema)
	});


	const ckeckData = () => {
		if (loginTextValue === accesses.login && passwordTextValue === accesses.password && Object.keys(errors).length === 0) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}

	useEffect(() => {
		ckeckData()
	}, [loginTextValue, passwordTextValue, errors])

	const onSubmit = (data) => {
		//setValues(data);
		dispatch(setAuthUsersData(data.login, data.password));

		history.push("/profile");

		setFormValid(false);
	}

	return (
		<FormContainer>
			<Typography component="p" variant="h5">
				Sign in
			</Typography>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="login"
					label="Login"
					name="login"
					{...register('login')}
					error={!!errors.login}
					helperText={errors?.login?.message}
					value={loginTextValue}
					onChange={(e) => { setLoginTextValue(e.target.value) }}
				/>

				<Input
					id="password"
					type="password"
					label="Password"
					name="password"
					{...register('password')}
					error={!!errors.password}
					helperText={errors?.password?.message}
					value={passwordTextValue}
					onChange={(e) => { setPasswordTextValue(e.target.value) }}
				/>

				<PrimaryButton disabled={!isFormValid}>Submit</PrimaryButton>
			</Form>

			<div className="accesses-cnt">
				<div className="accesses__title">
					Accesses
				</div>

				<div className="accesses__values">
					<span>Login: developer21</span><br/>
					<span>Password: 123456</span>
				</div>
			</div>
		</FormContainer>
	);
};

export default Login;