import { FunctionComponent } from "react";
import styles from "./NotFound.module.scss";

const NotFound: FunctionComponent = () => {
	return (
		<>
			<div className={styles.main}>
				<div>
					<h1>Page</h1>
				</div>
				<div>
					<h1>Not Found</h1>
				</div>
			</div>
		</>
	);
};
 
export default NotFound;