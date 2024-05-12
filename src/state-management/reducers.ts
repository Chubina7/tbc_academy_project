type ActionType =
    | { type: "ADD"; payload: Record<any, any> }
    | { type: "REMOVE"; payload: Record<any, any> }
    | { type: "RESET" };

export const BookmarkStateReducer = (state: any[], action: ActionType) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("bookmarks", JSON.stringify([...state, action.payload]))
            return [...state, action.payload];
        }
        case "REMOVE": {
            localStorage.setItem("bookmarks", JSON.stringify(state.filter((i) => i.title !== action.payload.title)))
            return state.filter((i) => i.title !== action.payload.title);
        }
        case "RESET": {
            localStorage.setItem("bookmarks", JSON.stringify([]))
            return [];
        }
    }
};