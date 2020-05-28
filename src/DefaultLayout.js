import React, {Suspense, Component} from 'react';
import MobileMenu from './MobileMenu';
import Footer from './Footer'
import routes from './routes';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

export default class DefaultLayout extends Component{
    constructor(){
        super()

        this.state ={
            
        }
    }

    loader = () => <div id="loader"></div>

    render(){
        return(
            <div className="super_container">

                <Suspense fallback={this.loader()}>
                    <HashRouter>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                    )} />
                                ) : (null);
                            })}
                            <Redirect from="/" to="/register" />
                        </Switch>
                    </HashRouter>
                </Suspense>

                <Footer />
            </div>
        )
    }
}