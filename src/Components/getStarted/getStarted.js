import React from "react";
import "../../styles/getStarted.css";
import StateDropdown from "./dropdown";
import CountryDropdown from "./countrydrop";

const GetStarted = () => {
    return (
        <form className="form-container">
            <div className="form-group">
                <h3>Seller Information</h3>
                <label for="sellerName">Owner: </label>
                <input type="text" className="form-control" id="sellerName" placeholder="" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="status" className="radio"/> Married
                        <input type="radio" value="Single" name="status" className="radio"/> Single
                        <input type="radio" value="Divorced" name="status" className="radio"/> Divorced
                        <input type="radio" value="Widower" name="status" className="radio"/> Widower
                    </div> 
                <label for="co-owner">Co-Owner: </label>
                <input type="text" className="form-control" id="co-owner" placeholder="" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="co-status" className="radio"/> Married
                        <input type="radio" value="Single" name="co-status" className="radio"/> Single
                        <input type="radio" value="Divorced" name="co-status" className="radio"/> Divorced
                        <input type="radio" value="Widower" name="co-status" className="radio"/> Widower
                    </div> 
                <label for="address">Address: </label>
                <input type="text" className="form-control" id="address" placeholder="" />
                <label for="city">City: </label>
                <input type="text" className="form-control" id="city" placeholder="" />
                <label for="state">State/Province: </label>
                    <StateDropdown />
                <label for="country">Country: </label>
                    <CountryDropdown />
                <label for="zip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="zip" placeholder="" />
                <label for="phone">Phone: </label>
                <input type="text" className="form-control" id="phone" placeholder="" />
                <label for="email">Email: </label>
                <input type="text" className="form-control" id="email" placeholder="" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Buyer Information</h3>
                <label for="buyerName">Buyer 1 Name: </label>
                <input type="text" className="form-control" id="buyerName" placeholder="" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="buyer-status" className="radio"/> Married
                        <input type="radio" value="Single" name="buyer-status" className="radio"/> Single
                        <input type="radio" value="Divorced" name="buyer-status" className="radio"/> Divorced
                        <input type="radio" value="Widower" name="buyer-status" className="radio"/> Widower
                    </div> 
                <label for="co-buyer">Buyer 2 Name: </label>
                <input type="text" className="form-control" id="co-buyer" placeholder="" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="co-buyer" className="radio"/> Married
                        <input type="radio" value="Single" name="co-buyer" className="radio"/> Single
                        <input type="radio" value="Divorced" name="co-buyer" className="radio"/> Divorced
                        <input type="radio" value="Widower" name="co-buyer" className="radio"/> Widower
                    </div> 
                <label for="address">Address: </label>
                <input type="text" className="form-control" id="address" placeholder="" />
                <label for="city">City: </label>
                <input type="text" className="form-control" id="city" placeholder="" />
                <label for="state">State/Province: </label>
                    <StateDropdown />
                <label for="country">Country: </label>
                    <CountryDropdown />
                <label for="zip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="zip" placeholder="" />
                <label for="phone">Phone: </label>
                <input type="text" className="form-control" id="phone" placeholder="" />
                <label for="email">Email: </label>
                <input type="text" className="form-control" id="email" placeholder="" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Property Information</h3>
                <label for="resortName">Name of Resort: </label>
                <input type="text" className="form-control" id="resortName" placeholder="" />
                <label for="resortAddress">Address of Resort: </label>
                <input type="text" className="form-control" id="resortAddress" placeholder="" />
                <label for="resortCity">City: </label>
                <input type="text" className="form-control" id="resortCity" placeholder="" />
                <label for="resortState">State/Province: </label>
                    <StateDropdown />
                <label for="resortCountry">Country: </label>
                    <CountryDropdown />
                <label for="resortZip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="resortZip" placeholder="" />
                <label for="resortPhone">Phone: </label>
                <input type="text" className="form-control" id="resortPhone" placeholder="" />
                <label for="ownershipStatus">Type of Ownership</label>
                    <div className="ownership-status">
                        <input type="radio" value="Deeded" name="ownership-status" className="radio"/> Deeded
                        <input type="radio" value="Lease/Right to Use" name="ownership-status" className="radio"/> Lease/Right to Use
                        <input type="radio" value="Don't Know" name="ownership-status" className="radio"/> Don't Know
                    </div> 
                <label for="rtu">If RTU, Expiration Date: </label>
                <input type="text" className="form-control" id="rtu" placeholder="" />
                <label for="unitNumber">Unit #: </label>
                <input type="text" className="form-control" id="unitNumber" placeholder="" />
                <label for="pointsNumber">Points #: </label>
                <input type="text" className="form-control" id="pointsNumber" placeholder="" />
                    <div className="management-status">
                        <input type="radio" value="Float" name="management-status" className="radio"/> Float
                        <input type="radio" value="Fixed" name="management-status" className="radio"/> Fixed
                        <input type="radio" value="Flex" name="management-status" className="radio"/> Flex
                        <input type="radio" value="Other" name="management-status" className="radio"/> Other
                    </div> 
                <label for="mgmtCompany">Management Company Name: </label>
                <input type="text" className="form-control" id="mgmtCompany" placeholder="" />
                <label for="mgmtPhone">Management Company Phone: </label>
                <input type="text" className="form-control" id="mgmtPhone" placeholder="" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Transaction Details</h3>
                <label for="purchasePrice">Purchase Price: $ </label>
                <input type="text" className="form-control" id="purchasePrice" placeholder="" />
                <label for="Deposit"> Deposit: $ </label>
                <input type="text" className="form-control" id="Deposit" placeholder="" />
                <label for="holdEscrow">Will TRCS hold funds in escrow?  </label>
                    <div className="hold-escrow">
                        <p className="form-field escrow pd-select required">
                            <label className="field-label" for="escrow"></label>
                            <select className="form-select" id="escrow" class="select" onchange="">
                            <option value="yes" selected="selected">Yes (recommended)</option>
                            <option value="no">No</option>
                            <option value="idk">Don't Know</option>    
                            </select>
                        </p>
                    </div>
                <label for="closingCosts">Closing Costs will be paid by : </label>
                    <div className="closingCosts">
                        <input type="radio" value="Seller" name="closingCosts" className="radio"/> Seller
                        <input type="radio" value="Buyer" name="closingCosts" className="radio"/> Buyer
                        <input type="radio" value="Split" name="closingCosts" className="radio"/> Split
                    </div> 
                <label for="firstYear">Buyer's 1'st Year of use : </label>
                    <div className="firstYear">
                        <p class="form-field state pd-select required">
                            <label class="field-label" for="usstatevalue"></label>
                            <select className="form-select" id="yearUse" class="select" onchange="">
                            <option value="2022" selected="selected">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>  
                            <option value="2026">2026</option>  
                            <option value="2027">2027</option>      
                            </select>
                        </p>
                    </div>
                <label for="transferFee">Resort Transfer fee (if any) will be paid by: </label>
                    <div className="transferFee">
                        <input type="radio" value="Seller" name="transferFee" className="radio"/> Seller
                        <input type="radio" value="Buyer" name="transferFee" className="radio"/> Buyer
                        <input type="radio" value="Split" name="transferFee" className="radio"/> Split
                    </div> 
            </div>

            <br></br>

            <div className="form-group">
                <h3>Seller's Existing Mortgage ( if applicable )</h3>
                <label for="lenderName">Name of Lender: </label>
                <input type="text" className="form-control" id="lenderName" placeholder="" />
                <label for="lenderPhone">Lender Phone: </label>
                <input type="text" className="form-control" id="lenderPhone" placeholder="" />
                <label for="loanNumber">Loan Number:</label>
                <input type="text" className="form-control" id="loanNumber" placeholder="" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Maintenance & Taxes</h3>
                <label for="dues">Current Years Dues: $ </label>
                <input type="text" className="form-control" id="dues" placeholder="" />
                    <div className="dues">Paid By: 
                        <input type="radio" value="Seller" name="dues" className="radio"/> Seller
                        <input type="radio" value="Buyer" name="dues" className="radio"/> Buyer
                        <input type="radio" value="Split" name="dues" className="radio"/> Split
                    </div>
                <label for="taxes">All taxes included in Maintenance Fees? </label>
                    <div className="taxes">
                        <input type="radio" value="Yes" name="taxes" className="radio"/> Yes
                        <input type="radio" value="No" name="taxes" className="radio"/> No
                    </div>
                <label for="special">Are there any special assessments? </label>
                    <div className="special">
                        <input type="radio" value="Yes" name="special" className="radio"/> Yes
                        <input type="radio" value="No" name="special" className="radio"/> No
                    </div>
                    <div className="assessment">Paid By: 
                        <input type="radio" value="Seller" name="assessment" className="radio"/> Seller
                        <input type="radio" value="Buyer" name="assessment" className="radio"/> Buyer
                        <input type="radio" value="Split" name="assessment" className="radio"/> Split
                    </div>
            </div>

            <br></br>

            <div className="form-group">
                <h3>Exchange Company</h3>
                <label for="exchangeCompany">Are there any banked weeks transferred with this sale? </label>
                    <div className="exchangeCompany">
                        <input type="radio" value="Yes" name="exchangeCompany" className="radio"/> Yes
                        <input type="radio" value="No" name="exchangeCompany" className="radio"/> No
                    </div>
                <p>Transfer of banked usage from seller to buyer is subject to a $50 document processing fee</p>
            </div>

            <br></br>

            <div className="form-group">
                <h3>Payment and Contact Information</h3>
                <label for="contactName">Contact Name: </label>
                <input type="text" className="form-control" id="contactName" placeholder="" />
                <label for="contactPhone">Contact Phone: </label>
                <input type="text" className="form-control" id="contactPhone" placeholder="" />
                <label for="contactEmail">Contact Email: </label>
                <input type="text" className="form-control" id="contactEmail" placeholder="" />
                <label for="iAm"> </label>
                    <div className="iAm">
                        <input type="radio" value="Seller" name="iAm" className="radio"/>Seller
                        <input type="radio" value="Buyer" name="iAm" className="radio"/>Buyer
                    </div>
                <label for="questions">Questions or Comments: </label>
                <input type="text" className="form-control" id="questions" placeholder="" />
                <label for="reference">How did you hear about us?</label>
                <input type="text" className="form-control" id="reference" placeholder="" />
                <label for="payment">Payment Information </label>
                <p>Please note that we accept Mastercard, Visa and Discover for the deposit (not to exceed $1000) or for payment of services rendered only – All other funds will have to be paid by wire transfer, cashier’s check, or money order.</p>
                <button type="submit" className="btn btn-primary">Submit Closing</button>
            </div>
        </form>
    );
};

export default GetStarted;