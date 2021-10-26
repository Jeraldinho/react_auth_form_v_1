import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from './PrimaryButton';
import { useHistory } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),
		textAlign: "center",
		color: "#D81B60",
		fontWeight: "bold",
	}
}))

const Profile = () => {
	const history = useHistory();

	const styles = useStyles();

	const login = useSelector(state => state.auth.login);

	return (
		<FormContainer>
			<Typography className={styles.root} component="h2" variant="h5">
				{login ? `Hello Mr. ${login}!` : 'Something is wrong'}
			</Typography>

			<PrimaryButton onClick={() => { history.push("/") }}>Go back</PrimaryButton>
		</FormContainer>
	);
};

export default Profile;