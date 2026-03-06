import React from 'react';

import type {Task} from '../../types.ts';

interface SpatsProps {
    tasks: Task[];
}

const Statts: React.FC<SpatsProps> = ({tasks}) => {
    const total = tasks.length;
    const completedCount = tasks.reduce((total, {completed}) => completed ? ++total : total, 0);

    return <div>
        <div><span>Total: </span><span>{total}</span></div>
        {!!total && <div><span>Completed: </span><span>{completedCount}</span></div>}
    </div>;
};

export default Statts;