import AppContainer from "./Containers/AppContainer";
import HeaderContainer from "./Containers/HeaderContainer";

function App() {
    return (
        <div className="app">
            <AppContainer>
                <HeaderContainer/>
            </AppContainer>
        </div>
    )
}

export default App
