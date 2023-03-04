import { QueryClient, QueryClientProvider } from "react-query";
import UserContextProvider from "../context/UserContextProvider"
import MoviesContextProvider from "../context/MoviesContextProvider"
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from "react-redux";

import configureStore from "../redux/configureStore";
const store = configureStore();

const queryClient = new QueryClient();
function Providers({children}) {
    return <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <UserContextProvider>
                        <MoviesContextProvider>
                            {children}
                        </MoviesContextProvider>
                    </UserContextProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </Provider>
    
    
}

export default Providers