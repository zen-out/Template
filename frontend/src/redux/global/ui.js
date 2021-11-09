const UI = {
  firstName: {
    element:
      "<input type='text' name='firstName' placeholder='FirstName' id='firstName' value={firstName} onChange={handleFirstNameOnChange}/>",
    state: "const [firstName, setFirstName] = useState('')",
    getFunc:
      "const handleFirstNameOnChange = (event) => {setFirstName(firstName)};",
    filter: "labelText",
    params: [{ name: "firstName" }],
  },
  lastName: {
    element:
      "<input type='text' name='lastName' placeholder='LastName' id='lastName' value={lastName} onChange={handleLastNameOnChange}/>",
    state: "const [lastName, setLastName] = useState('')",
    getFunc:
      "const handleLastNameOnChange = (event) => {setLastName(lastName)};",
    filter: "labelText",
    params: [{ name: "lastName" }],
  },
  signupEmail: {
    element:
      "<input type='text' name='signupEmail' placeholder='SignupEmail' id='signupEmail' value={signupEmail} onChange={handleSignupEmailOnChange}/>",
    state:
      "const [signupEmail, setSignupEmail] = useState('')",
    getFunc:
      "const handleSignupEmailOnChange = (event) => {setSignupEmail(signupEmail)};",
    filter: "labelText",
    params: [{ name: "signupEmail" }],
  },
  signupPassword: {
    element:
      "<input type='text' name='signupPassword' placeholder='SignupPassword' id='signupPassword' value={signupPassword} onChange={handleSignupPasswordOnChange}/>",
    state:
      "const [signupPassword, setSignupPassword] = useState('')",
    getFunc:
      "const handleSignupPasswordOnChange = (event) => {setSignupPassword(signupPassword)};",
    filter: "labelText",
    params: [{ name: "signupPassword" }],
  },
  termsAndServices: {
    getFunc: "const handle",
    filter: "text",
    params: [{ name: "termsAndServices" }],
  },
  googleSignup: {
    element:
      "<ButtonComponent value={googleSignup} name='googleSignup' id='googleSignup' onClick={handleGoogleSignupOnClick}/>GoogleSignup</ButtonComponent>",
    getFunc:
      "const handleGoogleSignupOnClick = () => {setGoogleSignup(googleSignup)})",
    filter: "role",
    params: ["button", { name: "googleSignup" }],
  },
  facebookSignup: {
    element:
      "<ButtonComponent value={facebookSignup} name='facebookSignup' id='facebookSignup' onClick={handleFacebookSignupOnClick}/>FacebookSignup</ButtonComponent>",
    getFunc:
      "const handleFacebookSignupOnClick = () => {setFacebookSignup(facebookSignup)})",
    filter: "role",
    params: ["button", { name: "facebookSignup" }],
  },
  createAccount: {
    element:
      "<ButtonComponent value={createAccount} name='createAccount' id='createAccount' onClick={handleCreateAccountOnClick}/>CreateAccount</ButtonComponent>",
    getFunc:
      "const handleCreateAccountOnClick = () => {setCreateAccount(createAccount)})",
    filter: "role",
    params: ["button", { name: "createAccount" }],
  },
  signupButton: {
    element:
      "<ButtonComponent value={signupButton} name='signupButton' id='signupButton' onClick={handleSignupButtonOnClick}/>SignupButton</ButtonComponent>",
    getFunc:
      "const handleSignupButtonOnClick = () => {setSignupButton(signupButton)})",
    filter: "role",
    params: ["button", { name: "signupButton" }],
  },
  loginEmail: {
    element:
      "<input type='text' name='loginEmail' placeholder='LoginEmail' id='loginEmail' value={loginEmail} onChange={handleLoginEmailOnChange}/>",
    state:
      "const [loginEmail, setLoginEmail] = useState('')",
    getFunc:
      "const handleLoginEmailOnChange = (event) => {setLoginEmail(loginEmail)};",
    filter: "labelText",
    params: [{ name: "loginEmail" }],
  },
  password: {
    element:
      "<input type='text' name='password' placeholder='Password' id='password' value={password} onChange={handlePasswordOnChange}/>",
    state: "const [password, setPassword] = useState('')",
    getFunc:
      "const handlePasswordOnChange = (event) => {setPassword(password)};",
    filter: "labelText",
    params: [{ name: "password" }],
  },
  rememberMe: {
    getFunc: "const handle",
    filter: "text",
    params: [{ name: "rememberMe" }],
  },
  googleLogin: {
    element:
      "<ButtonComponent value={googleLogin} name='googleLogin' id='googleLogin' onClick={handleGoogleLoginOnClick}/>GoogleLogin</ButtonComponent>",
    getFunc:
      "const handleGoogleLoginOnClick = () => {setGoogleLogin(googleLogin)})",
    filter: "role",
    params: ["button", { name: "googleLogin" }],
  },
  facebookLogin: {
    element:
      "<ButtonComponent value={facebookLogin} name='facebookLogin' id='facebookLogin' onClick={handleFacebookLoginOnClick}/>FacebookLogin</ButtonComponent>",
    getFunc:
      "const handleFacebookLoginOnClick = () => {setFacebookLogin(facebookLogin)})",
    filter: "role",
    params: ["button", { name: "facebookLogin" }],
  },
  loginButton: {
    element:
      "<ButtonComponent value={loginButton} name='loginButton' id='loginButton' onClick={handleLoginButtonOnClick}/>LoginButton</ButtonComponent>",
    getFunc:
      "const handleLoginButtonOnClick = () => {setLoginButton(loginButton)})",
    filter: "role",
    params: ["button", { name: "loginButton" }],
  },
  emailUpdate: {
    element:
      "<input type='text' name='emailUpdate' placeholder='EmailUpdate' id='emailUpdate' value={emailUpdate} onChange={handleEmailUpdateOnChange}/>",
    state:
      "const [emailUpdate, setEmailUpdate] = useState('')",
    getFunc:
      "const handleEmailUpdateOnChange = (event) => {setEmailUpdate(emailUpdate)};",
    filter: "labelText",
    params: [{ name: "emailUpdate" }],
  },
  sendResetLink: {
    element:
      "<ButtonComponent value={sendResetLink} name='sendResetLink' id='sendResetLink' onClick={handleSendResetLinkOnClick}/>SendResetLink</ButtonComponent>",
    getFunc:
      "const handleSendResetLinkOnClick = () => {setSendResetLink(sendResetLink)})",
    filter: "role",
    params: ["button", { name: "sendResetLink" }],
  },
  newPassword: {
    element:
      "<input type='text' name='newPassword' placeholder='NewPassword' id='newPassword' value={newPassword} onChange={handleNewPasswordOnChange}/>",
    state:
      "const [newPassword, setNewPassword] = useState('')",
    getFunc:
      "const handleNewPasswordOnChange = (event) => {setNewPassword(newPassword)};",
    filter: "labelText",
    params: [{ name: "newPassword" }],
  },
  confirmNewPassword: {
    element:
      "<input type='text' name='confirmNewPassword' placeholder='ConfirmNewPassword' id='confirmNewPassword' value={confirmNewPassword} onChange={handleConfirmNewPasswordOnChange}/>",
    state:
      "const [confirmNewPassword, setConfirmNewPassword] = useState('')",
    getFunc:
      "const handleConfirmNewPasswordOnChange = (event) => {setConfirmNewPassword(confirmNewPassword)};",
    filter: "labelText",
    params: [{ name: "confirmNewPassword" }],
  },
  resetPassword: {
    element:
      "<ButtonComponent value={resetPassword} name='resetPassword' id='resetPassword' onClick={handleResetPasswordOnClick}/>ResetPassword</ButtonComponent>",
    getFunc:
      "const handleResetPasswordOnClick = () => {setResetPassword(resetPassword)})",
    filter: "role",
    params: ["button", { name: "resetPassword" }],
  },
  editFirstName: {
    element:
      "<input type='text' name='editFirstName' placeholder='EditFirstName' id='editFirstName' value={editFirstName} onChange={handleEditFirstNameOnChange}/>",
    state:
      "const [editFirstName, setEditFirstName] = useState('')",
    getFunc:
      "const handleEditFirstNameOnChange = (event) => {setEditFirstName(editFirstName)};",
    filter: "labelText",
    params: [{ name: "editFirstName" }],
  },
  middleName: {
    element:
      "<input type='text' name='middleName' placeholder='MiddleName' id='middleName' value={middleName} onChange={handleMiddleNameOnChange}/>",
    state:
      "const [middleName, setMiddleName] = useState('')",
    getFunc:
      "const handleMiddleNameOnChange = (event) => {setMiddleName(middleName)};",
    filter: "labelText",
    params: [{ name: "middleName" }],
  },
  editLastName: {
    element:
      "<input type='text' name='editLastName' placeholder='EditLastName' id='editLastName' value={editLastName} onChange={handleEditLastNameOnChange}/>",
    state:
      "const [editLastName, setEditLastName] = useState('')",
    getFunc:
      "const handleEditLastNameOnChange = (event) => {setEditLastName(editLastName)};",
    filter: "labelText",
    params: [{ name: "editLastName" }],
  },
  company: {
    element:
      "<input type='text' name='company' placeholder='Company' id='company' value={company} onChange={handleCompanyOnChange}/>",
    state: "const [company, setCompany] = useState('')",
    getFunc:
      "const handleCompanyOnChange = (event) => {setCompany(company)};",
    filter: "labelText",
    params: [{ name: "company" }],
  },
  location: {
    element:
      "<input type='text' name='location' placeholder='Location' id='location' value={location} onChange={handleLocationOnChange}/>",
    state: "const [location, setLocation] = useState('')",
    getFunc:
      "const handleLocationOnChange = (event) => {setLocation(location)};",
    filter: "labelText",
    params: [{ name: "location" }],
  },
  about: {
    element:
      "<input type='text' name='about' placeholder='About' id='about' value={about} onChange={handleAboutOnChange}/>",
    state: "const [about, setAbout] = useState('')",
    getFunc:
      "const handleAboutOnChange = (event) => {setAbout(about)};",
    filter: "labelText",
    params: [{ name: "about" }],
  },
  syncGoogleCalendar: {
    element:
      "<ButtonComponent value={syncGoogleCalendar} name='syncGoogleCalendar' id='syncGoogleCalendar' onClick={handleSyncGoogleCalendarOnClick}/>SyncGoogleCalendar</ButtonComponent>",
    getFunc:
      "const handleSyncGoogleCalendarOnClick = () => {setSyncGoogleCalendar(syncGoogleCalendar)})",
    filter: "role",
    params: ["button", { name: "syncGoogleCalendar" }],
  },
  syncAppleCalendar: {
    element:
      "<ButtonComponent value={syncAppleCalendar} name='syncAppleCalendar' id='syncAppleCalendar' onClick={handleSyncAppleCalendarOnClick}/>SyncAppleCalendar</ButtonComponent>",
    getFunc:
      "const handleSyncAppleCalendarOnClick = () => {setSyncAppleCalendar(syncAppleCalendar)})",
    filter: "role",
    params: ["button", { name: "syncAppleCalendar" }],
  },
  saveProfileChange: {
    element:
      "<ButtonComponent value={saveProfileChange} name='saveProfileChange' id='saveProfileChange' onClick={handleSaveProfileChangeOnClick}/>SaveProfileChange</ButtonComponent>",
    getFunc:
      "const handleSaveProfileChangeOnClick = () => {setSaveProfileChange(saveProfileChange)})",
    filter: "role",
    params: ["button", { name: "saveProfileChange" }],
  },
  cancelProfileChange: {
    element:
      "<ButtonComponent value={cancelProfileChange} name='cancelProfileChange' id='cancelProfileChange' onClick={handleCancelProfileChangeOnClick}/>CancelProfileChange</ButtonComponent>",
    getFunc:
      "const handleCancelProfileChangeOnClick = () => {setCancelProfileChange(cancelProfileChange)})",
    filter: "role",
    params: ["button", { name: "cancelProfileChange" }],
  },
  settingsChangePassword: {
    element:
      "<ButtonComponent value={settingsChangePassword} name='settingsChangePassword' id='settingsChangePassword' onClick={handleSettingsChangePasswordOnClick}/>SettingsChangePassword</ButtonComponent>",
    getFunc:
      "const handleSettingsChangePasswordOnClick = () => {setSettingsChangePassword(settingsChangePassword)})",
    filter: "role",
    params: ["button", { name: "settingsChangePassword" }],
  },
  notifications: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={notifications} onChange={handleNotificationsOnChange} value: \'\'}/>',
    state:
      "const [notifications, setNotifications] = useState('')",
    getFunc:
      "const handleNotificationsOnChange = (event) => {setNotifications(notifications)};",
    filter: "text",
    params: [{ name: "notifications" }],
  },
  cookies: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={cookies} onChange={handleCookiesOnChange} value: \'\'}/>',
    state: "const [cookies, setCookies] = useState('')",
    getFunc:
      "const handleCookiesOnChange = (event) => {setCookies(cookies)};",
    filter: "text",
    params: [{ name: "cookies" }],
  },
  ads: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={ads} onChange={handleAdsOnChange} value: \'\'}/>',
    state: "const [ads, setAds] = useState('')",
    getFunc:
      "const handleAdsOnChange = (event) => {setAds(ads)};",
    filter: "text",
    params: [{ name: "ads" }],
  },
  deleteAccount: {
    element:
      "<ButtonComponent value={deleteAccount} name='deleteAccount' id='deleteAccount' onClick={handleDeleteAccountOnClick}/>DeleteAccount</ButtonComponent>",
    getFunc:
      "const handleDeleteAccountOnClick = () => {setDeleteAccount(deleteAccount)})",
    filter: "role",
    params: ["button", { name: "deleteAccount" }],
  },
  saveSettings: {
    element:
      "<ButtonComponent value={saveSettings} name='saveSettings' id='saveSettings' onClick={handleSaveSettingsOnClick}/>SaveSettings</ButtonComponent>",
    getFunc:
      "const handleSaveSettingsOnClick = () => {setSaveSettings(saveSettings)})",
    filter: "role",
    params: ["button", { name: "saveSettings" }],
  },
  cancelSettings: {
    element:
      "<ButtonComponent value={cancelSettings} name='cancelSettings' id='cancelSettings' onClick={handleCancelSettingsOnClick}/>CancelSettings</ButtonComponent>",
    getFunc:
      "const handleCancelSettingsOnClick = () => {setCancelSettings(cancelSettings)})",
    filter: "role",
    params: ["button", { name: "cancelSettings" }],
  },
  logout: {
    element:
      "<ButtonComponent value={logout} name='logout' id='logout' onClick={handleLogoutOnClick}/>Logout</ButtonComponent>",
    getFunc:
      "const handleLogoutOnClick = () => {setLogout(logout)})",
    filter: "role",
    params: ["button", { name: "logout" }],
  },
  getOngoingProjects: {
    element:
      "<ButtonComponent value={getOngoingProjects} name='getOngoingProjects' id='getOngoingProjects' onClick={handleGetOngoingProjectsOnClick}/>GetOngoingProjects</ButtonComponent>",
    getFunc:
      "const handleGetOngoingProjectsOnClick = () => {setGetOngoingProjects(getOngoingProjects)})",
    filter: "role",
    params: ["button", { name: "getOngoingProjects" }],
  },
  getProjectTasks: {
    element:
      "<ButtonComponent value={getProjectTasks} name='getProjectTasks' id='getProjectTasks' onClick={handleGetProjectTasksOnClick}/>GetProjectTasks</ButtonComponent>",
    getFunc:
      "const handleGetProjectTasksOnClick = () => {setGetProjectTasks(getProjectTasks)})",
    filter: "role",
    params: ["button", { name: "getProjectTasks" }],
  },
  getProject: {
    element:
      "<ButtonComponent value={getProject} name='getProject' id='getProject' onClick={handleGetProjectOnClick}/>GetProject</ButtonComponent>",
    getFunc:
      "const handleGetProjectOnClick = () => {setGetProject(getProject)})",
    filter: "role",
    params: ["button", { name: "getProject" }],
  },
  getUsersProjects: {
    element:
      "<ButtonComponent value={getUsersProjects} name='getUsersProjects' id='getUsersProjects' onClick={handleGetUsersProjectsOnClick}/>GetUsersProjects</ButtonComponent>",
    getFunc:
      "const handleGetUsersProjectsOnClick = () => {setGetUsersProjects(getUsersProjects)})",
    filter: "role",
    params: ["button", { name: "getUsersProjects" }],
  },
  getProjectProgress: {
    element:
      "<ButtonComponent value={getProjectProgress} name='getProjectProgress' id='getProjectProgress' onClick={handleGetProjectProgressOnClick}/>GetProjectProgress</ButtonComponent>",
    getFunc:
      "const handleGetProjectProgressOnClick = () => {setGetProjectProgress(getProjectProgress)})",
    filter: "role",
    params: ["button", { name: "getProjectProgress" }],
  },
  projectName: {
    element:
      "<input type='text' name='projectName' placeholder='ProjectName' id='projectName' value={projectName} onChange={handleProjectNameOnChange}/>",
    state:
      "const [projectName, setProjectName] = useState('')",
    getFunc:
      "const handleProjectNameOnChange = (event) => {setProjectName(projectName)};",
    filter: "labelText",
    params: [{ name: "projectName" }],
  },
  purpose: {
    element:
      "<input type='text' name='purpose' placeholder='Purpose' id='purpose' value={purpose} onChange={handlePurposeOnChange}/>",
    state: "const [purpose, setPurpose] = useState('')",
    getFunc:
      "const handlePurposeOnChange = (event) => {setPurpose(purpose)};",
    filter: "labelText",
    params: [{ name: "purpose" }],
  },
  startDate: {
    element:
      "<input type='text' name='startDate' placeholder='StartDate' id='startDate' value={startDate} onChange={handleStartDateOnChange}/>",
    state: "const [startDate, setStartDate] = useState('')",
    getFunc:
      "const handleStartDateOnChange = (event) => {setStartDate(startDate)};",
    filter: "labelText",
    params: [{ name: "startDate" }],
  },
  projectDeadline: {
    element:
      "<input type='text' name='projectDeadline' placeholder='ProjectDeadline' id='projectDeadline' value={projectDeadline} onChange={handleProjectDeadlineOnChange}/>",
    state:
      "const [projectDeadline, setProjectDeadline] = useState('')",
    getFunc:
      "const handleProjectDeadlineOnChange = (event) => {setProjectDeadline(projectDeadline)};",
    filter: "labelText",
    params: [{ name: "projectDeadline" }],
  },
  projectPriority: {
    element:
      "<select name='projectPriority' id='projectPriority' value={projectPriority} onChange={handleProjectPriorityOnChange})/><option value=''>value</option><option value=''>value</option><option value=''>value</option></select>",
    getFunc:
      "const handleProjectPriorityOnChange = (event) => {setProjectPriority(projectPriority)};",
    filter: "text",
    params: [{ name: "projectPriority" }],
  },
  projectTags: {
    element:
      "<input type='text' name='projectTags' placeholder='ProjectTags' id='projectTags' value={projectTags} onChange={handleProjectTagsOnChange}/>",
    state:
      "const [projectTags, setProjectTags] = useState('')",
    getFunc:
      "const handleProjectTagsOnChange = (event) => {setProjectTags(projectTags)};",
    filter: "labelText",
    params: [{ name: "projectTags" }],
  },
  friendEmailOne: {
    element:
      "<input type='text' name='friendEmailOne' placeholder='FriendEmailOne' id='friendEmailOne' value={friendEmailOne} onChange={handleFriendEmailOneOnChange}/>",
    state:
      "const [friendEmailOne, setFriendEmailOne] = useState('')",
    getFunc:
      "const handleFriendEmailOneOnChange = (event) => {setFriendEmailOne(friendEmailOne)};",
    filter: "labelText",
    params: [{ name: "friendEmailOne" }],
  },
  friendEmailTwo: {
    element:
      "<input type='text' name='friendEmailTwo' placeholder='FriendEmailTwo' id='friendEmailTwo' value={friendEmailTwo} onChange={handleFriendEmailTwoOnChange}/>",
    state:
      "const [friendEmailTwo, setFriendEmailTwo] = useState('')",
    getFunc:
      "const handleFriendEmailTwoOnChange = (event) => {setFriendEmailTwo(friendEmailTwo)};",
    filter: "labelText",
    params: [{ name: "friendEmailTwo" }],
  },
  saveProject: {
    element:
      "<ButtonComponent value={saveProject} name='saveProject' id='saveProject' onClick={handleSaveProjectOnClick}/>SaveProject</ButtonComponent>",
    getFunc:
      "const handleSaveProjectOnClick = () => {setSaveProject(saveProject)})",
    filter: "role",
    params: ["button", { name: "saveProject" }],
  },
  discardChanges: {
    element:
      "<ButtonComponent value={discardChanges} name='discardChanges' id='discardChanges' onClick={handleDiscardChangesOnClick}/>DiscardChanges</ButtonComponent>",
    getFunc:
      "const handleDiscardChangesOnClick = () => {setDiscardChanges(discardChanges)})",
    filter: "role",
    params: ["button", { name: "discardChanges" }],
  },
  filterProjects: {
    element:
      "<input type='text' name='filterProjects' placeholder='FilterProjects' id='filterProjects' value={filterProjects} onChange={handleFilterProjectsOnChange}/>",
    state:
      "const [filterProjects, setFilterProjects] = useState('')",
    getFunc:
      "const handleFilterProjectsOnChange = (event) => {setFilterProjects(filterProjects)};",
    filter: "labelText",
    params: [{ name: "filterProjects" }],
  },
  getAllProjects: {
    element:
      "<ButtonComponent value={getAllProjects} name='getAllProjects' id='getAllProjects' onClick={handleGetAllProjectsOnClick}/>GetAllProjects</ButtonComponent>",
    getFunc:
      "const handleGetAllProjectsOnClick = () => {setGetAllProjects(getAllProjects)})",
    filter: "role",
    params: ["button", { name: "getAllProjects" }],
  },
  getTodaysTasks: {
    element:
      "<ButtonComponent value={getTodaysTasks} name='getTodaysTasks' id='getTodaysTasks' onClick={handleGetTodaysTasksOnClick}/>GetTodaysTasks</ButtonComponent>",
    getFunc:
      "const handleGetTodaysTasksOnClick = () => {setGetTodaysTasks(getTodaysTasks)})",
    filter: "role",
    params: ["button", { name: "getTodaysTasks" }],
  },
  getAllTasks: {
    element:
      "<ButtonComponent value={getAllTasks} name='getAllTasks' id='getAllTasks' onClick={handleGetAllTasksOnClick}/>GetAllTasks</ButtonComponent>",
    getFunc:
      "const handleGetAllTasksOnClick = () => {setGetAllTasks(getAllTasks)})",
    filter: "role",
    params: ["button", { name: "getAllTasks" }],
  },
  completedTask: {
    getFunc: "const handle",
    filter: "text",
    params: [{ name: "completedTask" }],
  },
  taskName: {
    element:
      "<input type='text' name='taskName' placeholder='TaskName' id='taskName' value={taskName} onChange={handleTaskNameOnChange}/>",
    state: "const [taskName, setTaskName] = useState('')",
    getFunc:
      "const handleTaskNameOnChange = (event) => {setTaskName(taskName)};",
    filter: "labelText",
    params: [{ name: "taskName" }],
  },
  projects: {
    element:
      "<select name='projects' id='projects' value={projects} onChange={handleProjectsOnChange})/><option value=''>value</option><option value=''>value</option><option value=''>value</option></select>",
    getFunc:
      "const handleProjectsOnChange = (event) => {setProjects(projects)};",
    filter: "text",
    params: [{ name: "projects" }],
  },
  taskPriority: {
    element:
      "<input type='text' name='taskPriority' placeholder='TaskPriority' id='taskPriority' value={taskPriority} onChange={handleTaskPriorityOnChange}/>",
    state:
      "const [taskPriority, setTaskPriority] = useState('')",
    getFunc:
      "const handleTaskPriorityOnChange = (event) => {setTaskPriority(taskPriority)};",
    filter: "labelText",
    params: [{ name: "taskPriority" }],
  },
  taskDeadline: {
    element:
      "<input type='text' name='taskDeadline' placeholder='TaskDeadline' id='taskDeadline' value={taskDeadline} onChange={handleTaskDeadlineOnChange}/>",
    state:
      "const [taskDeadline, setTaskDeadline] = useState('')",
    getFunc:
      "const handleTaskDeadlineOnChange = (event) => {setTaskDeadline(taskDeadline)};",
    filter: "labelText",
    params: [{ name: "taskDeadline" }],
  },
  taskTags: {
    element:
      "<input type='text' name='taskTags' placeholder='TaskTags' id='taskTags' value={taskTags} onChange={handleTaskTagsOnChange}/>",
    state: "const [taskTags, setTaskTags] = useState('')",
    getFunc:
      "const handleTaskTagsOnChange = (event) => {setTaskTags(taskTags)};",
    filter: "labelText",
    params: [{ name: "taskTags" }],
  },
  notes: {
    element:
      "<input type='text' name='notes' placeholder='Notes' id='notes' value={notes} onChange={handleNotesOnChange}/>",
    state: "const [notes, setNotes] = useState('')",
    getFunc:
      "const handleNotesOnChange = (event) => {setNotes(notes)};",
    filter: "labelText",
    params: [{ name: "notes" }],
  },
  image: {
    element:
      "<input type='text' name='image' placeholder='Image' id='image' value={image} onChange={handleImageOnChange}/>",
    state: "const [image, setImage] = useState('')",
    getFunc:
      "const handleImageOnChange = (event) => {setImage(image)};",
    filter: "labelText",
    params: [{ name: "image" }],
  },
  saveTask: {
    element:
      "<ButtonComponent value={saveTask} name='saveTask' id='saveTask' onClick={handleSaveTaskOnClick}/>SaveTask</ButtonComponent>",
    getFunc:
      "const handleSaveTaskOnClick = () => {setSaveTask(saveTask)})",
    filter: "role",
    params: ["button", { name: "saveTask" }],
  },
  cancelTask: {
    element:
      "<ButtonComponent value={cancelTask} name='cancelTask' id='cancelTask' onClick={handleCancelTaskOnClick}/>CancelTask</ButtonComponent>",
    getFunc:
      "const handleCancelTaskOnClick = () => {setCancelTask(cancelTask)})",
    filter: "role",
    params: ["button", { name: "cancelTask" }],
  },
  beginTask: {
    element:
      "<ButtonComponent value={beginTask} name='beginTask' id='beginTask' onClick={handleBeginTaskOnClick}/>BeginTask</ButtonComponent>",
    getFunc:
      "const handleBeginTaskOnClick = () => {setBeginTask(beginTask)})",
    filter: "role",
    params: ["button", { name: "beginTask" }],
  },
  saveTime: {
    element:
      "<ButtonComponent value={saveTime} name='saveTime' id='saveTime' onClick={handleSaveTimeOnClick}/>SaveTime</ButtonComponent>",
    getFunc:
      "const handleSaveTimeOnClick = () => {setSaveTime(saveTime)})",
    filter: "role",
    params: ["button", { name: "saveTime" }],
  },
  setMinutes: {
    element:
      "<input type='text' name='setMinutes' placeholder='SetMinutes' id='setMinutes' value={setMinutes} onChange={handleSetMinutesOnChange}/>",
    state:
      "const [setMinutes, setSetMinutes] = useState('')",
    getFunc:
      "const handleSetMinutesOnChange = (event) => {setSetMinutes(setMinutes)};",
    filter: "labelText",
    params: [{ name: "setMinutes" }],
  },
  getCompletedTasks: {
    element:
      "<ButtonComponent value={getCompletedTasks} name='getCompletedTasks' id='getCompletedTasks' onClick={handleGetCompletedTasksOnClick}/>GetCompletedTasks</ButtonComponent>",
    getFunc:
      "const handleGetCompletedTasksOnClick = () => {setGetCompletedTasks(getCompletedTasks)})",
    filter: "role",
    params: ["button", { name: "getCompletedTasks" }],
  },
  getCurrentTasks: {
    element:
      "<ButtonComponent value={getCurrentTasks} name='getCurrentTasks' id='getCurrentTasks' onClick={handleGetCurrentTasksOnClick}/>GetCurrentTasks</ButtonComponent>",
    getFunc:
      "const handleGetCurrentTasksOnClick = () => {setGetCurrentTasks(getCurrentTasks)})",
    filter: "role",
    params: ["button", { name: "getCurrentTasks" }],
  },
  and: {
    getFunc: "const handle",
    filter: "text",
    params: [{ name: "and" }],
  },
  deleteTask: {
    element:
      "<ButtonComponent value={deleteTask} name='deleteTask' id='deleteTask' onClick={handleDeleteTaskOnClick}/>DeleteTask</ButtonComponent>",
    getFunc:
      "const handleDeleteTaskOnClick = () => {setDeleteTask(deleteTask)})",
    filter: "role",
    params: ["button", { name: "deleteTask" }],
  },
  getUserEvents: {
    element:
      "<ButtonComponent value={getUserEvents} name='getUserEvents' id='getUserEvents' onClick={handleGetUserEventsOnClick}/>GetUserEvents</ButtonComponent>",
    getFunc:
      "const handleGetUserEventsOnClick = () => {setGetUserEvents(getUserEvents)})",
    filter: "role",
    params: ["button", { name: "getUserEvents" }],
  },
  getEvent: {
    element:
      "<ButtonComponent value={getEvent} name='getEvent' id='getEvent' onClick={handleGetEventOnClick}/>GetEvent</ButtonComponent>",
    getFunc:
      "const handleGetEventOnClick = () => {setGetEvent(getEvent)})",
    filter: "role",
    params: ["button", { name: "getEvent" }],
  },
  editEvent: {
    element:
      "<ButtonComponent value={editEvent} name='editEvent' id='editEvent' onClick={handleEditEventOnClick}/>EditEvent</ButtonComponent>",
    getFunc:
      "const handleEditEventOnClick = () => {setEditEvent(editEvent)})",
    filter: "role",
    params: ["button", { name: "editEvent" }],
  },
  name: {
    element:
      "<input type='text' name='name' placeholder='Name' id='name' value={name} onChange={handleNameOnChange}/>",
    state: "const [name, setName] = useState('')",
    getFunc:
      "const handleNameOnChange = (event) => {setName(name)};",
    filter: "labelText",
    params: [{ name: "name" }],
  },
  status: {
    element:
      "<select name='status' id='status' value={status} onChange={handleStatusOnChange})/><option value=''>value</option><option value=''>value</option><option value=''>value</option></select>",
    getFunc:
      "const handleStatusOnChange = (event) => {setStatus(status)};",
    filter: "text",
    params: [{ name: "status" }],
  },
  time: {
    element:
      "<input type='text' name='time' placeholder='Time' id='time' value={time} onChange={handleTimeOnChange}/>",
    state: "const [time, setTime] = useState('')",
    getFunc:
      "const handleTimeOnChange = (event) => {setTime(time)};",
    filter: "labelText",
    params: [{ name: "time" }],
  },
  date: {
    element:
      "<input type='text' name='date' placeholder='Date' id='date' value={date} onChange={handleDateOnChange}/>",
    state: "const [date, setDate] = useState('')",
    getFunc:
      "const handleDateOnChange = (event) => {setDate(date)};",
    filter: "labelText",
    params: [{ name: "date" }],
  },
  eventTags: {
    element:
      "<input type='text' name='eventTags' placeholder='EventTags' id='eventTags' value={eventTags} onChange={handleEventTagsOnChange}/>",
    state: "const [eventTags, setEventTags] = useState('')",
    getFunc:
      "const handleEventTagsOnChange = (event) => {setEventTags(eventTags)};",
    filter: "labelText",
    params: [{ name: "eventTags" }],
  },
  link: {
    element:
      "<input type='text' name='link' placeholder='Link' id='link' value={link} onChange={handleLinkOnChange}/>",
    state: "const [link, setLink] = useState('')",
    getFunc:
      "const handleLinkOnChange = (event) => {setLink(link)};",
    filter: "labelText",
    params: [{ name: "link" }],
  },
  guests: {
    element:
      "<input type='text' name='guests' placeholder='Guests' id='guests' value={guests} onChange={handleGuestsOnChange}/>",
    state: "const [guests, setGuests] = useState('')",
    getFunc:
      "const handleGuestsOnChange = (event) => {setGuests(guests)};",
    filter: "labelText",
    params: [{ name: "guests" }],
  },
  information: {
    element:
      "<input type='text' name='information' placeholder='Information' id='information' value={information} onChange={handleInformationOnChange}/>",
    state:
      "const [information, setInformation] = useState('')",
    getFunc:
      "const handleInformationOnChange = (event) => {setInformation(information)};",
    filter: "labelText",
    params: [{ name: "information" }],
  },
  saveEvent: {
    element:
      "<ButtonComponent value={saveEvent} name='saveEvent' id='saveEvent' onClick={handleSaveEventOnClick}/>SaveEvent</ButtonComponent>",
    getFunc:
      "const handleSaveEventOnClick = () => {setSaveEvent(saveEvent)})",
    filter: "role",
    params: ["button", { name: "saveEvent" }],
  },
  cancelEvent: {
    element:
      "<ButtonComponent value={cancelEvent} name='cancelEvent' id='cancelEvent' onClick={handleCancelEventOnClick}/>CancelEvent</ButtonComponent>",
    getFunc:
      "const handleCancelEventOnClick = () => {setCancelEvent(cancelEvent)})",
    filter: "role",
    params: ["button", { name: "cancelEvent" }],
  },
  star1: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={star1} onChange={handleStar1OnChange} value: \'\'}/>',
    state: "const [star1, setStar1] = useState('')",
    getFunc:
      "const handleStar1OnChange = (event) => {setStar1(star1)};",
    filter: "text",
    params: [{ name: "star1" }],
  },
  star2: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={star2} onChange={handleStar2OnChange} value: \'\'}/>',
    state: "const [star2, setStar2] = useState('')",
    getFunc:
      "const handleStar2OnChange = (event) => {setStar2(star2)};",
    filter: "text",
    params: [{ name: "star2" }],
  },
  star3: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={star3} onChange={handleStar3OnChange} value: \'\'}/>',
    state: "const [star3, setStar3] = useState('')",
    getFunc:
      "const handleStar3OnChange = (event) => {setStar3(star3)};",
    filter: "text",
    params: [{ name: "star3" }],
  },
  star4: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={star4} onChange={handleStar4OnChange} value: \'\'}/>',
    state: "const [star4, setStar4] = useState('')",
    getFunc:
      "const handleStar4OnChange = (event) => {setStar4(star4)};",
    filter: "text",
    params: [{ name: "star4" }],
  },
  start5: {
    element:
      '<input type="radio" role="radio" aria-checked="false" name={start5} onChange={handleStart5OnChange} value: \'\'}/>',
    state: "const [start5, setStart5] = useState('')",
    getFunc:
      "const handleStart5OnChange = (event) => {setStart5(start5)};",
    filter: "text",
    params: [{ name: "start5" }],
  },
  feedback: {
    element:
      "<input type='text' name='feedback' placeholder='Feedback' id='feedback' value={feedback} onChange={handleFeedbackOnChange}/>",
    state: "const [feedback, setFeedback] = useState('')",
    getFunc:
      "const handleFeedbackOnChange = (event) => {setFeedback(feedback)};",
    filter: "labelText",
    params: [{ name: "feedback" }],
  },
  submitFeedback: {
    element:
      "<ButtonComponent value={submitFeedback} name='submitFeedback' id='submitFeedback' onClick={handleSubmitFeedbackOnClick}/>SubmitFeedback</ButtonComponent>",
    getFunc:
      "const handleSubmitFeedbackOnClick = () => {setSubmitFeedback(submitFeedback)})",
    filter: "role",
    params: ["button", { name: "submitFeedback" }],
  },
};
