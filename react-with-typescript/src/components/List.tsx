import React from 'react';

interface IProps {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string // It's optional
    }[]
}

const List: React.FC<IProps> = ({ people }) => {
    return (
        <div>
            I am a List
        </div>
    )
}

export default List