import React from "react";
import loading from "../../../images/media/loading.8310aa18.gif";

import Footer from "./Footer";

class BuildCarFinance extends React.Component {

  state = {
    carPrice: 0,
    interest: null,
    yearsToRepay: null,
    userMonthlyPayment: 0,
    userTotalInterest: 0,
    userTotalPayment: 0,
    gifLoading: "",
    showPayments: false,
    showError: false,
    loading: true
  };


  componentWillMount(){
    this.setState({carPrice: this.props.carPrice});
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    },500);
  };



  userInputPrice = (e) => {
    let value = e.target.value;
    this.setState({ carPrice: value });
    // console.log(value);
  };

  userInputInterest = (e) => {
    let value = e.target.value;
    this.setState({ interest: value });
  };

  userInputYearsToRepay = (e) => {
    let value = e.target.value;
    this.setState({ yearsToRepay: value });
  };

  getPayments = (e) => {

    e.preventDefault();

    if(this.state.interest === null || this.state.interest === undefined || this.state.interest === "" || this.state.yearsToRepay === null || this.state.yearsToRepay === undefined || this.state.yearsToRepay === ""){
      
      this.setState({ showError: true })

      setTimeout(this.clearError, 2000);
    } 

    else {

      // const carPrice = this.state.carPrice;
      

      //forumulas to calculate
      const principal = this.state.carPrice;
      const calculatedInterest = this.state.interest / 100 / 12;
      const calculatedPayments = this.state.yearsToRepay * 12;

      //monthly payment
      const formula = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * formula * calculatedInterest) / (formula - 1); 

      const monthlyPayment = monthly.toFixed(2);
      const totalInterest = ((monthly * calculatedPayments) - principal).toFixed(2);
      const totalPayment = (monthly * calculatedPayments).toFixed(2);

      this.setState({
        userMonthlyPayment: monthlyPayment,
        userTotalInterest: totalInterest,
        userTotalPayment: totalPayment
      });

      this.showPayments();
    }


  };

  clearError = () => {
    this.setState({ showError: false })
  };

  showPayments = () => {
    if(this.state.gifLoading === ""){
      this.setState({ gifLoading: loading })
    }
    setTimeout(()=> {
      this.setState({ gifLoading: ""})
      this.setState({ showPayments: true})
    },500);

    
  };




  render(){
    // console.log(this.state.carPrice);
    // console.log(this.state.userMonthlyPayment);
    // console.log(this.state.userTotalInterest);
    // console.log(this.state.userTotalPayment);
    // console.log(this.state.gifLoading);

    const container = {
      height: "30vh"
    }
    return(
      <div>

        {
          this.state.loading ? <div style={container}><div className="finance-loading"></div></div> :

          <div>
            <form onSubmit={this.onSubmit} className="finance-form">
              <h1 className="finance-header">Loan Calculator</h1>
              <div className={this.state.showError ? "finance-error finance-showError" : "finance-hideError"}>
                <div>Please Fill in All Fields</div>
              </div>
              
              <div className="finance-inputContain">
                <div className="finance-icon"><i className="fa fa-usd" aria-hidden="true"></i></div>
                <input className="finance-input" defaultValue={this.state.carPrice} type="number" placeholder="Loan Amount" onChange={this.userInputPrice}/>
              </div>
              <div className="finance-inputContain">
                <div className="finance-icon"><i className="fa fa-percent" aria-hidden="true"></i></div>
                <input className="finance-input" type="number" placeholder="Interest" onChange={this.userInputInterest} />
              </div>
              <div className="finance-inputContain">
                <div className="finance-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                <input className="finance-input" type="number" placeholder="Years to Repay" onChange={this.userInputYearsToRepay} />
              </div>
              <div className="finance-inputContain">
                <input className="finance-input--submit" type="submit" value="Calculate" name="calculate" onClick={this.getPayments}/>
              </div>
            </form>
            <div>

              {

                this.state.gifLoading ? <div className="finance-loading"></div> : 
                <div className={this.state.showPayments ? "finance-show" : "finance-hide"}>

                  <div className="finance-inputContain">
                    <div className="finance-inputReturnInfo"> 
                      <div className="finance-inputText">monthly<br />payment:</div>
                    </div>
                    <div className="finance-input finance-inputReturnTotals"> 
                      <div> {this.state.userMonthlyPayment} </div>
                    </div>
                  </div>

                  <div className="finance-inputContain">
                    <div className="finance-inputReturnInfo"> 
                      <div className="finance-inputText">interest:</div>
                    </div>
                    <div className="finance-input finance-inputReturnTotals"> 
                      <div>{this.state.userTotalInterest}  </div>
                    </div>
                  </div>

                  <div className="finance-inputContain">
                    <div className="finance-inputReturnInfo"> 
                      <div className="finance-inputText">total<br />payment:</div>
                    </div>
                    <div className="finance-input finance-inputReturnTotals"> 
                      <div>{this.state.userTotalPayment} </div>
                    </div>
                  </div>

                </div>
              }
            </div>
          </div>
        }

        <Footer />
      </div>
    )
  }
}

export default BuildCarFinance;