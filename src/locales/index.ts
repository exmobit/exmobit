import en from "./en.json";
import ru from "./ru.json";

const languages = {
    en: en,
    ru: ru
}

export function setCookie(name: string, value: string) {
    document.cookie = name + "=" + value + ";path=/";
}

export function getCookie(name: string) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie?.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return "";
}

const t = (id: string): string => {
    const len = getCookie('len') || 'en'

    //@ts-ignore
    return languages[len][id]
}

export default t