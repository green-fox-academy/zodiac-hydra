import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTables} from './tables_actions'


export class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchTables()
  }

  render() {
    let headerComponents = this.generateHeaders(),
    rowComponents = this.generateRows();

    return (
      <div>
        <p className="componentTitle">open tables</p>
        <table className="tables">
          <thead>
            <tr>
            {headerComponents}
            </tr>
          </thead>
          <tbody>{rowComponents}</tbody>
        </table>
      </div>
    );
  }

  generateHeaders() {
    let cols = this.props.cols;  // [{key, label}]

    // generate our header (th) cell components
    return cols.map(function(colData) {
      return <th key={colData.key}>{colData.label}</th>;
    });
  }

  generateRows() {
    let cols = this.props.cols,  // [{key, label}]
      data = this.props.tables;
    return data.map(function(item) {
      // handle the column data within each row
      let cells = cols.map(function(colData) {
        if (colData.key === 'name') {
          return <td key={item[colData.key]}><Link key={'table ' + item[colData.key]} to={"/game/" + item.id}  className="tableLink">{item[colData.key]}</Link></td>;
        }
        // colData.key might be "firstName"
        return <td key={item[colData.key]}>{item[colData.key]}</td>;
      });
      return <tr key={item.id}>{cells}</tr>;
    });
  }
}

function mapStateToProps(state) {
  return {
    tables: state.tables.tables
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchTables: fetchTables}, dispatch)
}

let allTables = connect(mapStateToProps, matchDispatchToProps)(Tables);

export default allTables;
