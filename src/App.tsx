import {Header} from "./components/Header/Header.tsx";
import {SearchInput} from "./components/Header/SearchInput/SearchInput.tsx";
import {FilterButtons} from "./components/Header/FilterButtons/FilterButtons.tsx";

function App() {
    return (
        <>
            <Header  >
                <SearchInput/>
                <FilterButtons/>
            </Header>
        </>
    )
}

export default App
