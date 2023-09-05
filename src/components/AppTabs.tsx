import Login from "./Login"
import Register from "./Register"
import SaveItem from "./SaveItem"
// using switch

const AppTabs = ({tabName}:{tabName: string}) => {
    const renderComponent = () => {
switch (tabName) {

    case "logins":
        return <Login/>
    case "registration":
        return<Register />
        
        case "save":
        return<SaveItem />
}
    }
  return <>{renderComponent()}</>
}

export default AppTabs