import React, {Component} from 'react';

class Textarea extends Component{

    onChange = (e) => {
        const value = e.target.value;
        const {id, onChange} = this.props;

        onChange({fieldId: id, value});
    };

  render() {
      const {value} = this.props;
      return (

          <>
              <textarea
                  name="text"
                  cols="30"
                  rows="10"
                  value={value}
                  onChange={this.onChange}
              >
              </textarea>
          </>
      )
  }
}

export default Textarea;
