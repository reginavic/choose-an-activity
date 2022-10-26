import { Component } from 'react';

export class Time extends Component {
    constructor() {
    super();
    this.state = {
        today: this.setDate(),
        };
    };

    setDate = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return `${day} ${months[month]} ${year}`;
};

render() {
return (
    <div className="times">
        <p className='date'> {this.state.today} </p>
    </div>
    );
}
}
