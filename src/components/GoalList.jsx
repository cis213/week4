import GoalItem  from "./GoalItem"; // importing the default export

/*
    The GoalList component is a functional component that returns a list of GoalItem components.
    The GoalItem components are passed a title and a children prop.
    The children prop is a special prop that is passed by React automatically.
    It contains the content between the opening and closing tag of the component.
    In this case, the content between the opening and closing tag of the GoalItem component.

*/

const GoalList = () => {
    return (
        <div>
           <ul>
                <GoalItem title='Teach React in a highly-understandable way'>
                    I want to ensure, that you get the most out of this book and you learn
                    all about React!
                </GoalItem>
                <GoalItem title='Allow you to practice what you learned'>
                    Reading and learning is fun and helpful but you only master a topic, if
                    you really work with it! That's why I want to prepare many exercises
                    that allow you to practice what you learned.
                </GoalItem>
                <GoalItem title='Motivate you to continue learning'>
                    As a developer, learning never ends. I want to ensure that you enjoy
                    learning and you're motivated to dive into advanced (React) resources
                    after finishing this book. Maybe my complete React video course?
                </GoalItem>
            </ul>
        </div>
    );
}

export default GoalList; // default export