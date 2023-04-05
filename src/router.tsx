import Welcome from "./routes/Welcome"
import FlashCards from "./routes/flashCards"
import ErrorPage from "./routes/ErrorPage";
import ReviewProgress from './routes/ReviewProgress'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
        errorElement: <ErrorPage />
    },
    {
        path: "/flashCards",
        element: <FlashCards />
    },
    {
        path: "/progress",
        element: <ReviewProgress />
    },
]);