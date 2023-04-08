// createUser send all user data to the server. Filling the user object with
// received data. (Route in server: CreateUser)
const createUser = async (fullName, id, mail, password) => {
  const res = await axios.post('http://localhost:8000/', {
    fullName: 'Hadeel Safadi',
    id: '123456789',
    mail: 'hadel12@hotmail.com',
    password: 'hadel12',
  });
  console.log(res.data);
};
var relSignUp = function () {
  var user = {
      id :$("#id-input").val(),
      mail : $("#mail-input").val(),
      full_name : $("#full-name-input").val(),
      password : $("#password-one-input").val()
  };

  local.rel.save('user', {
    fullName : user.full_name,
    password : user.password,
    mail : user.mail,
    id : user.mail
  });
};
function Goto(){
  location.replace("/Desktop/webapp2/todo_list.html");
}
