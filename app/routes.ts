import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout('routes/layout.tsx', [
        route('product', 'routes/product.tsx'),
        route('employee', 'routes/employee.tsx'),
        route('employee/:id', 'routes/employeeInfo.tsx')
    ]),
    route('use-config', 'routes/UseConfig.tsx'),
    route('use-component', 'routes/UseComponent.tsx'),
    route('use-sweet-alert', 'routes/UseSweetAlertExample.tsx'),
    route('query-string', 'routes/QueryStringExample.tsx'),
    route('http-example', 'routes/HttpExample.tsx'),
    route('header-example', 'routes/HeaderExample.tsx'),

    route('workshop', 'routes/workshop/page/layout.tsx', [
        route('page/home', 'routes/workshop/page/home.tsx'),
        route('page/about', 'routes/workshop/page/about.tsx'),
        route('page/contact', 'routes/workshop/page/contact.tsx')
    ])
] satisfies RouteConfig;
