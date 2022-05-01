import React from "react";
import Notification_Icon from './assets/images/top_menu/ic_notification-icon_notification_off.svg';
import Profile_Photo from './assets/images/top_menu/profile.png';
import Search_Icon from './assets/images/top_menu/Search box/ic_search-icon_search.svg';
import Icon_Plus from './assets/images/top_menu/button_add_project/icon_plus.svg';

class TopMenu extends React.Component{
    render(){
        return(
            <div className="TopMenu">
                <SearchBox/>
                <AddProjectButton/>
                <div className="divider"></div>
                <img src={Notification_Icon} className="Notification_Icon" alt="Notification_Icon"/>
                <div className="divider"></div>
                <img src={Profile_Photo} className="Profile_Photo" alt="Profile_Photo"/>
            </div>
        )
    }
}

function SearchBox(){
    return(
        <div className="SearchBox">
            <img src={Search_Icon} className="Search_Icon" alt="Search_Icon"/>
            <input type="text" id="search" name="search" placeholder="Search your project here"></input>
        </div>
    );
}

function AddProjectButton(){
    return(
        <div className="addProject">
            <img src={Icon_Plus} className="Icon_Plus" alt="Icon_Plus"/>
            <p className="add-project-text">Add Project</p>
        </div>
    );
}

export default TopMenu;