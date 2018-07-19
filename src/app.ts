/**
 * App configuration
 * This is the entry point for the demo
 */
import * as express from 'express';
import { Routes } from './routes/routes';
import * as bodyParser from 'body-parser';

/**
 * App entry point
 */
class App {
    public app: express.Application;
    public appRoutes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
    }
    /**
     * Application Configuration
     */
    public config(): void {
        this.app.use(bodyParser.json());
    }
}

export default new App().app;