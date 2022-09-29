import Header from "./Header/Header";
import MainContainerClass from './MainContainer.module.scss'



const MainContainer = () => {
    return (
        <div className={MainContainerClass.mainContainerWrapper}>
           <Header/>
           
        </div>
    );
};

export default MainContainer;