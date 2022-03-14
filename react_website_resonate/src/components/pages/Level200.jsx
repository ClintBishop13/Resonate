import React from "react";
import '../../App.css'
import $ from 'jquery';
import '/home/clintb/Documents/Real_world_problem/react_website_resonate/src/components/Questions.css'


function Level200()
{
    return (
    <>
        
                    <button onClick={RunTests}>Run Tests</button>
                    <h3>Test results:</h3>
                    <div id="test-results"></div>
    </>
    )
    
};
function generateShortCode(storeId, transactionId) {
    // Logic goes here
    var code = storeId + "S" + transactionId + "T";
    while (code.length < 9) {
      code = code + Math.floor(Math.random() * 10).toString();
    }
    return code;
  }
  
  // TODO: Modify this function
  function decodeShortCode(shortCode) {
    // Logic goes here
    return {
      storeId: parseInt(shortCode.split("S")[0]), // store id goes here,
      shopDate: new Date(), // the date the customer shopped,
      transactionId: parseInt(shortCode.split("S")[1].split("T")[0]) // transaction id goes here
    };
  }
  
  // ------------------------------------------------------------------------------//
  // --------------- Don't touch this area, all tests have to pass --------------- //
  // ------------------------------------------------------------------------------//
  function RunTests() {
  
      var storeIds = [175, 42, 0, 9]
      var transactionIds = [9675, 23, 123, 7]
      console.log('I was triggered during render')
      storeIds.forEach(function (storeId) {
          transactionIds.forEach(function (transactionId) {
              var shortCode = generateShortCode(storeId, transactionId);
              var decodeResult = decodeShortCode(shortCode);
              $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
              AddTestResult("Length <= 9", shortCode.length <= 9);
              AddTestResult("Is String", (typeof shortCode === 'string'));
              AddTestResult("Is Today", IsToday(decodeResult.shopDate));
              AddTestResult("StoreId", storeId === decodeResult.storeId);
              AddTestResult("TransId", transactionId === decodeResult.transactionId);
          })
      })
  }
  
  function IsToday(inputDate) {
      // Get today's date
      var todaysDate = new Date();
      // call setHours to take the time out of the comparison
      return (inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0));
  }
  
  function AddTestResult(testName, testResult) {
      var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
  }

export default Level200