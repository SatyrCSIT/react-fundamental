import { NavLink } from "react-router";

export const NavLinkExample = () => {
    return (
        <div className="flex gap-4">
            <NavLink to="/employee">Employee</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/employee/10">EmployeeInfo</NavLink>
        </div>
    )
}