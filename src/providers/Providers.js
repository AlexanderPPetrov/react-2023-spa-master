import UserContextProvider from "../context/UserContextProvider"
import MoviesContextProvider from "../context/MoviesContextProvider"
function Providers({children}) {
    return <UserContextProvider>
        <MoviesContextProvider>
            {children}
        </MoviesContextProvider>
    </UserContextProvider>
}

export default Providers