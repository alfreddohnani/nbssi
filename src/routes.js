import React from "react";

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Registration = React.lazy(() => import('../pages/Registration'));
const Application = React.lazy(() => import('../pages/Application'));
const Contact = React.lazy(() => import('../pages/Contact'));

const routes = [
    { path: "/home", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/register", name: "Registration", component: Registration },
    { path: "/application", name: "Application", component: Application },
    { path: "/contact", name: "Contact", component: Contact }
];

export default routes;