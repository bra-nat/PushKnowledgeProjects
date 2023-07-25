import React, { useState, useRef } from "react";
import FormGroup from "../components/form-group/form-group.component";
import "./compound-interest-rate-calc.styles.scss";
import { useEffect } from "react";
import InterestRateCalculator from "./interestCalculator.component";

const CompoundInterestRateCalc = () => {

    let principalInput = useRef(null);

    useEffect(() => {
        principalInput.current.focus();
    }, [])

    const [compound, setCompound] = useState({
        principalAmount: "",
        monthlyContribution: null,
        interestRate: "",
        years: ""
    })

    const handlePrincipalAmount = (e) => {
        setCompound({...compound, principalAmount: e.target.value})
    }
    const handleMonthlyContribution = (e) => {
        setCompound({...compound, monthlyContribution: e.target.value})
    }
    const handleInterestRate = (e) => {
        setCompound({...compound, interestRate: e.target.value})
    }
    const handleYears = (e) => {
        setCompound({...compound, years: e.target.value})
    }

    document.body.style.background = `#2174af`

  return (
    <div className="container">
      <div
        className="card ci-bg-warning shadow text-dark m-auto mt-4"
        style={{ maxWidth: 300 }}>
        <div className="card-body">
          <FormGroup
            labelText={"Principal amount $"}
            className={"w-100 my-3 border-0 mt-1 p-2 rounded outline-0"}
            inputType={"number"}
            values={compound.principalAmount}
            onChange={handlePrincipalAmount}
            reference={principalInput}
          />

          <FormGroup
            labelText={"Monthly contribution $"}
            className={"w-100 my-3 border-0 mt-1 p-2 rounded outline-0"}
            inputType={"number"}
            onChange={handleMonthlyContribution}
            values={compound.monthlyContribution}
          />

          <FormGroup
            labelText={"Interest rate %"}
            className={"w-100 my-3 border-0 mt-1 p-2 rounded outline-0"}
            inputType={"number"}
            onChange={handleInterestRate}
            values={compound.interestRate}
          />

          <FormGroup
            labelText={"Years of investment"}
            className={"w-100 my-3 border-0 mt-1 p-2 rounded outline-0"}
            inputType={"number"}
            onChange={handleYears}
            values={compound.years}
          />
        </div>
        <div className="card-footer ci-card-footer ci-bg-info text-light  fs-1">
            <InterestRateCalculator principalAmount={compound.principalAmount} monthlyContribution={compound.monthlyContribution} interestRate={compound.interestRate} years={compound.years} />
          
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestRateCalc;
