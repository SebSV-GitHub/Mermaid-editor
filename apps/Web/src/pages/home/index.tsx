import type { RouteObject } from "react-router-dom";
import { Component } from "@sebsv/ts-mermaid";

function Home() {
	return <Component />;
}

const route: RouteObject = {
	path: "/",
	element: <Home />,
};

export default route;
