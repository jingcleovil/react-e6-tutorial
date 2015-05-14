import React from 'react';

class TodoLists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: props.items};
    }

    render() {

        let displayFunctions = () => {
            let items = this.state.items;

            return Object.keys(items).map((item) => {
                return (
                    <li key={items[item].id}>
                        {items[item].name}
                    </li>
                )
            })
        }

        return (
            <ul>
                {displayFunctions()}
            </ul>
        );
    }
}

export default TodoLists;