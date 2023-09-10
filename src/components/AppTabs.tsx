import Login from "./Login"
import Register from "./Register"

// using switch

const AppTabs = ({tabName}:{tabName: string}) => {
    const renderComponent = () => {
switch (tabName) {

    case "logins":
        return <Login/>
    case "registration":
        return<Register />
          

}
    }
  return <>{renderComponent()}</>
}

export default AppTabs