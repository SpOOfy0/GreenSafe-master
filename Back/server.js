const apiServ = require("./Presentation/apiPres");
const port = 3001;

function main()
{
    apiServ.start(port);
}

main();