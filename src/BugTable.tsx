import { IBug } from "./IBug";

const BugTable = (props: { bugs: IBug[], onDeleteBug: Function}) => {
    const { bugs, onDeleteBug } = props;
    const resolvedPressed = (id: string) => {
        onDeleteBug(id);
    };

    return <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Once Done</th>
            </tr>
        </thead>
        <tbody>
            
            {bugs.length === 0 && <tr><td >No Bugs Found👍</td></tr>}
            {bugs.length > 0 && bugs.map(bug => <tr key={bug.id}>
                {/*ID is there for because so it can be identfide for everyone*/}
                <td>{bug.id}</td>
                <td>{bug.description}</td>
                <td>{bug.priority}</td>
                {/*Make sure the end user does not acsantly presses the resolve button*/}
                <td><button onClick={() => {if (window.confirm ("Are you sure to Resolve?"))(resolvedPressed(bug.id));}}>Resolved</button></td>
            </tr>)}
        </tbody>
    </table>
};

export default BugTable;