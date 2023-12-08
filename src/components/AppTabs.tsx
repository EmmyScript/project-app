import List from "./List"
import Read from "./Read"

import ShowImage from "./ShowImage"

// using switch

const AppTabs = ({tabName}:{tabName: string}) => {
    const renderComponent = () => {
switch (tabName) {

    
            case "list":
                return<List/>
                case "image":
                    return<ShowImage/>
                case "read":
                    return<Read/>

}
    }
  return <>{renderComponent()}</>
}

export default AppTabs