import ReactQueryProvider from "./hooks/queries/ReactQueryProivder";
import Routes from "./routes";
import { SentryUtil } from "./utils/sentry.util";

SentryUtil.init();

function App() {
  return (
    <ReactQueryProvider>
      <Routes />
    </ReactQueryProvider>
  );
}

export default App;
