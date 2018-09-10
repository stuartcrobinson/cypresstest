let attempts

function addBranch(condition, text) {

  let localCondition = condition
  attempts += 1

  expect(attempts).to.be.lessThan(4)

  if (attempts > 1) {
    //still doesn't correct the weirdly incorrect text input
//     cy.reload(true)

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


  //for some reason it wasn't typing into the subsequent #search-input without this step
  //wait no actually it's random ... sometimes it just fails to type ...?
  /*
  CypressError: You attempted to make a chai-jQuery assertion on an object that is neither a DOM object or a jQuery object.

The chai-jQuery assertion you used was:

  > value

The invalid subject you asserted on was:

  > undefined

To use chai-jQuery assertions your subject must be valid.

This can sometimes happen if a previous assertion changed the subject.

Because this error occurred during a 'after each' hook we are skipping the remaining tests in the current suite: 'AI QA Dev Interview Code Ch...'
*/
  cy.reload(true)

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
    cy.reload(true)
  })
  // 
  // afterEach(() => {
  //   siteClean()
  // })

  it('Challenge 1', function() {
//     deleteProject("Project 2")
  
    createProject()
    addBranch("temperature > 70", "It's hot")
  })

  it('Challenge 2', function() {
    createProject("Project 4.csv")
    addBranch("temperature > 70", "It's hot")
  })

  //   it('Site Clean', function() {siteClean()})
})