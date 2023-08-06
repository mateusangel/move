type Fn = (user: fnUser, setUser: fnUser) => boolean;

type fnUser = { userName: string; password: number };

const filterUser: Fn = (user, setUser) => {
  return (
    user.userName === setUser.userName && setUser.password === setUser.password
  );
};

let bd2 = { userName: "mateus", password: 123 };
let PersonUser = { userName: "mateus", password: 1223 };
let loggendin = filterUser(bd2, PersonUser);

console.log(loggendin);
