import { all, fork } from "redux-saga/effects";
import game from "./game";


export default function* root() {
    const sagas = [
        game
    ];
    yield all(sagas.map(fork));
}
