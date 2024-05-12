type ActionType =
    | { type: "ADD"; payload: Record<any, any> }
    | { type: "REMOVE"; payload: Record<any, any> }
    | { type: "RESET" };

export const BookmarkStateInitial: any[] = [];
export const BookmarkStateReducer = (state: any[], action: ActionType) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.payload];
        }
        case "REMOVE": {
            return state.filter((i) => i.title !== action.payload.title);
        }
        case "RESET": {
            return BookmarkStateInitial;
        }
    }
};