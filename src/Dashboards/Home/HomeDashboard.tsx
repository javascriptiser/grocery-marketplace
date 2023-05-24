import {SearchInput} from "../../components/Header/SearchInput/SearchInput.tsx";
import {FilterButtons} from "../../components/Header/FilterButtons/FilterButtons.tsx";
import {Header} from "../../components/Header/Header.tsx";
import {HorizontalList} from "../../components/HorizontalList/HorizontalList.tsx";
import {HorizontalListItemWrapper} from "../../components/HorizontalList/HorizontalListItem.tsx";
import {FirstHorizontalListItem} from "../../components/HorizontalList/FirstHorizontalListItem.tsx";
import {FakeData} from "../../FakeData.tsx";

export const HomeDashboard = () => {
    return <>
        <Header>
            <SearchInput/>
            <FilterButtons/>
        </Header>
        <HorizontalList>
            <HorizontalListItemWrapper>
                <FirstHorizontalListItem/>
            </HorizontalListItemWrapper>
            <FakeData/>
        </HorizontalList>
    </>
}