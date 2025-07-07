export const Myevent = () =>{
    return (
        <>
        <h1>My Event</h1>
        <button onClick={() => alert('Hello')}>Click Me!!</button>
        <div>
            <input type="checkbox"
            onChange={(e) => alert(e.target.checked)} />
        </div>
        </>
    )
}