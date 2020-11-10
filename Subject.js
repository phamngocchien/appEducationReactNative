import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subjecs: [
        { id: 1, maMon: 'AC201', tenMon: "Nguyên lý kế toán", soTinChi: 3 },
        { id: 2, maMon: 'AC231A', tenMon: "Kế toán Mỹ 1", soTinChi: 2 },
        { id: 3, maMon: 'AC231B', tenMon: "Kế toán Mỹ 2", soTinChi: 2 },
        { id: 4, maMon: 'AD201', tenMon: "Kỹ năng giao tiếp và thuyết trình", soTinChi: 4 },
      ],
    }
  }

  renderTableData() {
    return this.state.subjecs.map((subject, index) => {
      const { id, maMon, tenMon, soTinChi } = subject
      return (
        <tr key={id}>
          <td style={{textAlign:'center'}}>{id}</td>
          <td style={{textAlign:'center'}}>{maMon}</td>
          <td style={{textAlign:'center'}}>{tenMon}</td>
          <td style={{textAlign:'center'}}>{soTinChi}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.subjecs[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }


  render() {
    return (
        <table>
          <tbody>

            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
    )
  }
}

export default Tables