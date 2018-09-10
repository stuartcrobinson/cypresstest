/** Number of times that the test attempts to successfully enter a branch condition. */
let attempts

/**
 * Adds a branch with the given condition and text to a project, assuming the project template is loaded in the page.
 * 
 * @param {string} condition 
 * @param {string} text 
 */
function addBranch(condition, text) {

  let localCondition = condition
  attempts += 1

  expect(attempts).to.be.lessThan(4)

  /* There seems to be only one way that branch condition-entering fails: when the first two letters of the 
  *  input text get removed from the input.  This behavior is random but consistent per test -- retrying in the same test
  *  (even after reloading the browser) doesn't shake it.  Thus, if the test fails to successfully enter a condition, 
  *  then it prepends two dummy characters to be sacrificed during input.  */
  if (attempts > 1) {
    localCondition = "??" + condition
  }

  //Timed out here four times.  Hung on "Creating Project..." loading page forever. 
  cy.contains('Add Branch')
    .click()

  //Confirms widget has loaded.
  cy.contains("Edit Branch")
    .should('be.visible')

  /** Used to target inputs for both condition and resulant text.  */
  const conditionsTextbox = '.conditions * [role="textbox"]'

  //Enters the condition into the "If this is true:" input.
  cy.get(conditionsTextbox).eq(0)
    .type("t")
    .type('{selectall}')
    .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}')
    .type(localCondition)

  //Clicks away to close the condition autocomplete popup.
  cy.contains("If this is true:")
    .click()

  //Enters the resultant text into the "Then write:" input.
  cy.get(conditionsTextbox).eq(1)
    .type("I")
    .type('{selectall}')
    .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}') //extra deletion keys are probably unnecessary 
    .type(text)

  //Conditionally retries to enter the new branch condition if the .code-wrapper element contains an error message.
  //Has to wait until the "Then write" text has been entered because the error message takes a bit to pop up.
  cy.get('.code-wrapper')
    .then(($x) => {

      const errormaybe = $x.find(".error-message").get(0)

      if (errormaybe != null) {

        //Deletes the current branch attempt before starting over.
        cy.contains('delete')
          .click()
          .then(() => {
            addBranch(condition)
          })
      } else {

        //Double-checks that this error message really isn't there.
        cy.contains("There is no data variable or formula")
          .should('not.exist')

        cy.contains('Done')
          .click()

        //Confirms the Add Branch widget has closed.
        cy.contains('Done')
          .should('not.exist')

        //Confirms that the new branch was successfully added.
        cy.get('.branch')
          .last()
          .should('not.have.class', 'err')
          .find('span')
          .find('span')
          .contains(text)
      }
    })
}


/**
 * Adds a branch with the given condition and text to a project, assuming the project template is loaded in the page.
 * 
 * @param {string} condition 
 * @param {string} text 
 */
function addBranchByClicking(text) {

  //Timed out here four times.  Hung on "Creating Project..." loading page forever. 
  cy.contains('Add Branch')
    .click()

  //Confirms widget has loaded.
  cy.contains("Edit Branch")
    .should('be.visible')

  /** Used to target inputs for both condition and resultant text.  */
  const conditionsTextbox = '.conditions * [role="textbox"]'

  //Enters the condition into the "If this is true:" input.
  cy.get(conditionsTextbox).eq(0)
    .type("temp")

  cy.contains("temperature")
    .click()


  cy.contains("temperature >")
    .click()

  cy.contains("temperature > 84")
    .click()



  //Clicks away to close the condition autocomplete popup.
  cy.contains("If this is true:")
    .click()

  //Enters the resultant text into the "Then write:" input.
  cy.get(conditionsTextbox).eq(1)
    .type("I")
    .type('{selectall}')
    .type('{backspace}{backspace}{backspace}{del}{del}{del}{del}') //extra deletion keys are probably unnecessary 
    .type(text)

  //Conditionally retries to enter the new branch condition if the .code-wrapper element contains an error message.
  //Has to wait until the "Then write" text has been entered because the error message takes a bit to pop up.
  cy.get('.code-wrapper')
    .then(($x) => {

      const errormaybe = $x.find(".error-message").get(0)

      if (errormaybe != null) {

        //Deletes the current branch attempt before starting over.
        cy.contains('delete')
          .click()
          .then(() => {
            addBranch(condition)
          })
      } else {

        //Double-checks that this error message really isn't there.
        cy.contains("There is no data variable or formula")
          .should('not.exist')

        cy.contains('Done')
          .click()

        //Confirms the Add Branch widget has closed.
        cy.contains('Done')
          .should('not.exist')

        //Confirms that the new branch was successfully added.
        cy.get('.branch')
          .last()
          .should('not.have.class', 'err')
          .find('span')
          .find('span')
          .contains(text)
      }
    })
}



/**
 * Deletes the given project from any starting location, assuming the user is logged in. 
 * 
 * @param {string} projectName 
 */
function deleteProject(projectName) {

  cy.visit('https://wordsmith.automatedinsights.com/dashboard')

  cy.url()
    .should('include', '/dashboard')

  /* Scrolling problem: If the page view was previously scrolled down, loading the dashboard url will 
  *  load page pre-scrolled-down.  Cypress seems unable to scroll to the top of the projects list pane on command.
  *  The solution I found is to click the Dashboard link on the left which is the first element with class 
  *  'ws-nav__link-label'.  This loads the page scrolled up.  I was unable to manually .scrollTo the top of 
  *  the page or to elements at the top of the page. */

  //Scrolling workaround.
  cy.get('.ws-nav__link-label').first()
    .click()

  //For some reason it periodically failing to type into the Dashboard page #search-input without this step,
  //although it might have failed once with it also. 
  cy.reload(true)

  //Searches for project.
  cy.get('input#search-input')
    .type(projectName)
    .should('have.value', projectName)

  deleteListedProject(projectName)
}

/**
 * Deletes the given project, assuming it's already listed in the Dashboard. 
 * 
 * @param {string} projectName 
 */
function deleteListedProject(projectName) {

  //Clicks the project line caret.
  cy.contains(projectName)
    .parent()
    .siblings()
    .first()
    .find('span.mdl-button__ripple-container')
    .click()

  //Clicks Delete.
  cy.contains(projectName)
    .parent()
    .siblings()
    .first()
    .contains('Delete')
    .click()

  //Confirms deletion.
  cy.get('.btn-danger')
    .click()
}

function sortDashboardProjectsDecreasing() {

  cy.get('.sort-column > .flex.flex-align-center')
    .first()
    .click()
  cy.get('.sort-column > .flex.flex-align-center')
    .first()
    .click()
}

/**
 *  Determine the name of the last(?) listed project.  then search for it and delete it.  
 * 
 *  the point of this is to show how complicated cypress code has to be to accomplish simple tasks.
 * 
 * but it does work.
 */
function searchAndDelete() {

  cy.get('.sort-column > .flex.flex-align-center')
    .first()
    .click()
  cy.get('.sort-column > .flex.flex-align-center')
    .first()
    .click()

  cy.get('.flex.flex-column.flex-center > span').last().invoke('text').then((text1) => {

    cy.get('input[name="searchInput"]')
      .type(text1)

    //now, have to get all elements matching:
    //.flex.flex-column.flex-center > span
    //and then find the one with text equal to text1
    //show how stupid this is.  instead of being able to search for an element by text on the page
    //can't use "contains" cos lots of projects match "Project 4" (ie Project 40)

    cy.get('.flex.flex-column.flex-center > span')
      .each(($el, index, $list) => {

        const elementText = $el.context.innerHTML

        if (elementText == text1) {
          const caret = $el.parent().parent().find('.dropdown.margin-left-small')

          cy.wrap(caret)
            .click()

          cy.contains('Delete')
            .click()

          cy.get('.btn-danger')
            .click()
        }
      })
  })
}

/** Loads the Wordsmith landing page. */
function load() {
  cy.visit('https://wordsmith.automatedinsights.com/')
  cy.url()
    .should('include', 'wordsmith.automatedinsights.com')
}

/** Logs in to pre-loaded Wordsmith landing page. */
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

/**
 * Creates a new project.  If the fixtureCsvFileName parameter is present, it creates a project by uploading this given file. 
 * otherwise, it creates a new project using the cities table. 
 * 
 * @param {string} fixtureCsvFileName 
 */
function createProject(fixtureCsvFileName) {

  //Creates a new project using the cities data entry table.

  cy.contains('New Project')
    .click()

  //Enters the placeholder text into each cell in the table.
  cy.get('.wizard-table__cell')
    .each(($el, index, $list) => {

      const cellInput = $el.find("input").get(0)

      const text = cellInput.getAttribute("placeholder")

      cy.wrap(cellInput)
        .type(text)
        .should('have.value', text)
    })

  //This is necessary for the test to successfully find and click the Create Project button.
  // cy.wait(100)

  cy.contains('Create Project')
    .click()
}

/**
 * Creates a new project.  If the fixtureCsvFileName parameter is present, it creates a project by uploading this given file. 
 * otherwise, it creates a new project using the cities table. 
 * 
 * @param {string} fixtureCsvFileName 
 */
function createProjectWait() {

  //Creates a new project using the cities data entry table.

  cy.contains('New Project')
    .click()

  //Enters the placeholder text into each cell in the table.
  cy.get('.wizard-table__cell')
    .each(($el, index, $list) => {

      const cellInput = $el.find("input").get(0)

      const text = cellInput.getAttribute("placeholder")

      cy.wrap(cellInput)
        .type(text)
        .should('have.value', text)
    })

  //This is necessary for the test to successfully find and click the Create Project button.
  cy.wait(100)

  cy.contains('Create Project')
    .click()
}

/**
 * Loads the project with the given name.  This method was created to cut down on development 
 * time to avoid waiting to make a new project every time I wanted to try a new approach to get the 
 * Add Branch functionality to work.
 * 
 * @param {string} projectName 
 */
function loadProject(projectName) {

  const urlProjectName = projectName.split(" ").join("-").toLowerCase()

  //Loads the project template directly.
  cy.visit('https://wordsmith.automatedinsights.com/projects/' + urlProjectName + '/templates/' + urlProjectName + '-template/edit#/editor')

  cy.url()
    .should('include', '/editor')
}

/** Deletes the project currently loaded the browser. */
function deleteActiveProject() {

  //Reads the page header to determine current project name, then deletes that project.
  cy.get('.header__breadcrumb-link')
    .first()
    .then(($x) => {
      const projectName = $x.attr('title')
      deleteProject(projectName)
    })
}

function config() {
  Cypress.on('uncaught:exception', (err, runnable) => {
    //Returning false here prevents Cypress from failing the test.
    return false
  })
}


/** 
 * Custom cypress command to input a csv file into a web element, modified from example 
 * at https://github.com/cypress-io/cypress/issues/170#issuecomment-404931741.
 */
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

/** Deletes all projects from the Wordsmith account. */
function siteClean() {

  cy.visit('https://wordsmith.automatedinsights.com/dashboard')

  cy.url()
    .should('include', '/dashboard')

  //Gets the names of all the projects listed in the Dashboard and then deletes each by name.  
  cy.get('.table-row.clickable * .flex.flex-column.flex-center > span')
    .each(($el, index, $list) => {

      const projectName = $el.text()

      //Can't delete the Welcome Tutorial Project.
      if (projectName != 'Welcome Tutorial Project') {
        deleteListedProject(projectName)
      }
    })
}

function loadAi() {
  config()
  load()
  login('stuart.clifford@gmail.com', 'strongpassword')
}

describe('AI QA Dev Interview Code Challenge - Cypress', function () {


  /**
   * CypressError: Timed out retrying: cy.click() failed because this element is not visible:

<a>Delete</a>

This element '<a>' is not visible because it has an effective width and height of: '0 x 0' pixels.

--->  this fails when the project to delete is at the top of the page, behind the blue top banner.  cypress uses
its voodoo magic to click an unclickable element which leads to confusion because the delete button is there but not clickable for some reason.
   */
  // it('should delete all projects', function() {
  // loadAi()
  //   siteClean()
  // })

  // /** fails without waiting 100 ms for the Create Project button (even tho it's right there) */
  // it('should create project with default wizard', function() {
  // loadAi()
  //   createProject()
  // })


  //works
  // it('should search and delete a project. this works', function () {
  //   loadAi()
  //   searchAndDelete()
  // })



  // //works now
  // it('should create project with file upload', function () {
  //   loadAi()
  //   createProjectWait()
  //   addBranchByClicking("It's hot")
  // })

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //old - delete this stuff
  // it('should create project with default wizard', function() {
  //   createProject()
  //   addBranch("temperature > 70", "It's hot")
  // })

  // it('should create project with file upload', function() {
  //   createProject("Project 4.csv")
  //   addBranch("temperature > 70", "It's hot")
  // })

  /** 
   *  Just deletes all the projects after each test to keep the account clean.  This wouldn't work in a live/professional 
   *  testing setup, of course, because then one test could ruin another, if running simultaneously.  I'm doing it this 
   *  way, here, because I wasn't able to get Cypress to consistently successfully search for a project in the 
   *  Dashboard.  A DELETE request to https://wordsmith.automatedinsights.com/projects/{project name} could be the optimal 
   *  approach. */
  // afterEach(() => {
  // siteClean()
  // })


})