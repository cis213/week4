/*
    Named vs Default Exports
    - Named exports are used when you have multiple things to export from a single file
    - Default exports are used for a single export from a file
    - You can have both named and default exports in the same file
    
*/

const FirstGoal = () => {
    return (
        <div>
            <p>First Goal</p>
        </div>
    );
}

export default FirstGoal; // default export