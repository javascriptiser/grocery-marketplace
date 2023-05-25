import {HorizontalListItemWrapper} from "./components/HorizontalList/HorizontalListItem.tsx";

export const FakeData = () => {
    let indents = [];
    for (let i = 0; i < 20; i++) {
        let randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
        let RandomArr = () => <div
            style={{backgroundColor: `#${randomColor()}`, height: "100%", borderRadius: 10}}></div>
        indents.push(<HorizontalListItemWrapper key={i}>
            <RandomArr/>
        </HorizontalListItemWrapper>);
    }
    return <>{indents}</>
}


export const FakeCardMenuData = () => {

}

