import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		widht: "100%",
		marginTop: theme.spacing(1)
	}
}));

const Form = ({ children, ...props }) => {
	const styles = useStyles();

	return (
		<form className={styles.root} {...props} noValidate>
			{children}
		</form>
	);
};

export default Form;