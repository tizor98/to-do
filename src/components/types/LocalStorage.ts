import {Item} from "./Item";

type ItemStorage = Array<Item> | null

class LocalStorage {

    getItem(key: string): Array<Item> {
        const item = localStorage.getItem(key)

        if(!item || item === 'null' || item === 'undefined') return []

        try {
            return JSON.parse(item)
        } catch {}

        return []
    }

    setItem(key: string, value: ItemStorage): void {
        if(value === null) {
            localStorage.removeItem(key)
            return
        }
        localStorage.setItem(key, JSON.stringify(value))
    }

}

export const storage = new LocalStorage()
