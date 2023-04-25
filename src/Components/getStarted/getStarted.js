import React from "react";


const GetStarted = () => {
    return (
        <form>
            <div className="form-group">
                <h3>Seller Information</h3>
                <label for="sellerName">Owner: </label>
                <input type="text" className="form-control" id="sellerName" placeholder="Enter your name" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="status" /> Married
                        <input type="radio" value="Single" name="status" /> Single
                        <input type="radio" value="Divorced" name="status" /> Divorced
                        <input type="radio" value="Widower" name="status" /> Widower
                    </div> 
                <label for="co-owner">Co-Owner: </label>
                <input type="text" className="form-control" id="co-owner" placeholder="Enter your name" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="co-status" /> Married
                        <input type="radio" value="Single" name="co-status" /> Single
                        <input type="radio" value="Divorced" name="co-status" /> Divorced
                        <input type="radio" value="Widower" name="co-status" /> Widower
                    </div> 
                <label for="address">Address: </label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                <label for="city">City: </label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" />
                <label for="state">State/Province: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="usstatevalue" id="usstatevalue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">AL</option>
                        <option value="47817">AK</option>
                        <option value="47819">AZ</option>
                        <option value="47821">AR</option>
                        <option value="47823">CA</option>
                        <option value="47825">CO</option>
                        <option value="47827">CT</option>
                        <option value="47829">DE</option>
                        <option value="47831">DC</option>
                        <option value="47833">FL</option>
                        <option value="47835">GA</option>
                        <option value="47837">HI</option>       
                        </select>
                    </p>
                <label for="country">Country: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="countryValue" id="countryValue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">United States</option>
                        <option value="47817">Abu Dhabi</option>
                        <option value="47819">Albania</option>
                        <option value="47825">Argentina</option>
                        <option value="47827">Bolivia</option>
                        <option value="47829">Ecuador</option>
                        <option value="47831">France</option>
                        <option value="47821">Germany</option>
                        <option value="47823">Japan</option>
                        <option value="47833">Nigeria</option>
                        <option value="47835">Peru</option>
                        <option value="47837">Qatar</option>       
                        </select>
                    </p>
                <label for="zip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="zip" placeholder="Enter your zip code" />
                <label for="phone">Phone: </label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                <label for="email">Email: </label>
                <input type="text" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Buyer Information</h3>
                <label for="buyerName">Buyer 1 Name: </label>
                <input type="text" className="form-control" id="buyerName" placeholder="Enter your name" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="buyer-status" /> Married
                        <input type="radio" value="Single" name="buyer-status" /> Single
                        <input type="radio" value="Divorced" name="buyer-status" /> Divorced
                        <input type="radio" value="Widower" name="buyer-status" /> Widower
                    </div> 
                <label for="co-buyer">Buyer 2 Name: </label>
                <input type="text" className="form-control" id="co-buyer" placeholder="Enter your name" />
                    <div className="marriage-status">
                        <input type="radio" value="Married" name="co-buyer" /> Married
                        <input type="radio" value="Single" name="co-buyer" /> Single
                        <input type="radio" value="Divorced" name="co-buyer" /> Divorced
                        <input type="radio" value="Widower" name="co-buyer" /> Widower
                    </div> 
                <label for="address">Address: </label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                <label for="city">City: </label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" />
                <label for="state">State/Province: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="usstatevalue" id="usstatevalue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">AL</option>
                        <option value="47817">AK</option>
                        <option value="47819">AZ</option>
                        <option value="47821">AR</option>
                        <option value="47823">CA</option>
                        <option value="47825">CO</option>
                        <option value="47827">CT</option>
                        <option value="47829">DE</option>
                        <option value="47831">DC</option>
                        <option value="47833">FL</option>
                        <option value="47835">GA</option>
                        <option value="47837">HI</option>       
                        </select>
                    </p>
                <label for="country">Country: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="countryValue" id="countryValue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">United States</option>
                        <option value="47817">Abu Dhabi</option>
                        <option value="47819">Albania</option>
                        <option value="47825">Argentina</option>
                        <option value="47827">Bolivia</option>
                        <option value="47829">Ecuador</option>
                        <option value="47831">France</option>
                        <option value="47821">Germany</option>
                        <option value="47823">Japan</option>
                        <option value="47833">Nigeria</option>
                        <option value="47835">Peru</option>
                        <option value="47837">Qatar</option>       
                        </select>
                    </p>
                <label for="zip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="zip" placeholder="Enter your zip code" />
                <label for="phone">Phone: </label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                <label for="email">Email: </label>
                <input type="text" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Property Information</h3>
                <label for="resortName">Name of Resort: </label>
                <input type="text" className="form-control" id="resortName" placeholder="Enter the name of the resort" />
                <label for="resortAddress">Address of Resort: </label>
                <input type="text" className="form-control" id="resortAddress" placeholder="Enter the address of the resort" />
                <label for="resortCity">City: </label>
                <input type="text" className="form-control" id="resortCity" placeholder="Enter the city of the resort" />
                <label for="resortState">State/Province: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="usstatevalue" id="usstatevalue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">AL</option>
                        <option value="47817">AK</option>
                        <option value="47819">AZ</option>
                        <option value="47821">AR</option>
                        <option value="47823">CA</option>
                        <option value="47825">CO</option>
                        <option value="47827">CT</option>
                        <option value="47829">DE</option>
                        <option value="47831">DC</option>
                        <option value="47833">FL</option>
                        <option value="47835">GA</option>
                        <option value="47837">HI</option>       
                        </select>
                    </p>
                <label for="resortCountry">Country: </label>
                    <p class="form-field state pd-select required">
                        <label class="field-label" for="usstatevalue"></label>
                        <select name="countryValue" id="countryValue" class="select" onchange="">
                        <option value="" selected="selected"></option>
                        <option value="47815">United States</option>
                        <option value="47817">Abu Dhabi</option>
                        <option value="47819">Albania</option>
                        <option value="47825">Argentina</option>
                        <option value="47827">Bolivia</option>
                        <option value="47829">Ecuador</option>
                        <option value="47831">France</option>
                        <option value="47821">Germany</option>
                        <option value="47823">Japan</option>
                        <option value="47833">Nigeria</option>
                        <option value="47835">Peru</option>
                        <option value="47837">Qatar</option>       
                        </select>
                    </p>
                <label for="resortZip">Zip/Postal Code: </label>
                <input type="text" className="form-control" id="resortZip" placeholder="Enter the zip code of the resort" />
                <label for="resortPhone">Phone: </label>
                <input type="text" className="form-control" id="resortPhone" placeholder="Enter the phone number of the resort" />
                <label for="ownershipStatus">Type of Ownership</label>
                    <div className="ownership-status">
                        <input type="radio" value="Deeded" name="ownership-status" /> Deeded
                        <input type="radio" value="Lease/Right to Use" name="ownership-status" /> Lease/Right to Use
                        <input type="radio" value="Don't Know" name="ownership-status" /> Don't Know
                    </div> 
                <label for="rtu">If RTU, Expiration Date: </label>
                <input type="text" className="form-control" id="rtu" placeholder="Enter the expiration date of your RTU" />
                <label for="unitNumber">Unit #: </label>
                <input type="text" className="form-control" id="unitNumber" placeholder="Enter the unit number" />
                <label for="pointsNumber">Points #: </label>
                <input type="text" className="form-control" id="pointsNumber" placeholder="Enter the points number" />
                    <div className="management-status">
                        <input type="radio" value="Float" name="management-status" /> Float
                        <input type="radio" value="Fixed" name="management-status" /> Fixed
                        <input type="radio" value="Flex" name="management-status" /> Flex
                        <input type="radio" value="Other" name="management-status" /> Other
                    </div> 
                <label for="mgmtCompany">Management Company Name: </label>
                <input type="text" className="form-control" id="mgmtCompany" placeholder="Enter the management company" />
                <label for="mgmtPhone">Management Company Phone: </label>
                <input type="text" className="form-control" id="mgmtPhone" placeholder="Enter the management company phone number" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Transaction Details</h3>
                <label for="purchasePrice">Purchase Price: $ </label>
                <input type="text" className="form-control" id="purchasePrice" placeholder="Enter the purchase price" />
                <label for="Deposit"> Deposit: $ </label>
                <input type="text" className="form-control" id="Deposit" placeholder="Enter the deposit" />
                <label for="holdEscrow">Will TRCS hold funds in escrow?  </label>
                    <div className="hold-escrow">
                        <p class="form-field state pd-select required">
                            <label class="field-label" for="usstatevalue"></label>
                            <select name="escrow" id="escrow" class="select" onchange="">
                            <option value="yes" selected="selected">Yes (recommended)</option>
                            <option value="no">No</option>
                            <option value="idk">Don't Know</option>    
                            </select>
                        </p>
                    </div>
                <label for="closingCosts">Closing Costs will be paid by : </label>
                    <div className="closingCosts">
                        <input type="radio" value="Seller" name="closingCosts" /> Seller
                        <input type="radio" value="Buyer" name="closingCosts" /> Buyer
                        <input type="radio" value="Split" name="closingCosts" /> Split
                    </div> 
                <label for="firstYear">Buyer's 1'st Year of use : </label>
                    <div className="firstYear">
                        <p class="form-field state pd-select required">
                            <label class="field-label" for="usstatevalue"></label>
                            <select name="yearUse" id="yearUse" class="select" onchange="">
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
                        <input type="radio" value="Seller" name="transferFee" /> Seller
                        <input type="radio" value="Buyer" name="transferFee" /> Buyer
                        <input type="radio" value="Split" name="transferFee" /> Split
                    </div> 
            </div>

            <br></br>

            <div className="form-group">
                <h3>Seller's Existing Mortgage ( if applicable )</h3>
                <label for="lenderName">Name of Lender: </label>
                <input type="text" className="form-control" id="lenderName" placeholder="Enter the name of the lender" />
                <label for="lenderPhone">Lender Phone: </label>
                <input type="text" className="form-control" id="lenderPhone" placeholder="Enter the lender phone number" />
                <label for="loanNumber">Loan Number:</label>
                <input type="text" className="form-control" id="loanNumber" placeholder="Enter the loan number" />
            </div>

            <br></br>

            <div className="form-group">
                <h3>Maintenance & Taxes</h3>
                <label for="dues">Current Years Dues: $ </label>
                <input type="text" className="form-control" id="dues" placeholder="Enter the current years dues" />
                    <div className="dues">Paid By: 
                        <input type="radio" value="Seller" name="dues" /> Seller
                        <input type="radio" value="Buyer" name="dues" /> Buyer
                        <input type="radio" value="Split" name="dues" /> Split
                    </div>
                <label for="taxes">All taxes included in Maintenance Fees? </label>
                    <div className="taxes">
                        <input type="radio" value="Yes" name="taxes" /> Yes
                        <input type="radio" value="No" name="taxes" /> No
                    </div>
                <label for="special">Are there any special assessments? </label>
                    <div className="special">
                        <input type="radio" value="Yes" name="special" /> Yes
                        <input type="radio" value="No" name="special" /> No
                    </div>
                    <div className="assessment">Paid By: 
                        <input type="radio" value="Seller" name="assessment" /> Seller
                        <input type="radio" value="Buyer" name="assessment" /> Buyer
                        <input type="radio" value="Split" name="assessment" /> Split
                    </div>
            </div>

            <br></br>

            <div className="form-group">
                <h3>Exchange Company</h3>
                <label for="exchangeCompany">Are there any banked weeks transferred with this sale? </label>
                    <div className="exchangeCompany">
                        <input type="radio" value="Yes" name="exchangeCompany" /> Yes
                        <input type="radio" value="No" name="exchangeCompany" /> No
                    </div>
                <p>Transfer of banked usage from seller to buyer is subject to a $50 document processing fee</p>
            </div>

            <br></br>

            <div className="form-group">
                <h3>Payment and Contact Information</h3>
                <label for="contactName">Contact Name: </label>
                <input type="text" className="form-control" id="contactName" placeholder="Enter the contact name" />
                <label for="contactPhone">Contact Phone: </label>
                <input type="text" className="form-control" id="contactPhone" placeholder="Enter the contact phone number" />
                <label for="contactEmail">Contact Email: </label>
                <input type="text" className="form-control" id="contactEmail" placeholder="Enter the contact email" />
                <label for="iAm"> </label>
                    <div className="iAm">
                        <input type="radio" value="Seller" name="iAm" />Seller
                        <input type="radio" value="Buyer" name="iAm" />Buyer
                    </div>
                <label for="questions">Questions or Comments: </label>
                <input type="text" className="form-control" id="questions" placeholder="Enter any questions or comments" />
                <label for="reference">How did you hear about us?</label>
                <input type="text" className="form-control" id="reference" placeholder="Enter how you heard about us" />
                <label for="payment">Payment Information </label>
                <p>Please note that we accept Mastercard, Visa and Discover for the deposit (not to exceed $1000) or for payment of services rendered only – All other funds will have to be paid by wire transfer, cashier’s check, or money order.</p>
                <button type="submit" className="btn btn-primary">Submit Closing</button>
            </div>
        </form>
    );
};

export default GetStarted;