Things to test for:

- sign up and dispatches
- sign up and dispatches

**DECIDE ON THE DISPATCHES - what would make the most sense? I think using easy peasy**

- I think we should start with the hardest thing, which is user auth{" "}
- Then I think we should think about using immer, because that's more used right - use whatever makes the most sense dude{" "}

{" "} Links [{" "} Tags Library](https://www.npmjs.com/package/react-tag-input) [{" "} Easy Peasy](https://devlinduldulao.pro/easy-peasy-in-a-nutshell-with-react-easy-peasy-code-sample/) [{" "} Super deep nesting](https://github.com/ctrlplusb/easy-peasy/issues/695) [{" "} Easy Peasy Dispatch](https://github.com/hayawata3626/easy-peasy-sample/blob/master/src/model.js) [tests](https://github.com/crissdev/reduxtagram-easy-peasy/blob/7166e542b0929b658cd32175b4a2e7d116466090/src/__tests__/comments-model.spec.ts) [easy peasy example](https://github.com/FabrizioFornari/SPM2020-BPU/blob/6794e4e98aff0cb939d4a503c36d26853de40961/frontend/src/redux/models/usersModel.js) tests tests tests

- **User (id, firstName, middleName, lastName, email, password, google_id, facebook_id, spotify_id, company, location, about, google_cal)**

  - POST User (signup)

    - input firstName
    - input lastName
    - input email
    - input password
    - input termsAndServices (checkbox)
    - button googleSignup
    - button facebookSignup
    - button createAccount

    /api/signup  
     Terms and Services google google facebook create account

  - POST User (login)

    - input email
    - input password
    - input rememberMe (checkbox)
    - button googleLogin
    - button facebookLogin
    - button login

    /api/signup  
     {" "} Remember Me  
    login google facebook

  - PUT Password

    - input email
    - button sendResetLink

    /api/getPasswordLink  
     send reset link

  - PUT Password

    - input newPassword
    - button resetPassword

    /api/changePassword  
     reset password

  - PUT Settings (put)

    - input firstName
    - input middleName
    - input lastName
    - input company
    - input location
    - input about
    - input (dropdown) calendar
    - button syncCalendar
    - button saveChanges
    - button discardChanges

    /api/updateuser  
     sync google calendar sync apple calendar save changes discard changes

  - PUT Settings

    - button changePassword
    - radio allowNotifications
    - radio allowCookies
    - radio allowAds
    - button deleteAccount
    - button saveChanges
    - button discardChanges

    /api/settings  
    changePassword

    allow notifications {" "} don't allow notifications

    allow cookies {" "} don't allow cookies

    allow ads {" "} don't allow ads

    save save cancel

  - POST logout

    - button logout

    {" "}
    /api/logout  
    logout

- [**Tags (id, name)**](https://blog.logrocket.com/building-a-tag-input-field-component-for-react/)
- **Projects (id, name, purpose, startDate, deadline, priority, tagsArray, friendsArray, image)**

  - Get Ongoing Projects

    - progress (get all current tasks that are associated with this project, divide by completed)
    - priority

    {" "}
    /api/currentProjects  
    projects

  - Get Project Tasks

    - deadline
    - progress
    - Task name, organized by date

    {" "}
    /api/projects/:projectId/tasks  
    get project tasks

  - Get Current Project (for each page) 
    /api/projects/:projectId  
    get project getUsersProjects
  - Post Project (Modal)

    - input name
    - input purpose
    - input startDate
    - input deadline
    - input (dropdown) priority
    - input tags
    - input friendEmailOne
    - input friendEmailTwo
    - button saveProject
    - button cancel

    {" "}
    POST /api/projects  
     priority high medium low save cancel

  - [Get All Projects (filter)](https://codesandbox.io/s/fstoj?file=/src/AddProduct.js)

    - input projectFilter
    - deadline
    - priority
    - tags
    - id (link to the project page)

    /api/projects  
     get all projects

- **Tasks (id, index, name, completed, priority, duration, deadline, startDate, deadline, projectId, userId, tagsArray, notes, image){" "}**

  - Get Today's Tasks

    - name, completed

    /api/users/:userId/tasks  
    get todays tasks getAllTasks

  - [Complete Task](https://codesandbox.io/s/jpdd2?file=/src/model.js)

    - input checkbox

    PUT /api/tasks/:id  
     Done with task

  - Post Task

    - input name
    - input project (get all current projects)
    - input priority
    - input deadline
    - input tags
    - input notes
    - input image
    - button saveTask
    - button cancel

    /api/  
     priority high priority high medium low saveTask cancel

  - Get Task to Time (Put Request - Edit Task)

    - get name, priority, project name, duration
    - button beginTask
    - button saveTime

    /api/tasks/:id  
     beginTask saveTime

  - Get Tasks (Filter)

    - button completedTasks
    - button currentTasks

    /api/tasks  
    get completed tasks get current tasks

  - Organize Tasks

    - drag and drop changes index

    /api/tasks  
    reset

  - Delete Task

    - button deleteTask

    /api/tasks/:id  
    delete task

  - Edit Task
    /api/tasks/:id  
    {" "} priority high priority high medium low saveTask cancel

- **Event (id, name, date, time, link, guests, information, status (going,notgoing),tagsArray)**

  - Get Events
    /api/users/:id/events  
    get user events get user events
  - Get event (for modal)
    /api/events/:id  
    get event
  - Post Event

    - input name
    - input (dropdown) status (priority)
    - input time
    - input date
    - input tags
    - input link
    - input guests
    - input information

    /api/events  
    {" "} priority high medium low saveEvent cancel

- **Feedback (id, rating, user_id)**

  - stars 5 buttons
    /api/feedback  
    {" "} 1 star 2 star 3 star 4 star 5 star submit feedback
  - button submitFeedback

  /api/  
   reset

# Just put all event handlers here and play here
