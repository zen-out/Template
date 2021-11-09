export const UI = {
  getId: {
    getFunc: "const handle",
    filter: "text",
    params: [{ name: "getId" }],
  },
  getIdBtn: {
    element:
      "<ButtonComponent name='getIdBtn' id='getIdBtn' onClick={handleGetIdBtnOnClick}>GetIdBtn</ButtonComponent>",
    getFunc:
      "const handleGetIdBtnOnClick = () => {setGetIdBtn(getIdBtn)}",
    filter: "role",
    params: ["button", { name: "Get Id" }],
  },
  getIdField: {
    filter: "labelText",
    params: [{ placeholder: "Number" }],
  },
  searchField: {
    element:
      "<input type='text' name='searchField' placeholder='SearchField' id='searchField' value={searchField} onChange={handleSearchFieldOnChange}>",
    state:
      "const [searchField, setSearchField] = useState('')",
    getFunc:
      "const handleSearchFieldOnChange = (event) => {setSearchField(searchField)};",
    filter: "labelText",
    params: [{ name: "Search" }],
  },
  name: {
    element:
      "<input type='text' name='name' placeholder='Name' id='name' value={name} onChange={handleNameOnChange}>",
    state: "const [name, setName] = useState('')",
    getFunc:
      "const handleNameOnChange = (event) => {setName(name)};",
    filter: "labelText",
    params: [{ name: "name" }],
  },
  addNameBtn: {
    element:
      "<ButtonComponent name='addNameBtn' id='addNameBtn' onClick={handleAddNameBtnOnClick}>AddNameBtn</ButtonComponent>",
    getFunc:
      "const handleAddNameBtnOnClick = () => {setAddNameBtn(addNameBtn)}",
    filter: "role",
    params: ["button", { name: "Add" }],
  },
  deleteNameBtn: {
    element:
      "<ButtonComponent name='deleteNameBtn' id='deleteNameBtn' onClick={handleDeleteNameBtnOnClick}>DeleteNameBtn</ButtonComponent>",
    getFunc:
      "const handleDeleteNameBtnOnClick = () => {setDeleteNameBtn(deleteNameBtn)}",
    filter: "role",
    params: ["button", { name: "deleteNameBtn" }],
  },
  toggleGoingBtn: {
    element:
      "<ButtonComponent name='toggleGoingBtn' id='toggleGoingBtn' onClick={handleToggleGoingBtnOnClick}>ToggleGoingBtn</ButtonComponent>",
    getFunc:
      "const handleToggleGoingBtnOnClick = () => {setToggleGoingBtn(toggleGoingBtn)}",
    filter: "role",
    params: ["button", { name: "toggleGoingBtn" }],
  },
  toggleNotGoingBtn: {
    element:
      "<ButtonComponent name='toggleNotGoingBtn' id='toggleNotGoingBtn' onClick={handleToggleNotGoingBtnOnClick}>ToggleNotGoingBtn</ButtonComponent>",
    getFunc:
      "const handleToggleNotGoingBtnOnClick = () => {setToggleNotGoingBtn(toggleNotGoingBtn)}",
    filter: "role",
    params: ["button", { name: "toggleNotGoingBtn" }],
  },
  editNameBtn: {
    element:
      "<ButtonComponent value={editNameBtn} name='editNameBtn' id='editNameBtn' onClick={handleEditNameBtnOnClick}>EditNameBtn</ButtonComponent>",
    getFunc:
      "const handleEditNameBtnOnClick = () => {setEditNameBtn(editNameBtn)}",
    filter: "role",
    params: ["button", { name: "Edit" }],
  },
  showFormBtn: {
    element:
      "<ButtonComponent label='Edit' name='editNameBtn' id='editNameBtn' onClick={showForm}/>",
    getFunc: "const showForm = () => {setShowEdit(true)}",
    filter: "role",
    params: ["button", { name: "Edit Form" }],
  },
};
