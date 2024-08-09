import { MdHome } from "react-icons/md"; 
import { GiConsoleController } from "react-icons/gi"; 
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GoSignIn } from "react-icons/go"; 

export const links = [
    {
        name: "Home",
        href: "/",
        icon: MdHome
    },
    {
        name: "Games",
        href: "/games",
        icon: GiConsoleController
    },
    {
        name: "store",
        href: "/store",
        icon: AiOutlineAppstoreAdd
    },
    {
        name: "Sign-In",
        href: "/sign-in",
        icon: GoSignIn
    }
]