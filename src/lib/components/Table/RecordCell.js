import React, {Component} from 'react';
import TableCell from './TableCell';

const CellStyle = TableCell.extend`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

class RecordCell extends Component {
  render(){
    return(
      <CellStyle>
        { JSON.stringify(this.props.json) }
      </CellStyle>
    );
  }
}

RecordCell.propTypes = {}

export default RecordCell;