import client from "./Client";

const register = (userInfo) => client.post("/users", userInfo);

export default { register };