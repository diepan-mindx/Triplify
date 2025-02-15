// tao bien luu tru 1 account co dinh
const defaultAccount = {
   
    email: "abc123@gmail.com",
    password: "abc123",
  };
  // luu bien co dinh vao local storage
  if (!localStorage.getItem("defaultAccount")) {
    // neu chua co du lieu trong storage => tao
    // JSON (chuoi - string): kieu du lieu dung de luu vao trong storage => js khong doc duoc
    // => chuyen kieu du lieu tu js -> json = func stringify()
    localStorage.setItem("defaultAccount", JSON.stringify(defaultAccount));
  }