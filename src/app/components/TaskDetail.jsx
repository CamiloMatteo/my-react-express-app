import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations'

const TaskDetail = ({
    id, comments, task, isComplete, groups, setTaskComplete, setTaskGroup, setTaskName
}) => (
        <div>
            <div>
                <h1>Task Detail</h1>
            </div>
            <div>
                <input onChange={setTaskName} value={task.name} />
            </div>
            <div>
                <button onClick={() => setTaskComplete(id, !isComplete)}>{isComplete ? `Reopen` : `Complete`}</button>
            </div>
            <div>
                <select onChange={setTaskGroup} value={task.group}>
                    {groups.map(group => (
                        <option key={group.id} value={group.id}>{group.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <Link to="/dashboard">
                    <button>Done</button>
                </Link>
            </div>
        </div>
    );

// const mapStateToProps = state => state;
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;

    return {
        id, task, groups, isComplete: task.isComplete
    }
}

const mapDispathToProps = (dispath, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskComplete(id, isComplete) {
            dispath(mutations.setTaskComplete(id, isComplete));
        },
        setTaskGroup(e) {
            dispath(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e) {
            dispath(mutations.setTaskName(id, e.target.value));
        }
    }
}

export const ConnectTaskDetail = connect(mapStateToProps, mapDispathToProps)(TaskDetail);