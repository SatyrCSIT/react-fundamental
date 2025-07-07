import { useState } from "react";

export const IfElseExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>

            {isLoggedIn ? (
                <div>Welcome to the app</div>
            ) : (
                <div>Please Log in</div>
            )}
        </div>
    )
}