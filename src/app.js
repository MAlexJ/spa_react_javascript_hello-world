import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {PageLoader} from "./components/page-loader";
import {AuthenticationGuard} from "./components/authentication-guard";
import {AdminPage} from "./pages/admin-page";
import {CallbackPage} from "./pages/callback-page";
import {HomePage} from "./pages/home-page";
import {NotFoundPage} from "./pages/not-found-page";
import {ProfilePage} from "./pages/profile-page";
import {ProtectedPage} from "./pages/protected-page";
import {PublicPage} from "./pages/public-page";
import {CalendarPage} from "./pages/calendar-page";
import {CreateEventPage} from "./pages/create-event-page";
import {AddClientPage} from "./pages/add-client-page";
import {CreateClientPage} from "./pages/create-client-page";
import {ConfirmEventPage} from "./pages/confirm-event-page";
import {SearchClientPage} from "./pages/search-client-page";

export const App = () => {
    const {isLoading} = useAuth0();

    if (isLoading) {
        return (<div className="page-layout">
            <PageLoader/>
        </div>);
    }

    return (<Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage}/>}
        />
        <Route path="/public" element={<PublicPage/>}/>
        <Route path="/event/create" element={<CreateEventPage/>}/>
        <Route path="/event/confirm" element={<ConfirmEventPage/>}/>
        <Route path="/client/add" element={<AddClientPage/>}/>
        <Route path="/client/create" element={<CreateClientPage/>}/>
        <Route path="/client/search" element={<SearchClientPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route
            path="/protected"
            element={<AuthenticationGuard component={ProtectedPage}/>}
        />
        <Route
            path="/admin"
            element={<AuthenticationGuard component={AdminPage}/>}
        />
        <Route path="/callback" element={<CallbackPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>);
};
