export const getDataFromLS = () => {
	const data = localStorage.getItem("data");
	return data ? JSON.parse(data) : [];
};
