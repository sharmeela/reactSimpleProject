import React, { Component } from "react";
 
class LesseeTaxRates extends Component {
	constructor(props) {
    super(props);
	
	let lesseeTax = [];
	
    this.state = {
		id: 0,
		lesseeTaxCompany: '',
		lesseeFederalTax: '',
		lesseeStateTax: '',
		lesseeTax : []
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event){
	const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   

    this.setState({[name]: value});
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    let id;	
    if (this.refs.lesseeTaxCompany) {
		console.log(this.refs.lesseeTaxCompany.value);
	}
	
	console.log('this.state', this.state);
	
	let newobj = {
		lesseeTaxCompany : this.refs.lesseeTaxCompany.value, 
		lesseeStateTax : this.state.lesseeStateTax, 
		lesseeFederalTax : this.state.lesseeFederalTax,
		id : this.state.id + 1
	}
	
	var updatedItem = this.state.lesseeTax.concat(newobj);
	this.setState({id: this.state.id + 1,  lesseeTax: updatedItem });
    event.preventDefault();
	}

	componentDidUpdate() {
      console.log('Component DID MOUNT!', this.state.lesseeTax);
   }
   
   renderTableData() {
	    return this.state.lesseeTax.map((tax, index) => {
			const {id, lesseeTaxCompany, lesseeFederalTax, lesseeStateTax} = tax
			return (
					<tr key={id}>
						<td>{lesseeTaxCompany}</td>
						<td>{lesseeFederalTax}</td>
						<td>{lesseeStateTax}</td>
					</tr>
			)
			})
	}
   
   
  render() {
    return (
      <div>
		<h2>Lessee Tax Rates:</h2>
        <form onSubmit={this.handleSubmit} >
			<div className="form-group" onChange={this.handleChange}>
				<label>lesseeTaxCompany :</label>
				<select name ="lesseeTaxCompany" id="lesseeTaxCompany" name="lesseeTaxCompany" ref="lesseeTaxCompany">
					<option value="AF">Afghanistan</option>
					<option value="AX">Åland Islands</option>
					<option value="GH">Ghana</option>
					<option value="GI">Gibraltar</option>
					<option value="GR">Greece</option>
					<option value="GL">Greenland</option>
					<option value="GD">Grenada</option>
					<option value="GP">Guadeloupe</option>	
					<option value="HU">Hungary</option>
					<option value="IS">Iceland</option>
					<option value="IN">India</option>
					<option value="ID">Indonesia</option>
					<option value="UA">Ukraine</option>
					<option value="AE">United Arab Emirates</option>
					<option value="GB">United Kingdom</option>
					<option value="US">United States</option>
					<option value="YE">Yemen</option>
					<option value="ZM">Zambia</option>
					<option value="ZW">Zimbabwe</option>
				</select>
			</div>
			<div className="form-group">		
				<label>lesseeFederalTax :</label>
				<input type="text" name ="lesseeFederalTax" value={this.state.lesseeFederalTax} onChange={this.handleChange} />%
			</div>		
			<div className="form-group">
				<label>lesseeStateTax :</label>
				<input type="text" name ="lesseeStateTax" value={this.state.lesseeStateTax} onChange={this.handleChange}/>%
			</div>
			<button type="submit" className="button">Save</button>
        </form>
		
		<div className="lesseeTaxRatesTableData">
		<h3>Lessee Tax Rates</h3>
		<table id="lesseeTaxRatesTable">
				<thead>
					<tr>
					  <th>Country</th>
					  <th>Federal Tax Rate</th>
					  <th>State Tax Rate</th>
					</tr>  
				</thead>
				<tbody>
						{this.renderTableData()}
				</tbody>    
			</table>
	  </div>
      </div>
	  
    )
  }
}
 
export default LesseeTaxRates;