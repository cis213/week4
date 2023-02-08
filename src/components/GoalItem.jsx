/*
        Props passed from GoalList to GoalItem
        props.title = 'Teach React in a highly-understandable way'
        props.children = 'I want to ensure, that you get the most out of this book and you learn all about React!'
        
        <GoalItem title='Teach React in a highly-understandable way'>
            I want to ensure, that you get the most out of this book and you learn
            all about React!
        </GoalItem>
*/
const GoalItem = (props) => {
    
    return (
        <li>
          <article>
            <h2>{props.title}</h2>
            <p>
              {props.children}
            </p>
          </article>
        </li>
      );
}

export default GoalItem;