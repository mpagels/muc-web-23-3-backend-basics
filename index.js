import { server } from "./server1.js";

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
