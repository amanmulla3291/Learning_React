import React, { Component } from 'react'

export default class Studentinfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [{Roll:1, Name:'Amit'},{Roll:2, Name:'Rahul'},{Roll:3, Name:'Raj'},{Roll:4, Name:'Ravi'}]
        }
    }
    render() {
    return (
      <div>
        <table border="1" align='center'>
        <caption>Student Information</caption>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
            </tr>
            {
                this.state.students.map((student, index) => {
                    return (
                        <tr key={index}>
                            <td>{student.Roll}</td>
                            <td>{student.Name}</td>
                        </tr>
                    )
                })
            }
        </table>
      </div>
    )
  }
}