const OrdersRouter = require('../routers/OrdersRouter');
const App = require('./app');

const PORT = process.env.API_PORT || 3001;

const Server = new App();

// Server.addRouter(Router);

Server.addRouter(OrdersRouter);

Server.start(PORT);


module.exports = Server;
