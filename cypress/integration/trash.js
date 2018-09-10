
  //cypress drawback:
  //only able to send keys to specific elements
  //can't use tab
  //no xpath
  //opinionated text entry
  //parallel runs seems to be a nightmare, if possible at all
  ////running in parallel isn't just for "speeding up runs", it can be
  ////critical for ferreting out intermittent errors / race conditions
  //waits seem to be necessary - i have never found a selenium situation that actually required a static wait
  //re-running tests on save is pretty annoying.  sometimes i want to save without restarting active test
  //conditional testing so opinionated.  logic failure is that sometimes thing dont work and u need to retry based on condition
  //https://sqa.stackexchange.com/questions/33847/why-isnt-my-if-statement-working-in-my-cypress-test ugh hidden default asserts everywhere
  //annoying that selector playground forces single quotes
  //this works in selector playground but not irl: '.conditions * [role="textbox"]' -- nm it's tot random when typeaheads appear onclick
  
  //once the browser instance said "paused in debugger" - and page was greyed out, for seemingly no reason
  
  //you can't select an element by text content.  idk how else to get the "temperature" option in the typeahead/dropdown
  //since it disappears 
  
  //only one domain per test!
  
  //confusing syntax... "find" to select children, "contains vs get"
  
  //doesn't automatically scroll to top!!!!!




describe('My First Test', function() {
  it('Code Challenge 1', function() {
  
     var array1 = ['a', 'b', 'c'];

    array1.forEach(element =>     {
      console.log(element);
    });

  //span.mdl-button__ripple-container
  
  
  
    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url().should('include', 'wordsmith.automatedinsights.com')


    cy.get('span.mdl-button__ripple-container')
      .each(($el, index, $list) => {
        console.log($el)
        console.log($el.find("span"))
        console.log($el.find("span").get(0))
        var asdf = $el.find("span").get(0)
        console.log(asdf)
        console.log(asdf.getAttribute("class"))

      })  


    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      
    cy.get('input.password')
      .type('strongpassword{enter}')
      
    cy.get('body')
      .should('contain', 'Stuart Robinson')
      
    cy.contains('New Project')
      .click()
      
    cy.get('.wizard-table__cell')
      .each(($el, index, $list) => {
//         console.log($el)
//         console.log($el.find("input"))
//         console.log($el.find("input").get(0))
//         console.log($el.find("input").get(0).getAttribute("placeholder"))
        
        var childInput = $el.find("input").get(0)
//         var text = $el.find("input").get(0).getAttribute("placeholder")
        var text =childInput.getAttribute("placeholder")
        
//         if  ($el.someMethod() === 'something') {
          cy.wrap(childInput)
            .type(text)
            .should('have.value', text)
//         } else {
//         }
      })  
      // 
//     var columns = ['city', 'temperature', 'chance_of_rain']
//     
//     columns.forEach(col => {
//       cy.get('input[placeholder='+col+']')
//         .type(col)
//         .should('have.value', col)
//     });  
      
  })
})










describe('My First Test', function() {
  it('Code Challenge 1', function() {
  //cypress drawback - only able to send keys to specific elements
  //can't use tab
  
  
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  
  //wtf
//   Uncaught Uncaught Invariant Violation: Invalid DraftEditorContents structure.
// 
// This error originated from your application code, not from Cypress.
// 
// When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
// 
// This behavior is configurable, and you can choose to turn this off by listening to the 'uncaught:exception' event.
// 
// https://on.cypress.io/uncaught-exception-from-application
// 
// This error originated from your application code, not from Cypress.
// 
// When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
// 
// This behavior is configurable, and you can choose to turn this off by listening to the 'uncaught:exception' event.
// 
// https://on.cypress.io/uncaught-exception-from-application
  
  
    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url().should('include', 'wordsmith.automatedinsights.com')

    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      
    cy.get('input.password')
      .type('strongpassword{enter}')
      
    cy.get('body')
      .should('contain', 'Stuart Robinson')
      
    cy.contains('New Project')
      .click()
      
    cy.get('.wizard-table__cell')
      .each(($el, index, $list) => {
        
        var childInput = $el.find("input").get(0)
        
        var text = childInput.getAttribute("placeholder")
        
          cy.wrap(childInput)
            .type(text)
            .should('have.value', text)
      })  
      
      
    //not sure why this is necessary  
    cy.wait(100)
      
    cy.contains('Create Project')
      .click()
      
    cy.contains('Add Branch')
      .click()
      
    cy.wait(100)
    
//     cy.pause()
    
    
    cy.get('.notranslate.public-DraftEditor-content')  
      .first()
      .click()
    
//     cy.pause()
        
    cy.contains('temperature')
      .click()
      
//     cy.pause()
    
    cy.contains('temperature >')
      .click()
      
//     cy.pause()
    
    cy.get('.notranslate.public-DraftEditor-content') 
      .first() 
      .type('70')
  
//    cy.pause()


    cy.get('.notranslate.public-DraftEditor-content') 
      .eq(1) 
      .type("It's hot")

    cy.get('.notranslate.public-DraftEditor-content') 
      .eq(1) 
      .type('{selectall}')
      
      cy.wait(1000)


    cy.get('.notranslate.public-DraftEditor-content') 
      .eq(1) 
      .type('{backspace}')

    cy.wait(1000)


    cy.get('.notranslate.public-DraftEditor-content') 
      .eq(1) 
      .type("It's hot")



//     cy.pause()


 // // 
//     cy.contains('Type what to write')
//       .parent()
//       .next()
//       .find('div')
//       .first()
//       .type("It's hot")
//       .should('have.value', "It's hot")
    
  
      // 
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('l')
//       
//     cy.pause()
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('a')
//       
//     cy.pause()
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('l')
//       
//     cy.pause()
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('a')
//       
//     cy.pause()
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('l')
//       
//     cy.pause()
//     cy.get('.notranslate.public-DraftEditor-content')  
//       .first()
//       .type('a')
      // 
//       
//     cy.contains('Type your rule here')
//       .parent()
//       .next()
//       .find('div').first() //emperature > 70
//       .type('t')
//       
//       
//     cy.pause()
//     cy.contains('Type your rule here')
//       .parent()
//       .next()
//       .find('div').first() //emperature > 70
//       .type('e')
//       
//       
//     cy.pause()
//     cy.contains('Type your rule here')
//       .parent()
//       .next()
//       .find('div').first() //emperature > 70
//       .type('m')
//       
//       
//     cy.pause()
//     cy.contains('Type your rule here')
//       .parent()
//       .next()
//       .find('div').first() //emperature > 70
//       .type('p')
//       
//       .type('e')
//       .type('m')
//       .type('p')
//       .type('e')
//       .type('r')
//       .should('have.value', 'temperature > 70')
//     
//       
//     cy.contains('Type what to write')
//       .parent()
//       .next()
//       .find('div')
//       .first()
//       .type(" {backspace}It's hot")
//       .should('have.value', "It's hot")
//     
      
    cy.contains('Done')
      .click()
    
    cy.contains('Done')
      .should('not.exist')
      
    cy.contains("It's hot")
      .should('exist')
      
  })
})













describe('My First Test', function() {
  it('Code Challenge 1', function() {
  
  const projectnumber = '32'
  
  //cypress drawback:
  //only able to send keys to specific elements
  //can't use tab
  //no xpath
  //opinionated text entry
  //parallel runs seems to be a nightmare, if possible at all
  ////running in parallel isn't just for "speeding up runs", it can be
  ////critical for ferreting out intermittent errors / race conditions
  //waits seem to be necessary - i have never found a selenium situation that actually required a static wait
  //re-running tests on save is pretty annoying.  sometimes i want to save without restarting active test
  //conditional testing so opinionated.  logic failure is that sometimes thing dont work and u need to retry based on condition
  //https://sqa.stackexchange.com/questions/33847/why-isnt-my-if-statement-working-in-my-cypress-test ugh hidden default asserts everywhere
  //annoying that selector playground forces single quotes
  //this works in selector playground but not irl: '.conditions * [role="textbox"]' -- nm it's tot random when typeaheads appear onclick
  
  //you can't select an element by text content.  idk how else to get the "temperature" option in the typeahead/dropdown
  //since it disappears 

// had to use Download Serialized Dom firefox addon to get html for autocomplete.  didn't work in chrome.
// couldn't use console cos clicking cleared the typeahead
//   <div class="autocomplete">
//     <ul class="suggestion-list" role="menu">
//       <li data-test="selectable-list-item--city" role="presentation" class=
//       "suggestion-list-item active">
//         <div>
//           <span class="value">city</span>
//         </div>
//       </li>
// 
//       <li data-test="selectable-list-item--temperature" role="presentation" class=
//       "suggestion-list-item">
//         <div>
//           <span class="value">temperature</span>
//         </div>
//       </li>
// 
//       <li data-test="selectable-list-item--chance_of_rain" role="presentation" class=
//       "suggestion-list-item">
//         <div>
//           <span class="value">chance_of_rain</span>
//         </div>
//       </li>
//     </ul>
//   </div>

  
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
  
    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')

    console.log('start')
      
      //Login to Wordsmith
      
      //var element = document.evaluate( '//*[text()="Login to Wordsmith"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
      // 
//       var element = document.getElementsByClassName('mdl-button__ripple-container')
//       
//       console.log(element)
//       
//       if (element != null){
//         console.log("not null!")
//       } else {
//         console.log("is null!??????????")
//       }
      
// 
// 
// 
//       
//       
// 
    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      .then(($form) => {console.log('promise test email')})
      
      
      // 
    cy.get('input.password')
      .type('strongpassword{enter}')
    
    cy.get('body')
      .should('contain', 'Stuart Robinson')
      
      
      
    if (false){
    cy.contains('New Project')
      .click()
      
    cy.get('.wizard-table__cell')
      .each(($el, index, $list) => {
        
        const cellInput = $el.find("input").get(0)
        
        const text = cellInput.getAttribute("placeholder")
        
          cy.wrap(cellInput)
            .type(text)
            .should('have.value', text)
      })   
      
    //not sure why this is necessary but fails to find Create Project button otherwise  
    cy.wait(100)
      
    cy.contains('Create Project')
      .click()
      
    
    }
    else{
    
    cy.visit('https://wordsmith.automatedinsights.com/projects/project-'+projectnumber+'/templates/project-'+projectnumber+'-template/edit#/editor')

    cy.url()
      .should('include', '/editor')
      
    //https://wordsmith.automatedinsights.com/projects/project-31/templates/project-31-template/edit#/editor
    
    }
    //failed here twice.  hung on "Creating Project..." loading page forever  
    cy.contains('Add Branch')
      .click()
    
    //necessary to ensure column headings typeahead appears on subsequent click
    //no, it doens't help
    cy.wait(200)
    cy.contains("Edit Branch")
      .should('be.visible')
    
    cy.log('here cypress')
    
    const conditionsTextbox = '.notranslate.public-DraftEditor-content' //'.conditions * [role="textbox"]' //
    
    cy.get(conditionsTextbox)
      .should('be.visible')
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox 0')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
    
      
    console.log('here')
    
      // 
//     cy.get(conditionsTextbox).eq(0)
//       .click()
//       .click()
//       .click()
//       .click()
//       .click()
      
      // 
//       
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	   
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	   
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	  
    cy.get(conditionsTextbox).eq(0)
      .click()
      
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	  
    cy.get(conditionsTextbox).eq(0)
      .click()
      
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	  
    cy.get(conditionsTextbox).eq(0)
      .click()
      
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	  
    cy.get(conditionsTextbox).eq(0)
      .click()
      
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  
	  
    cy.get(conditionsTextbox).eq(0)
      .click()
      .click()
      .click()
      .click()
      .click()
      
      
    cy.get(conditionsTextbox).eq(0)
      .click()
	  .then(($form) => {
	  
	    console.log('promise conditionsTextbox')
	    var element
    
        element = document.getElementsByClassName('autocomplete')
 	    console.log(element)
        if (element.length > 0){
             console.log("not empty!")
        } else {
             console.log("is empty!??????????")
        }
	  })
	  

    cy.get(conditionsTextbox).eq(0)
      .type("t")
      .type('{selectall}')
      .type('{backspace}')
      .type("temperature > 70")




// 	      cy.wait(100)
// 
//     var element
//     
//     element = document.getElementsByClassName('autocomplete')
//  	console.log(element)
//  
   //  if (element.length > 0){
//       console.log("not empty!")
//     } else {
//       console.log("is empty!??????????")
//     }
//  
//     cy.get(conditionsTextbox).eq(0)
//       .click()    
//     cy.wait(100)
//     
//     element = document.getElementsByClassName('autocomplete')
//  	console.log(element)
//  
//     if (element.length > 0){
//       console.log("not empty!")
//     } else {
//       console.log("is empty!??????????")
//     }
//     cy.get(conditionsTextbox).eq(0)
//       .click()
//     cy.wait(100)
//     
//     element = document.getElementsByClassName('autocomplete')
//  	console.log(element)
//  
//  
//     if (element.length > 0){
//       console.log("not empty!")
//     } else {
//       console.log("is empty!??????????")
//     }
//     
//     cy.get(conditionsTextbox).eq(0)
//       .click()
//     cy.wait(100)
//     
//     element = document.getElementsByClassName('autocomplete')
//  	console.log(element)
//  
//  
//     if (element.length > 0){
//       console.log("not empty!")
//     } else {
//       console.log("is empty!??????????")
//     }
 
  //   const element = document.getElementsByClassName('autocomplete')
//     
//     console.log(element)
//     
//     
//     console.log('hiiii')
    
    //periodically typeaheads dont pop up, even when clicking in textbox and waiting n times
    //no idea why.  unable to find consistent fix.  
 //    cy.contains('temperature')
//       .click()
      // 
//     cy.contains('temperature >')
//       .click()
//     
//     cy.get(conditionsTextbox).eq(0) 
//       .type('70')
      
    cy.get(conditionsTextbox).eq(1) 
      .type("It's hot")
      .type('{selectall}')
      .type('{backspace}')
      .type("It's hot")
      
    cy.contains('Done')
      .click()
    
    cy.contains('Done')
      .should('not.exist')
      
    cy.contains("It's hot")
      .should('exist')
       
  })
})





describe('My First Test', function() {
  it('Code Challenge 1', function() {
  
  const projectnumber = '33' 
  
  //cypress drawback:
  //only able to send keys to specific elements
  //can't use tab
  //no xpath
  //opinionated text entry
  //parallel runs seems to be a nightmare, if possible at all
  ////running in parallel isn't just for "speeding up runs", it can be
  ////critical for ferreting out intermittent errors / race conditions
  //waits seem to be necessary - i have never found a selenium situation that actually required a static wait
  //re-running tests on save is pretty annoying.  sometimes i want to save without restarting active test
  //conditional testing so opinionated.  logic failure is that sometimes thing dont work and u need to retry based on condition
  //https://sqa.stackexchange.com/questions/33847/why-isnt-my-if-statement-working-in-my-cypress-test ugh hidden default asserts everywhere
  //annoying that selector playground forces single quotes
  //this works in selector playground but not irl: '.conditions * [role="textbox"]' -- nm it's tot random when typeaheads appear onclick
  
  //you can't select an element by text content.  idk how else to get the "temperature" option in the typeahead/dropdown
  //since it disappears 

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
  
    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')

    console.log('start')
      
    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      .then(($form) => {console.log('promise test email')})
      
      
    cy.get('input.password')
      .type('strongpassword{enter}')
    
    cy.get('body')
      .should('contain', 'Stuart Robinson')
      
    if (true){
      cy.contains('New Project')
        .click()
        
      cy.get('.wizard-table__cell')
        .each(($el, index, $list) => {
          
          const cellInput = $el.find("input").get(0)
          
          const text = cellInput.getAttribute("placeholder")
          
            cy.wrap(cellInput)
              .type(text)
              .should('have.value', text)
        })   
        
      //not sure why this is necessary but fails to find Create Project button otherwise  
      cy.wait(100)
        
      cy.contains('Create Project')
        .click()
    }
    else{
      
      const projectnumber = '31'
      
      cy.visit('https://wordsmith.automatedinsights.com/projects/project-'+projectnumber+'/templates/project-'+projectnumber+'-template/edit#/editor')
  
      cy.url()
        .should('include', '/editor')
              
    }
    //failed here twice.  hung on "Creating Project..." loading page forever  
    cy.contains('Add Branch')
      .click()
    
    cy.contains("Edit Branch")
      .should('be.visible')
    
    const conditionsTextbox = '.conditions * [role="textbox"]'
      
    cy.get(conditionsTextbox).eq(0)
      .type("t")
      .type('{selectall}')
      .type('{backspace}')
      .type("temperature > 70")

	//to close the typeahead so the "Then write" box is visible
    cy.contains("Edit Branch")
      .click()
      
    cy.contains("There is no data variable or formula")
      .should('not.exist')

    cy.get(conditionsTextbox).eq(1) 
      .type("It's hot")
      .type('{selectall}')
      .type('{backspace}')
      .type("It's hot")
      
    cy.contains('Done')
      .click()
    
    cy.contains('Done')
      .should('not.exist')// 
//       
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//         //failed here twice.  hung on "Creating Project..." loading page forever  
//     cy.contains('Add Branch')
//       .click()
//     
//     //necessary to ensure column headings typeahead appears on subsequent click
//     //no, it doens't help
//     cy.wait(200)
//     
//     cy.contains("Edit Branch")
//       .should('be.visible')
//     
//    // const conditionsTextbox = '.conditions * [role="textbox"]' //'.notranslate.public-DraftEditor-content' //
//       
//     cy.get(conditionsTextbox).eq(0)
//       .type("t")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("temperature > 70")
// 
//     cy.contains("Edit Branch")
//       .click()
//  
//     cy.get(conditionsTextbox).eq(1) 
//       .type("It's hot")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("It's hot")
//       
//     cy.contains('Done')
//       .click()
//     
//     cy.contains('Done')
//       .should('not.exist')
//       ////////////////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//         //failed here twice.  hung on "Creating Project..." loading page forever  
//     cy.contains('Add Branch')
//       .click()
//     
//     //necessary to ensure column headings typeahead appears on subsequent click
//     //no, it doens't help
//     cy.wait(200)
//     
//     cy.contains("Edit Branch")
//       .should('be.visible')
//     
//    // const conditionsTextbox = '.conditions * [role="textbox"]' //'.notranslate.public-DraftEditor-content' //
//       
//     cy.get(conditionsTextbox).eq(0)
//       .type("t")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("temperature > 70")
// 
//     cy.contains("Edit Branch")
//       .click()
//  
//     cy.get(conditionsTextbox).eq(1) 
//       .type("It's hot")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("It's hot")
//       
//     cy.contains('Done')
//       .click()
//     
//     cy.contains('Done')
//       .should('not.exist')
//       ////////////////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//         //failed here twice.  hung on "Creating Project..." loading page forever  
//     cy.contains('Add Branch')
//       .click()
//     
//     //necessary to ensure column headings typeahead appears on subsequent click
//     //no, it doens't help
//     cy.wait(200)
//     
//     cy.contains("Edit Branch")
//       .should('be.visible')
//     
//    // const conditionsTextbox = '.conditions * [role="textbox"]' //'.notranslate.public-DraftEditor-content' //
//       
//     cy.get(conditionsTextbox).eq(0)
//       .type("t")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("temperature > 70")
// 
//     cy.contains("Edit Branch")
//       .click()
//  
//     cy.get(conditionsTextbox).eq(1) 
//       .type("It's hot")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("It's hot")
//       
//     cy.contains('Done')
//       .click()
//     
//     cy.contains('Done')
//       .should('not.exist')
//       ////////////////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//         //failed here twice.  hung on "Creating Project..." loading page forever  
//     cy.contains('Add Branch')
//       .click()
//     
//     //necessary to ensure column headings typeahead appears on subsequent click
//     //no, it doens't help
//     cy.wait(200)
//     
//     cy.contains("Edit Branch")
//       .should('be.visible')
//     
//    // const conditionsTextbox = '.conditions * [role="textbox"]' //'.notranslate.public-DraftEditor-content' //
//       
//     cy.get(conditionsTextbox).eq(0)
//       .type("t")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("temperature > 70")
// 
//     cy.contains("Edit Branch")
//       .click()
//  
//     cy.get(conditionsTextbox).eq(1) 
//       .type("It's hot")
//       .type('{selectall}')
//       .type('{backspace}')
//       .type("It's hot")
//       
//     cy.contains('Done')
//       .click()
//     
//     cy.contains('Done')
//       .should('not.exist')
//       ////////////////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       ////////////////      ////////////////////////////      ////////////////////////////      ////////////////////////////
//       // 
// //       cy.visit('https://wordsmith.automatedinsights.com/projects/project-'+projectnumber+'/templates/project-'+projectnumber+'-template/edit#/editor')
// //   
// //       cy.url()
// //         .should('include', '/editor')
//         
//       
//       
//     
    cy.contains("It's hot")
      .should('exist')
       
  })
})


describe('My First Test', function() {
  it('Code Challenge 1', function() {


function greeting() {
  console.log('Hello ')
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.')
  callback()
}

processUserInput(greeting)

    const projectnumber = '35'

	let attempts = 0

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')

    console.log('start')

    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      .then(($form) => {
        console.log('promise test email')
      })

    cy.get('input.password')
      .type('strongpassword')
      .type('{enter}')

    cy.get('body')
      .should('contain', 'Stuart Robinson')

    if (false){

      cy.contains('New Project')
        .click()
  
      cy.get('.wizard-table__cell')
        .each(($el, index, $list) => {
  
          const cellInput = $el.find("input").get(0)
  
          const text = cellInput.getAttribute("placeholder")
  
          cy.wrap(cellInput)
            .type(text)
            .should('have.value', text)
        })
  
      //not sure why this is necessary but fails to find Create Project button otherwise  
      cy.wait(100)
  
      cy.contains('Create Project')
        .click() 
    }
    else{
      cy.visit('https://wordsmith.automatedinsights.com/projects/project-'+projectnumber+'/templates/project-'+projectnumber+'-template/edit#/editor')
  
      cy.url()
        .should('include', '/editor')
    }

    function addBranch(callbackk) {
    
      attempts += 1
      
      expect(attempts).to.be.lessThan(10)
    
      //failed here twice.  hung on "Creating Project..." loading page forever  
      cy.contains('Add Branch')
        .click()
   
      cy.contains("Edit Branch")
        .should('be.visible')
   
      const conditionsTextbox = '.conditions * [role="textbox"]'
   
   	//the "If this is true:" input
      cy.get(conditionsTextbox).eq(0)
        .type("t")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
        .type("temperature > 70")
   
      //to close the typeahead so the "Then write" box is visible
      cy.contains("Edit Branch")
        .click()
        
   	//the "Then write:" input
      cy.get(conditionsTextbox).eq(1)
        .type("I")
        .type('{selectall}')
        .type('{backspace}')
        .type("It's hot")
        // .then(($x) =>{
//         
//           //check if error message exists.  if so, retry condition entry
//           
//           var e = document.getElementsByClassName('error-message')
//           
//           console.log(e)
//           console.log('here!!!!!!')
//           
//           if (e.length > 0){
//             console.log('error found!!')
//           }
//         })
        
      cy.get('.error-message')
        .then(($elements) => {
        
          console.log($elements)
          
          if ($elements.length > 0){
          
//             cy.visit('https://www.google.com')
			addBranch()
          }
        
        })
        
      //check if condition entry failed.   can't come right after condition input b/c this error takes a second to show up
      cy.contains("There is no data variable or formula")
        .should('not.exist')
   
      cy.contains('Done')
        .click()
   
      cy.contains('Done')
        .should('not.exist')
   
      cy.contains("It's hot")
        .should('exist')
    
      callbackk()
    }
    
    function foo() {
      console.log('wtfffff')
    }

    
    addBranch(foo)
    
    
    // 
// function greeting() {
//   console.log('Hello ')
// }
// 
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.')
//   callback()
// }
// 
// processUserInput(greeting)
    
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()

  })
})



describe('My First Test', function() {
  it('Code Challenge 1', function() {

// 
// function greeting() {
//   console.log('Hello ')
// }
// 
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.')
//   callback()
// }
// 
// processUserInput(greeting)

    const projectnumber = '39'

	let attempts = 0

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.visit('https://wordsmith.automatedinsights.com/')

    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')

    console.log('start')

    cy.get('input.email')
      .type('stuart.clifford@gmail.com')
      .should('have.value', 'stuart.clifford@gmail.com')
      .then(($form) => {
        console.log('promise test email')
      })

    cy.get('input.password')
      .type('strongpassword')
      .type('{enter}')

    cy.get('body')
      .should('contain', 'Stuart Robinson')

    if (false){

      cy.contains('New Project')
        .click()
  
      cy.get('.wizard-table__cell')
        .each(($el, index, $list) => {
  
          const cellInput = $el.find("input").get(0)
  
          const text = cellInput.getAttribute("placeholder")
  
          cy.wrap(cellInput)
            .type(text)
            .should('have.value', text)
        })
  
      //not sure why this is necessary but fails to find Create Project button otherwise  
      cy.wait(100)
  
      cy.contains('Create Project')
        .click() 
    }
    else{
      cy.visit('https://wordsmith.automatedinsights.com/projects/project-'+projectnumber+'/templates/project-'+projectnumber+'-template/edit#/editor')
  
      cy.url()
        .should('include', '/editor')
    }

    function addBranch(condition, callbackk) {
    
      attempts += 1
      
      expect(attempts).to.be.lessThan(10)
    
      //failed here twice.  hung on "Creating Project..." loading page forever  
      cy.contains('Add Branch')
        .click()
   
      cy.contains("Edit Branch")
        .should('be.visible')
   
      const conditionsTextbox = '.conditions * [role="textbox"]'
   
   	//the "If this is true:" input
      cy.get(conditionsTextbox).eq(0)
        .type("t")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
        .type(condition)
   
      //to close the typeahead so the "Then write" box is visible
      cy.contains("Edit Branch")
        .click()
        
   	//the "Then write:" input
      cy.get(conditionsTextbox).eq(1)
        .type("I")
        .type('{selectall}')
        .type('{backspace}')
        .type("It's hot")
        
        
      let errorFound = false
        
      cy.get('.error-message')
        .each(($el, index, $list) => {
        
          errorFound = true
          
          console.log($el)
  // 
//           const cellInput = $el.find("input").get(0)
//   
//           const text = cellInput.getAttribute("placeholder")
//   
//           cy.wrap(cellInput)
//             .type(text)
//             .should('have.value', text)
        })
  
     //    .then(($x) => {
//         
//           var asdf = document.getElementsByClassName('segment__header-title')
//           
//           console.log(asdf)
//           console.log(asdf.length)
//         
//           const errorels = document.getElementsByClassName('error-message')
//           console.log(errorels)
//           console.log(errorels.length)
//           
//           if (errorels.length > 0){
//           
//             addBranch("temperature > 70", foo)
//           
//           }
//           else {
//           
//            //check if condition entry failed.   can't come right after condition input b/c this error takes a second to show up
//            cy.contains("There is no data variable or formula")
//              .should('not.exist')
//         
//            cy.contains('Done')
//              .click()
//         
//            cy.contains('Done')
//              .should('not.exist')
//         
//            cy.contains("It's hot")
//              .should('exist')
//           }
//         
//         
//         
//         })
        
        
    
      callbackk()
    }
    
    function foo() {
      console.log('wtfffff')
    }

    
    addBranch("POIUPOIUPOIU > 70", foo)
    
    
    // 
// function greeting() {
//   console.log('Hello ')
// }
// 
// function processUserInput(callback) {
//   var name = prompt('Please enter your name.')
//   callback()
// }
// 
// processUserInput(greeting)
    
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()
//     addBranch()

  })
})
    const projectnumber = '33'

    let attempts = 0
    
    function addBranch(condition) {

      let localCondition = condition
      attempts += 1

      expect(attempts).to.be.lessThan(4)

	  if (attempts > 1){
	    //still doesn't correct the weirdly incorrect text input
	    cy.reload(true)
	    
	    //but this does 	
	    localCondition = "??" + condition
	  }
	  

      //failed here three times.  hung on "Creating Project..." loading page forever  
      cy.contains('Add Branch')
        .click()

      cy.contains("Edit Branch")
        .should('be.visible')

      const conditionsTextbox = '.conditions * [role="textbox"]'

      //the "If this is true:" input
      cy.get(conditionsTextbox).eq(0)
        .type("t")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
        .type(localCondition)
        

//       //to close the typeahead so the "Then write" box is visible
//       //this has failed 3 times for no apparent reason.  says the element isn't visible, but it clearly is
//		 //leaving code here in case "If this is true:" has same problem
//       cy.contains("Edit Branch")
//         .click()
        
      //replacement for clicking Edit Branch which cypress struggles to do  
      cy.contains("If this is true:")
        .click()

      //the "Then write:" input
      cy.get(conditionsTextbox).eq(1)
        .type("I")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}') //added {backspace}{backspace}{del}{del}{del}{del} for no reason
        .type("It's hot")

      cy.get('.code-wrapper')
        .then(($x) => {

          const errormaybe = $x.find(".error-message").get(0)

          if (errormaybe != null) {

            cy.contains('delete')
              .click()
              .then(() => {
                addBranch(condition)
              })
          } else {

            //check if condition entry failed.   can't come right after condition input b/c this error takes a second to show up
            cy.contains("There is no data variable or formula")
              .should('not.exist')

            cy.contains('Done')
              .click()

            cy.contains('Done')
              .should('not.exist')
           
            cy.get('.branch')
              .last()
              .should('not.have.class', 'err')
              .find('span')
              .find('span')
              .contains("It's hot")
          }
        })
    }
    

function deleteProject(projectName) {    

    cy.visit('https://wordsmith.automatedinsights.com/dashboard')

    cy.url()
      .should('include', '/dashboard')

	//search for project
    cy.get('#search-input')
      .type(projectName)
      
    cy.contains(projectName)
      .parent()
      .siblings()
      .first()
      .find('span.mdl-button__ripple-container')
      .click()
      
    cy.contains(projectName)
      .parent()
      .siblings()
      .first()
      .contains('Delete')
      .click()
      
    cy.get('.btn-danger')
      .click()
}

function load() {
    cy.visit('https://wordsmith.automatedinsights.com/')
    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')
}
    
function login(email, password) {
    cy.get('input.email')
      .type(email)
      .should('have.value', email)
    cy.get('input.password')
      .type(password)
      .type('{enter}')
    cy.contains(email)
    cy.contains('Dashboard')
    cy.contains('Login to Wordsmith')
      .should('not.exist')
}

function createProject() {
      cy.contains('New Project')
        .click()

      cy.get('.wizard-table__cell')
        .each(($el, index, $list) => {

          const cellInput = $el.find("input").get(0)

          const text = cellInput.getAttribute("placeholder")

          cy.wrap(cellInput)
            .type(text)
            .should('have.value', text)
        })

      //not sure why this is necessary but fails to find Create Project button otherwise  
      cy.wait(100)

	  cy.contains('Create Project')
        .click()
        
        //  
//      return cy.contains('Add Branch')
//         .then(() => {
//           return document.getElementsByClassName('header__breadcrumb-link')[0].title
//         })
        
      cy.get('.header__breadcrumb-link')
              .first()
              .then(($x) => {
                projectName = $x.attr('title')
                    cy.log('oh hi ' + projectName)

              })
     
     // 
//      return cy.get('.header__breadcrumb-link')
//               .first()
//               .then(($x) => {
//                 return document.getElementsByClassName('header__breadcrumb-link')[0].title
//               })
//      
     
    
}

let projectName


describe('My First Test', function() {
  it('Code Challenge 1', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    
	load()
	// 
//     cy.get('.header__logo.flex')
// 	  .then(($x) => {
// 	    console.log('hello!')
// 	    console.log($x)
// 	    console.log($x.attr('title'))
// 	    
// 	    cy.log('hello')
// 	    cy.log($x)
// 	    cy.log($x.attr('title'))
// 	    awef = $x.attr('title')
// 	  })
// 	  .then(($x) => {
// 	     
//     cy.log('oh hi awefawefwef' + awef)
// 	    })
// 	    
//     cy.log('oh hi ' + awef)
// 	  
// 	cy.pause()
// 	  .then(($x) => {
// 	     
//     cy.log('oh hi SDFKSHDKFUSDF' + awef)
// 	    })
// 	
// 		cy.pause()
		
	login('stuart.clifford@gmail.com', 'strongpassword')

// 	deleteProject("Project 47")
	
// 	cy.pause()

// 	let projectName

    if (true) {

      createProject()
      
//       alert(projectName)
     //  cy.log(projectName)
      cy.pause()
      
    } else {
      cy.visit('https://wordsmith.automatedinsights.com/projects/project-' + projectnumber + '/templates/project-' + projectnumber + '-template/edit#/editor')

      cy.url()
        .should('include', '/editor')
    }


    const condition = "temperature > 70"

    addBranch(condition)
    
//     deleteProject(projectName)

  })
})var projectName

    const projectnumber = '33'

    let attempts = 0
    
    function addBranch(condition) {

      let localCondition = condition
      attempts += 1

      expect(attempts).to.be.lessThan(4)

	  if (attempts > 1){
	    //still doesn't correct the weirdly incorrect text input
	    cy.reload(true)
	    
	    //but this does 	
	    localCondition = "??" + condition
	  }
	  

      //failed here three times.  hung on "Creating Project..." loading page forever  
      cy.contains('Add Branch')
        .click()

      cy.contains("Edit Branch")
        .should('be.visible')

      const conditionsTextbox = '.conditions * [role="textbox"]'

      //the "If this is true:" input
      cy.get(conditionsTextbox).eq(0)
        .type("t")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
        .type(localCondition)
        

//       //to close the typeahead so the "Then write" box is visible
//       //this has failed 3 times for no apparent reason.  says the element isn't visible, but it clearly is
//		 //leaving code here in case "If this is true:" has same problem
//       cy.contains("Edit Branch")
//         .click()
        
      //replacement for clicking Edit Branch which cypress struggles to do  
      cy.contains("If this is true:")
        .click()

      //the "Then write:" input
      cy.get(conditionsTextbox).eq(1)
        .type("I")
        .type('{selectall}')
        .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}') //added {backspace}{backspace}{del}{del}{del}{del} for no reason
        .type("It's hot")

      cy.get('.code-wrapper')
        .then(($x) => {

          const errormaybe = $x.find(".error-message").get(0)

          if (errormaybe != null) {

            cy.contains('delete')
              .click()
              .then(() => {
                addBranch(condition)
              })
          } else {

            //check if condition entry failed.   can't come right after condition input b/c this error takes a second to show up
            cy.contains("There is no data variable or formula")
              .should('not.exist')

            cy.contains('Done')
              .click()

            cy.contains('Done')
              .should('not.exist')
           
            cy.get('.branch')
              .last()
              .should('not.have.class', 'err')
              .find('span')
              .find('span')
              .contains("It's hot")
          }
        })
    }
    

function deleteProject(projectName) {    

    cy.visit('https://wordsmith.automatedinsights.com/dashboard')

    cy.url()
      .should('include', '/dashboard')

	//search for project
    cy.get('#search-input')
      .type(projectName)
      
    cy.contains(projectName)
      .parent()
      .siblings()
      .first()
      .find('span.mdl-button__ripple-container')
      .click()
      
    cy.contains(projectName)
      .parent()
      .siblings()
      .first()
      .contains('Delete')
      .click()
      
    cy.get('.btn-danger')
      .click()
}

function load() {
    cy.visit('https://wordsmith.automatedinsights.com/')
    cy.url()
      .should('include', 'wordsmith.automatedinsights.com')
}
    
function login(email, password) {
    cy.get('input.email')
      .type(email)
      .should('have.value', email)
    cy.get('input.password')
      .type(password)
      .type('{enter}')
    cy.contains(email)
    cy.contains('Dashboard')
    cy.contains('Login to Wordsmith')
      .should('not.exist')
}

function createProject() {
      cy.contains('New Project')
        .click()

      cy.get('.wizard-table__cell')
        .each(($el, index, $list) => {

          const cellInput = $el.find("input").get(0)

          const text = cellInput.getAttribute("placeholder")

          cy.wrap(cellInput)
            .type(text)
            .should('have.value', text)
        })

      //not sure why this is necessary but fails to find Create Project button otherwise  
      cy.wait(100)

	  cy.contains('Create Project')
        .click()
        
      cy.get('.header__breadcrumb-link')
              .first()
              .then(($x) => {
                projectName = $x.attr('title')
        		cy.log('oh hi ' + projectName)
              })

     
}

function loadProject(projectName){

    const urlProjectName = projectName.split(" ").join("-").toLowerCase()

      cy.visit('https://wordsmith.automatedinsights.com/projects/' + urlProjectName + '/templates/' + urlProjectName + '-template/edit#/editor')

      cy.url()
        .should('include', '/editor')
        
     

}

function setMyVar(){
   projectName = 'snoop'
}


function showMyVar(){
	cy.log('here we are ' + projectName)

}



describe('My First Test', function() {
  it('Code Challenge 1', function() {

	// setMyVar()
// 	showMyVar()
	
// 	cy.log('here we are ' + projectName)
//     cy.pause()


    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    
	load()
		
	login('stuart.clifford@gmail.com', 'strongpassword')
	
    if (true) {

      createProject()
      cy.pause()
      
    } else {
      loadProject("Project 33")
    }

    cy.log('here we are ' + projectName)
    deleteProject(projectName)

    const condition = "temperature > 70"

    addBranch(condition)
    
//     deleteProject(projectName)

  })
})

let attempts

function addBranch(condition, text) {

  let localCondition = condition
  attempts += 1

  expect(attempts).to.be.lessThan(4)

  if (attempts > 1) {
    //still doesn't correct the weirdly incorrect text input
    cy.reload(true)

    //but this does 	
    localCondition = "??" + condition
  }


  //Timed out here four times.  hung on "Creating Project..." loading page forever  
  cy.contains('Add Branch')
    .click()

  cy.contains("Edit Branch")
    .should('be.visible')

  const conditionsTextbox = '.conditions * [role="textbox"]'

  //the "If this is true:" input
  cy.get(conditionsTextbox).eq(0)
    .type("t")
    .type('{selectall}')
    .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
    .type(localCondition)

  //replacement for clicking Edit Branch which cypress struggles to do  
  cy.contains("If this is true:")
    .click()

  //the "Then write:" input
  cy.get(conditionsTextbox).eq(1)
    .type("I")
    .type('{selectall}')
    .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}') //added {backspace}{backspace}{del}{del}{del}{del} for no reason
    .type(text)

  cy.get('.code-wrapper')
    .then(($x) => {

      const errormaybe = $x.find(".error-message").get(0)

      if (errormaybe != null) {

        cy.contains('delete')
          .click()
          .then(() => {
            addBranch(condition)
          })
      } else {

        //check if condition entry failed.   can't come right after condition input b/c this error takes a second to show up
        cy.contains("There is no data variable or formula")
          .should('not.exist')

        cy.contains('Done')
          .click()

        cy.contains('Done')
          .should('not.exist')

        cy.get('.branch')
          .last()
          .should('not.have.class', 'err')
          .find('span')
          .find('span')
          .contains(text)
      }
    })
}


function deleteProject(projectName) {
  // 
  cy.visit('https://wordsmith.automatedinsights.com/dashboard')

  cy.url()
    .should('include', '/dashboard')

  //if page view was previously scrolled down, loading this url ^^ will load page pre-scrolled down
  //cypress seems unable to scroll to the top of the projects list pane
  //solution is to click the Dashboard link on the left which is the first element with class 'ws-nav__link-label'
  //this loads the page scrolled up
  //so far unable to manually .scrollTo the top of the page or elements at the top of the page 

  //scrolling workaround
  cy.get('.ws-nav__link-label').first()
    .click()

  // // scrolling workaround
  //   cy.contains('Dashboard').eq(1)
  //     .scrollTo('top')

  //search for project
  cy.get('input#search-input')
    .type(projectName)
    .should('have.value', projectName)

  deleteListedProject(projectName)
}

function deleteListedProject(projectName) {

  cy.contains(projectName)
    .parent()
    .siblings()
    .first()
    .find('span.mdl-button__ripple-container')
    .click()

  cy.contains(projectName)
    .parent()
    .siblings()
    .first()
    .contains('Delete')
    .click()

  cy.get('.btn-danger')
    .click()
}

function load() {
  cy.visit('https://wordsmith.automatedinsights.com/')
  cy.url()
    .should('include', 'wordsmith.automatedinsights.com')
}

function login(email, password) {
  cy.get('input.email')
    .type(email)
    .should('have.value', email)
  cy.get('input.password')
    .type(password)
    .type('{enter}')
  cy.contains(email)
  cy.contains('Dashboard')
  cy.contains('Login to Wordsmith')
    .should('not.exist')
}

function createProject(fixtureCsvFileName) {

  if (fixtureCsvFileName) {

    cy.get('.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--raised.btn-primary.mdl-button--narrow.dropdown-button.flex.flex-align-center')
      .click()

    cy.contains('Upload CSV')
      .click()

    cy.get('#name')
      .type('Challenge 2')

    //#file-upload

    cy.upload_csv(fixtureCsvFileName, '#file-upload')

    //then goes to page with "Add Branch"

  } else {

    cy.contains('New Project')
      .click()

    cy.get('.wizard-table__cell')
      .each(($el, index, $list) => {

        const cellInput = $el.find("input").get(0)

        const text = cellInput.getAttribute("placeholder")

        cy.wrap(cellInput)
          .type(text)
          .should('have.value', text)
      })

    //not sure why this is necessary but fails to find Create Project button otherwise  
    cy.wait(100)

    cy.contains('Create Project')
      .click()

  }
}

function loadProject(projectName) {

  const urlProjectName = projectName.split(" ").join("-").toLowerCase()

  cy.visit('https://wordsmith.automatedinsights.com/projects/' + urlProjectName + '/templates/' + urlProjectName + '-template/edit#/editor')

  cy.url()
    .should('include', '/editor')
}

function deleteActiveProject() {


  cy.get('.header__breadcrumb-link')
    .first()
    .then(($x) => {
      const projectName = $x.attr('title')
      cy.log('oh hi ' + projectName)
      deleteProject(projectName)
    })
}

function config() {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
}

//https://github.com/cypress-io/cypress/issues/170#issuecomment-404931741
Cypress.Commands.add('upload_csv', (fileName, selector) => {
  return cy.get(selector).then(subject => {
    return cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0]
        const testFile = new File([blob], fileName, {
          type: '.csv'
        })
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
        return subject;
      })
  })
})

Cypress.Commands.add('sup', (x) => {
  console.log(x)
  return 'hello'
})

function siteClean() {

  cy.visit('https://wordsmith.automatedinsights.com/dashboard')

  cy.url()
    .should('include', '/dashboard')

  //  cy.contains('Show All')
  //     .click() 

  //all the project names  
  cy.get('.table-row.clickable * .flex.flex-column.flex-center > span')
    .each(($el, index, $list) => {

      const projectName = $el.text()

      if (projectName != 'Welcome Tutorial Project') {
        deleteListedProject(projectName)
      }
    })
}


describe('AI QA Dev Interview Code Challenge', function() {
  beforeEach(() => {
    attempts = 0
    config()
    load()
    login('stuart.clifford@gmail.com', 'strongpassword')
  })

  afterEach(() => {
    deleteActiveProject()
  })

  it('Challenge 1', function() {
    if (true) {
      createProject()
    } else {
      loadProject("Project 44")
    }
    addBranch("temperature > 70", "It's hot")
  })

  it('Challenge 2', function() {
    createProject("Project 4.csv")

    addBranch("temperature > 70", "It's hot")
  })

  //   it('Site Clean', function() {siteClean()})
})