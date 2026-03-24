import { Component } from "react";
import ServerErrorPage from "@/pages/ServerError/ServerErrorPage";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("AppErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ServerErrorPage
          title="Internal server error"
          description="We hit an unexpected problem while rendering this view. Please reload the page or return home."
          showReload
        />
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
