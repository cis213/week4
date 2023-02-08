import  FirstGoal  from "./FirstGoal"; // importing the default export
import  SecondGoal  from "./SecondGoal"; // importing the default export
import  { ThirdGoal }  from "./ThirdGoal"; // importing the named export

const GoalList = () => {
    return (
        <div>
            <h2>Goal List</h2>
            <FirstGoal />
            <SecondGoal />
            <ThirdGoal />
        </div>
    );
}

export default GoalList; // default export