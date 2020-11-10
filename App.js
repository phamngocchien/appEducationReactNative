import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      educationProgram: [],
    }
      fetch("https://edu-ms.herokuapp.com/api/v1/mon-hoc")
      .then(res => res.json())
      .then(data => {
          this.setState({
              educationProgram: data
          })
      })
      .catch(error => console.log('An error occured ', error))
  }

  renderTableData() {
    return this.state.educationProgram.map((education) => {
      const {id, maMon, tenMon, soTinChi, hocPhanTienQuyet, soGio, heSo } = education
      return (
        <tr key={id}>
          <td style={{textAlign:'center'}}>{education.id}</td>
          <td style={{textAlign:'center'}}>{education.maMon}</td>
          <td style={{textAlign:'center'}}>{education.tenMon}</td>
          <td style={{textAlign:'center'}}>{education.soTinChi}</td>
          <td style={{textAlign:'center'}}>{education.hocPhanTienQuyet}</td>
          <td style={{textAlign:'center'}}>{education.soGio}</td>
          <td style={{textAlign:'center'}}>{education.heSo}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.educationProgram[1])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }


  render() {
    return (
        <section>
            <h1 style={{textAlign:'center'}}>Danh sách môn học</h1>
            <table>
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
            </tbody>
            </table>
        </section>   
    )
  }
}

export default Tables
