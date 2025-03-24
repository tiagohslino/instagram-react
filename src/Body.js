import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Body(){
    
    return( <div className="corpo">
                <Posts />
                <Sidebar />               
            </div> 
    );
}