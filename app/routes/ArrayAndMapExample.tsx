import type { EmployeeInterface } from "~/interface/EmployeeInterface";

export const ArrayAndMapExample = () => {
    const employees: EmployeeInterface[] = [
        { id: 1, name: 'Jhon', age: 30 },
        { id: 2, name: 'Jane', age: 35 },
        { id: 3, name: 'Jim', age: 25 }
    ];

    return (
        <div>
            {employees.map((employee) => (
                <div key={employee.id}>
                    {employee.id} - {employee.name} - {employee.age}
                </div>
            ))}
        </div>
    )
}