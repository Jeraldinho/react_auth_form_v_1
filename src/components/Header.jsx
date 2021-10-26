import React from 'react';
import Typography from '@material-ui/core/typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),
		textAlign: "center",
		fontSize: "36px",
		color: "#607D8B",
		fontWeight: "bold",
	}
}))

const Header = () => {
	const styles = useStyles()

	return (
		<Typography className={styles.root} component="h1" variant="h5">
			React auth form v_1
		</Typography>
	);
};

export default Header;