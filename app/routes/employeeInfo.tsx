import type { Route } from "../+types/root";

export default function EmployeeInfo({ params }: Route.LoaderArgs) {
    const id = params.id;

    return <div>ID = {id}</div>
}