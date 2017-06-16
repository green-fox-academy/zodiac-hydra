import React from "react";

export class Tables extends React.Component {
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
    data = this.props.data;

    return data.map(function(item) {
      // handle the column data within each row
      let cells = cols.map(function(colData) {

        // colData.key might be "firstName"
        return <td key={item[colData.key]}>{item[colData.key]}</td>;
      });
      return <tr key={item.id}>{cells}</tr>;
    });
  }
}

export default Tables;
