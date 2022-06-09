import React from 'react';

// I edited bits of this lab to try practice and test some things out

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  //Added console.log to view updates to state onChange
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    }, () => console.log(this.state))
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray}, () => console.log(this.state))

    //reset value of inputs to display placeholder again
    let firstname = document.getElementById("firstname")
    firstname.value = ""
    let lastname = document.getElementById("lastname")
    lastname.value = ""
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          {/* values still stored in submittedData but removed value so that that they could be reset on submit */}
          <input type="text" id="firstname" placeholder="first name" onChange={event => this.handleFirstNameChange(event)} />
          <input type="text" id="lastname" placeholder="last name" onChange={event => this.handleLastNameChange(event)} />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;