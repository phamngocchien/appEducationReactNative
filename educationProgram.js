import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      educationProgram: [
        {id:1,maMon:"AC201",tenMon:"Nguyên lý kế toán",soTinChi:3,hocPhanTienQuyet:null,soGio:30,heSo:1.7},
        {id:2,maMon:"AC231A",tenMon:"Kế toán Mỹ 1",soTinChi:2,hocPhanTienQuyet:null,soGio:30,heSo:0.75},
        {id:3,maMon:"AC231B",tenMon:"Kế toán Mỹ 2",soTinChi:2,hocPhanTienQuyet:null,soGio:45,heSo:1.7},
        {id:4,maMon:"AD201",tenMon:"Kỹ năng giao tiếp và thuyết trình",soTinChi:2,hocPhanTienQuyet:null,soGio:45,heSo:1.2},
        {id:5,maMon:"AD204",tenMon:"Ẩm thực Việt nam",soTinChi:4,hocPhanTienQuyet:null,soGio:54,heSo:1.2},
    ],
    }
  }

  renderTableData() {
    return this.state.educationProgram.map((education) => {
      const {id, maMon, tenMon, soTinChi, hocPhanTienQuyet, soGio, heSo } = education
      return (
        <tr key={id}>
          <td style={{textAlign:'center'}}>{id}</td>
          <td style={{textAlign:'center'}}>{maMon}</td>
          <td style={{textAlign:'center'}}>{tenMon}</td>
          <td style={{textAlign:'center'}}>{soTinChi}</td>
          <td style={{textAlign:'center'}}>{hocPhanTienQuyet}</td>
          <td style={{textAlign:'center'}}>{soGio}</td>
          <td style={{textAlign:'center'}}>{heSo}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.educationProgram[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }


  render() {
    return (
        <section>
            <h1 style={{textAlign:'center'}}>Chương trình đào tạo</h1>
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
