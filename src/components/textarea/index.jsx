import React, {Component} from 'react';
import style from './style.css';

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
                  className={style.textarea}
                  name="text"
                  value={value}
                  onChange={this.onChange}
              >
              </textarea>
          </>
      )
  }
}

export default Textarea;
