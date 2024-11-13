import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.js";

function App() {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
