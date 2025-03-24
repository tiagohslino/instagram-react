import Navbar from "./Navbar";
import Esquerda from "./Esquerda";
import Sidebar from "./Sidebar";

export default function App(){ 
    return ( 
        <>
        <Navbar />
            <div className="corpo">
                <Esquerda />
                <Sidebar />               
            </div>            
        </>
    );
}