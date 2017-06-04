import React, {Component} from 'react';
import Button, { green } from '../../components/Button';

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
           placeholder={ props.placeholder }
           onChange={ (event) => props.onChange(props.name, event.target.value) }
    />
);

class ProductCreationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            calories: null,
            protein: null,
            carbs: null,
            fat: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, value) {
        this.setState((prevState) => (Object.assign({}, prevState, { [field]: value })));
    }

    render() {
        return (
            <form className="pure-form product-form">
                <label htmlFor="name">
                    <span>Name:</span>
                    <Input name={FIELD.NAME}
                           placeholder="Product name"
                           value={this.state[FIELD.NAME]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="calories">
                    <span>Calories:</span>
                    <Input name={FIELD.CALORIES}
                           placeholder="Calories"
                           value={this.state[FIELD.CALORIES]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    <span>Protein:</span>
                    <Input name={FIELD.PROTEIN}
                           placeholder="Protein"
                           value={this.state[FIELD.PROTEIN]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    <span>Carbohydrates:</span>
                    <Input name={FIELD.CARBS}
                           placeholder="Carbohydrates"
                           value={this.state[FIELD.CARBS]}
                           onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="name">
                    <span>Fat:</span>
                    <Input name={FIELD.FAT}
                           placeholder="Fat"
                           value={this.state[FIELD.FAT]}
                           onChange={this.handleChange}
                    />
                </label>

                <Button color={ green } onClick={ (event) => {
                    event.preventDefault();
                    this.props.onClickCreate({
                        id: Date.now(),
                        name: this.state.name,
                        calories: this.state.calories,
                        macros: {
                            protein: this.state.protein,
                            carbs: this.state.carbs,
                            fat: this.state.fat
                        }
                    });
                }}>
                    Create
                </Button>
            </form>
        )
    }
}

export default ProductCreationForm;