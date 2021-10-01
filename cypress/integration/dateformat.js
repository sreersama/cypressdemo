
describe('sample', ()=>{ 
    it('printdate' , ()=>{ 
    const todaysDate = new Date().getTime();
    const timeStamp =  new Date().toLocaleDateString().concat("_"+new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
    minute: "numeric"}))
   // var myStr = 'quick_brown_fox';
   // var newStr = myStr.replace(/_/g, "-");
   const formatedtime = timeStamp.replace(/:/g, "_")
   cy.log(formatedtime)

   var date = (new Date()).toISOString().split('T')[0];
   const date1 =(new Date()).toISOString().split('T')[0];
cy.log("formated date is " +date)
cy.log("cypress formated date is " +date1)

cy.log(timeStamp)
})
})

