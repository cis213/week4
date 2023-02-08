/*
    Named vs Default Exports
    - Named exports are used when you have multiple things to export from a single file
    - Default exports are used for a single export from a file
    - You can have both named and default exports in the same file
    
*/

export const ThirdGoal = () => { // named export
    return (
        <div>
            <p>Third Goal</p>
        </div>
    );
}