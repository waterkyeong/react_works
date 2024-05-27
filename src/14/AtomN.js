import { LiaCocktailSolid } from "react-icons/lia"
import { atom, selector } from "recoil"

export const AtomN = atom({
    key : "AtomN",
    default : 10
    // default : localStorage.getItem("n") div1에서 아톰에서 가져올 때 사용한것
})

export const AtomN2 = selector({
    key : "AtomN2",
    get : ({get}) => {
        // let tm = get(AtomN) % 2 == 0 ? "짝수" : "홀수"
        return get(AtomN)*2
    }
})