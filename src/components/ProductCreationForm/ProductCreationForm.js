import React, {Component} from 'react';

const FIELD = {
    NAME: 'name',
    CALORIES: 'calories',
    PROTEIN: 'protein',
    CARBS: 'carbs',
    FAT: 'fat'
};

const Input = (props) => (
    <input type="text"
           value={ props.value }
           onChange={ (event) => props.onChange(props.name, event.target.value) }
    />
);

class ProductCreationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, value) {
        this.setState((prevState) => (Object.assign({}, prevState, { [field]: value })));
    }

    render() {
        return (
            <form>
                <label htmlFor="name">
                    Name:
                    <Input name={FIELD.NAME}
                           value={this.state[FIELD.NAME]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="calories">
                    Calories:
                    <Input name={FIELD.CALORIES}
                           value={this.state[FIELD.CALORIES]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    Protein:
                    <Input name={FIELD.PROTEIN}
                           value={this.state[FIELD.PROTEIN]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    Carbohydrates:
                    <Input name={FIELD.CARBS}
                           value={this.state[FIELD.CARBS]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    Fat:
                    <Input name={FIELD.FAT}
                           value={this.state[FIELD.FAT]}
                           onChange={this.handleChange}
                    />
                </label>

                <button onClick={ (event) => {
                    this.props.onClickCreate(this.state);
                    event.preventDefault();
                }}>
                    Create
                </button>
            </form>
        )
    }
}

export default ProductCreationForm;